import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const levels = [
  {
    number: 1,
    title: "Planning & Strategy",
    description: "We start by understanding your business goals and creating a comprehensive roadmap for success.",
    details: "Our strategic planning process includes market analysis, competitor research, goal setting, and timeline development to ensure every decision aligns with your business objectives."
  },
  {
    number: 2,
    title: "Brand Awareness & Protection",
    description: "Build and protect your brand identity across all digital platforms and touchpoints.",
    details: "From logo design to online reputation management, we ensure your brand maintains consistency and credibility while protecting against digital threats and negative publicity."
  },
  {
    number: 3,
    title: "Automated & Simplified Lead Management",
    description: "Streamline your lead capture and nurturing process with intelligent automation systems.",
    details: "Implement CRM systems, automated email sequences, lead scoring, and follow-up processes that convert prospects into customers without manual intervention."
  },
  {
    number: 4,
    title: "Robust Client Nurturing",
    description: "Develop lasting relationships with personalized communication and value-driven interactions.",
    details: "Create automated nurturing campaigns, client portals, feedback systems, and retention strategies that keep clients engaged and encourage repeat business."
  },
  {
    number: 5,
    title: "Tailored & Distilled Processes and Automation Technologies",
    description: "Custom automation solutions designed specifically for your business operations.",
    details: "From workflow automation to custom integrations, we create tailored solutions that eliminate repetitive tasks and optimize your business processes for maximum efficiency."
  },
  {
    number: 6,
    title: "Communication At Every Level",
    description: "Ensure seamless communication between your team, clients, and systems.",
    details: "Implement unified communication platforms, automated notifications, client portals, and internal collaboration tools that keep everyone connected and informed."
  },
  {
    number: 7,
    title: "Exponential Growth",
    description: "Scale your business with proven systems and strategic expansion planning.",
    details: "Leverage data-driven insights, scalable infrastructure, and growth strategies to expand your market reach and multiply your business success exponentially."
  }
];

export default function LevelsSection() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const toggleLevel = (levelNumber: number) => {
    setExpandedLevel(expandedLevel === levelNumber ? null : levelNumber);
  };

  return (
    <section id="levels" className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Our <span className="bg-gradient-to-r from-level7-pink to-level7-blue bg-clip-text text-transparent">7 Levels</span> of Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that takes your business from chaos to exponential growth
          </p>
        </div>

        <div className="space-y-4">
          {levels.map((level) => (
            <Card 
              key={level.number}
              className="hover-elevate transition-all duration-300 cursor-pointer bg-background border-border"
              onClick={() => toggleLevel(level.number)}
              data-testid={`level-card-${level.number}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-level7-pink to-level7-blue heptagon flex items-center justify-center">
                      <span className="text-white font-bold text-lg rotate-180">{level.number}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {level.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        {level.description}
                      </CardDescription>
                    </div>
                  </div>
                  {expandedLevel === level.number ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              
              {expandedLevel === level.number && (
                <CardContent className="pt-0">
                  <div className="pl-16 pr-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {level.details}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}