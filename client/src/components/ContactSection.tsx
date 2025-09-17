import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const submitContactForm = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setMessageType('success');
      setShowMessage(true);
      setIsVisible(false);
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      setMessageType('error');
      setShowMessage(true);
      setIsVisible(false);
    },
  });

  // Handle fade out and form reset
  useEffect(() => {
    if (showMessage) {
      // Start fade out after 3.5 seconds
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 3500);

      // Hide message and reset form after fade out completes
      const hideTimer = setTimeout(() => {
        setShowMessage(false);
        setIsFadingOut(false);
        
        // Show form again after a brief delay
        setTimeout(() => {
          setIsVisible(true);
          if (messageType === 'success') {
            setFormData({
              name: '',
              email: '',
              company: '',
              phone: '',
              service: '',
              message: ''
            });
          }
        }, 100);
      }, 4000); // Total display time: 4 seconds

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [showMessage, messageType]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm.mutate(formData);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Ready to Get <span className="text-level7-pink">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help streamline your business and increase your revenue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Your Free Consultation</CardTitle>
              <CardDescription className="text-muted-foreground">
                Tell us about your business and we'll create a custom plan for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Success/Error Message Display */}
              {showMessage && (
                <div className={`flex flex-col items-center justify-center py-16 px-8 text-center transition-opacity duration-500 bg-white/95 rounded-lg border ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="mb-6">
                    {messageType === 'success' ? (
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    ) : (
                      <XCircle className="w-16 h-16 text-red-500" />
                    )}
                  </div>
                  <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-level7-pink via-level7-purple to-level7-blue bg-clip-text text-transparent`}>
                    {messageType === 'success' ? 'Thank You!' : 'Oops!'}
                  </h3>
                  <p className={`text-lg bg-gradient-to-r from-level7-pink via-level7-purple to-level7-blue bg-clip-text text-transparent`}>
                    {messageType === 'success' 
                      ? "Your message has been sent successfully! We'll get back to you within 24 hours."
                      : "There was an error sending your message. Please try again or contact us directly."
                    }
                  </p>
                </div>
              )}

              {/* Contact Form */}
              {isVisible && !showMessage && (
                <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        data-testid="input-name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        data-testid="input-email"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-foreground">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        data-testid="input-company"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        data-testid="input-phone"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-foreground">Primary Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger id="service" className="mt-1" data-testid="select-service">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lead-management">Lead Management</SelectItem>
                        <SelectItem value="business-automation">Business Automation</SelectItem>
                        <SelectItem value="msp-services">MSP Services</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="website-design">Website Design</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="full-package">Complete Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Tell us about your business</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="What challenges are you facing? What are your goals?"
                      className="mt-1 min-h-[120px]"
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-level7-pink hover:bg-level7-pink/90 text-white py-6 text-lg"
                    data-testid="button-submit-contact"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? 'Sending...' : 'Get My Free Consultation'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-level7-purple to-level7-pink rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 hours during business days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-level7-pink to-level7-blue rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@l-7.io" className="hover:text-level7-blue transition-colors">
                        hello@l-7.io
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-level7-blue to-level7-purple rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+18775538357" className="hover:text-level7-blue transition-colors">
                        (877) 5-LEVEL7
                      </a><br />
                      Monday - Friday, 9 AM - 6 PM AZT
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-level7-purple/20 to-level7-pink/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-level7-pink rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-muted-foreground">We'll schedule a 30-minute discovery call</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-level7-purple rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-muted-foreground">We'll analyze your current setup and goals</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-level7-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p className="text-muted-foreground">We'll create a custom plan for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}