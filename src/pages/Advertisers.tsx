
import { Target, Users, BarChart3, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import StatsCard from "@/components/StatsCard";
import DashboardChart from "@/components/DashboardChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Advertisers = () => {
  const campaignData = [
    { name: 'Jan', value: 3400 },
    { name: 'Feb', value: 4200 },
    { name: 'Mar', value: 3800 },
    { name: 'Apr', value: 5100 },
    { name: 'May', value: 4600 },
    { name: 'Jun', value: 5800 },
  ];

  const conversionsData = [
    { name: 'Jan', value: 145 },
    { name: 'Feb', value: 189 },
    { name: 'Mar', value: 168 },
    { name: 'Apr', value: 234 },
    { name: 'May', value: 201 },
    { name: 'Jun', value: 267 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Advertiser Dashboard</h1>
          <p className="text-gray-600 mt-2">Reach your target audience with precision</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Spend"
            value="$12,450"
            subtitle="This month"
            icon={<Target size={24} />}
            trend="Budget on track"
          />
          <StatsCard
            title="Impressions"
            value="156K"
            subtitle="This month"
            icon={<Users size={24} />}
            trend="+15.3% from last month"
          />
          <StatsCard
            title="Conversions"
            value="267"
            subtitle="This month"
            icon={<BarChart3 size={24} />}
            trend="+22.1% from last month"
          />
          <StatsCard
            title="ROAS"
            value="4.2x"
            subtitle="Return on ad spend"
            icon={<Zap size={24} />}
            trend="+0.8x from last month"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DashboardChart 
            title="Campaign Performance" 
            data={campaignData}
            color="#8b5cf6"
          />
          <DashboardChart 
            title="Monthly Conversions" 
            data={conversionsData}
            color="#f59e0b"
          />
        </div>

        {/* Active Campaigns */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Campaigns</CardTitle>
            <Button>Create Campaign</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Summer Sale 2024", budget: "$2,500", spent: "$1,890", conversions: 89, status: "Active" },
                { name: "Product Launch", budget: "$5,000", spent: "$3,200", conversions: 156, status: "Active" },
                { name: "Brand Awareness", budget: "$1,800", spent: "$1,100", conversions: 22, status: "Active" },
                { name: "Holiday Special", budget: "$3,200", spent: "$2,850", conversions: 67, status: "Paused" },
              ].map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{campaign.name}</h4>
                    <p className="text-sm text-gray-600">{campaign.spent} / {campaign.budget} spent</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{campaign.conversions} conversions</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      campaign.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Advertisers;
