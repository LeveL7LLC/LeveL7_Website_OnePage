import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Network, 
  Monitor, 
  Cloud, 
  Database, 
  Bot, 
  Globe, 
  FolderOpen, 
  BarChart3, 
  Megaphone, 
  Search, 
  Users, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Network Installation & Administration",
    description: "Complete network setup, configuration, and ongoing management for seamless business operations."
  },
  {
    icon: Monitor,
    title: "Remote Worker Setups",
    description: "Secure, efficient remote work solutions that keep your team connected and productive."
  },
  {
    icon: Cloud,
    title: "Cloud Network Infrastructure",
    description: "Scalable cloud solutions designed to grow with your business needs."
  },
  {
    icon: Database,
    title: "Backups & Data Management",
    description: "Comprehensive data protection and recovery strategies to safeguard your business."
  },
  {
    icon: Bot,
    title: "Business Automation Solutions",
    description: "Streamline operations with intelligent automation that reduces manual work."
  },
  {
    icon: Globe,
    title: "Website Design & Hosting",
    description: "Professional websites that convert visitors into customers, with reliable hosting."
  },
  {
    icon: FolderOpen,
    title: "Cloud File Storage",
    description: "Secure, accessible file storage solutions for seamless collaboration."
  },
  {
    icon: BarChart3,
    title: "KPI Dashboards",
    description: "Real-time insights and analytics to track your business performance."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive growth and engagement."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Search engine optimization to increase your online visibility and traffic."
  },
  {
    icon: Users,
    title: "Leads Management",
    description: "Comprehensive lead tracking and nurturing systems to maximize conversions."
  },
  {
    icon: Zap,
    title: "AI Integrations",
    description: "Cutting-edge AI solutions to automate tasks and enhance business intelligence."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-level7-pink">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology and marketing solutions designed specifically for small service businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 bg-card border-card-border"
                data-testid={`service-card-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-level7-purple to-level7-pink rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}