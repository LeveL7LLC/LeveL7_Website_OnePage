import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send to webhook if WEBHOOK_URL is provided
      const webhookUrl = process.env.WEBHOOK_URL;
      if (webhookUrl) {
        try {
          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...submission,
              source: 'LeveL7 Website Contact Form'
            }),
          });
          
          if (!response.ok) {
            console.error('Webhook failed:', response.status, response.statusText);
          }
        } catch (webhookError) {
          console.error('Webhook error:', webhookError);
          // Continue processing even if webhook fails
        }
      }
      
      res.json({ 
        success: true, 
        message: 'Contact submission received successfully',
        id: submission.id
      });
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data',
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: 'Failed to process contact submission' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
