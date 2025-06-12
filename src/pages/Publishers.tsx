
import { DollarSign, Eye, MousePointer, TrendingUp, Check, ArrowRight, Shield, Clock, Globe, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";

const Publishers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Monetize Your Website with <span className="text-primary">Premium Ads</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of publishers earning substantial revenue with our high-paying ad network. 
              Get started in minutes and start earning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Sample Ads
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AdConnect for Publishers?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer the best revenue opportunities with premium advertisers and advanced optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<DollarSign size={32} />}
              title="High Revenue Share"
              description="Earn up to 85% revenue share with our competitive payout structure. No hidden fees or deductions."
            />
            <FeatureCard
              icon={<Clock size={32} />}
              title="Fast Approval"
              description="Get approved within 24 hours. Quick setup process gets you earning faster than competitors."
            />
            <FeatureCard
              icon={<Shield size={32} />}
              title="Premium Advertisers"
              description="Work with top-tier brands and advertisers. All ads are pre-screened for quality and relevance."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Global Coverage"
              description="Monetize traffic from 150+ countries with geo-targeted campaigns for maximum revenue."
            />
            <FeatureCard
              icon={<Zap size={32} />}
              title="Real-Time Analytics"
              description="Track your earnings and performance with detailed analytics updated in real-time."
            />
            <FeatureCard
              icon={<Eye size={32} />}
              title="Multiple Ad Formats"
              description="Choose from display, native, video, and mobile ad formats to maximize your earnings."
            />
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Ad Formats
            </h2>
            <p className="text-gray-600">
              Choose from various high-performing ad formats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Banner Ads", size: "728x90, 300x250", description: "Traditional display banners" },
              { name: "Native Ads", size: "Responsive", description: "Blend naturally with content" },
              { name: "Popunder Ads", size: "Full browser", description: "High-impact background ads" },
              { name: "Push Ads", size: "Desktop/Mobile", description: "Direct notification ads" },
            ].map((format, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{format.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{format.size}</p>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-gray-600">
              Simple 3-step process to start monetizing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "1", 
                title: "Apply", 
                description: "Submit your website for review with our simple application form" 
              },
              { 
                step: "2", 
                title: "Get Approved", 
                description: "Our team reviews your site within 24 hours and sends approval" 
              },
              { 
                step: "3", 
                title: "Start Earning", 
                description: "Add ad codes to your site and start earning revenue immediately" 
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of publishers already earning with AdConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Apply Now - It's Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publishers;
