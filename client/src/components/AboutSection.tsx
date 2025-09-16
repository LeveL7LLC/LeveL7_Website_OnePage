import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="bg-gradient-to-r from-level7-blue to-level7-pink bg-clip-text text-transparent">Small Service Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the unique challenges of service-based businesses and have tailored our solutions accordingly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-card border-card-border hover-elevate">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-level7-pink to-level7-blue heptagon flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Our Focus</h3>
              <p className="text-muted-foreground">
                Lead management and business automation solutions that actually work for service businesses
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-card border-card-border hover-elevate">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-level7-blue to-level7-pink heptagon flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Our Clients</h3>
              <p className="text-muted-foreground">
                Small service businesses looking to grow without getting overwhelmed by technology
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-card border-card-border hover-elevate">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-level7-pink via-level7-purple to-level7-blue heptagon flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Our Promise</h3>
              <p className="text-muted-foreground">
                Less busywork, more business. We automate the tedious so you can focus on growth
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-level7-pink/20 via-level7-purple/15 to-level7-blue/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Choose LeveL7?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Industry Expertise</h4>
              <p className="text-muted-foreground">
                We've worked exclusively with service businesses, so we understand your pain points and know what solutions actually work.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Proven Results</h4>
              <p className="text-muted-foreground">
                Our 7-level methodology has helped dozens of service businesses streamline operations and increase revenue.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Complete Solution</h4>
              <p className="text-muted-foreground">
                From IT infrastructure to digital marketing, we handle all the technology so you can focus on serving your clients.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Ongoing Support</h4>
              <p className="text-muted-foreground">
                We don't just set things up and leave. We provide ongoing support and optimization to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}