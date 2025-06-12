import { ArrowRight, Target, Users, BarChart3, Shield, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect <span className="text-primary">Advertisers</span> with 
              <span className="text-primary"> Publishers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The premium ad network that delivers results. Maximize revenue for publishers 
              and reach your target audience as an advertiser with our cutting-edge platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/publishers">
                <Button size="lg" className="w-full sm:w-auto">
                  Start as Publisher
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/advertisers">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Start as Advertiser
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AdConnect?
            </h2>
            <p className="text-gray-600">
              Advanced features designed for maximum performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap size={32} />}
              title="Real-Time Analytics"
              description="Monitor your performance with detailed analytics and insights updated in real-time."
            />
            <FeatureCard
              icon={<Shield size={32} />}
              title="Fraud Protection"
              description="Advanced AI-powered fraud detection keeps your campaigns safe and your revenue secure."
            />
            <FeatureCard
              icon={<Target size={32} />}
              title="Precise Targeting"
              description="Reach the right audience with our sophisticated targeting options and audience insights."
            />
            <FeatureCard
              icon={<Globe size={32} />}
              title="Global Reach"
              description="Access premium inventory worldwide with our extensive network of quality publishers."
            />
            <FeatureCard
              icon={<BarChart3 size={32} />}
              title="Performance Optimization"
              description="Machine learning algorithms automatically optimize your campaigns for better results."
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Dedicated Support"
              description="Get expert help from our dedicated account managers and 24/7 support team."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful publishers and advertisers today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/publishers">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Become a Publisher
              </Button>
            </Link>
            <Link to="/advertisers">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                Start Advertising
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AdConnect</h3>
              <p className="text-gray-400">
                The premium ad network connecting advertisers with publishers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Publishers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Getting Started</li>
                <li>Ad Formats</li>
                <li>Payment Terms</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Advertisers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Campaign Setup</li>
                <li>Targeting Options</li>
                <li>Analytics</li>
                <li>API Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AdConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
