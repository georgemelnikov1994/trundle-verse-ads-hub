
import { DollarSign, Eye, MousePointer, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import StatsCard from "@/components/StatsCard";
import DashboardChart from "@/components/DashboardChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publishers = () => {
  const earningsData = [
    { name: 'Jan', value: 1250 },
    { name: 'Feb', value: 1890 },
    { name: 'Mar', value: 2100 },
    { name: 'Apr', value: 2800 },
    { name: 'May', value: 3200 },
    { name: 'Jun', value: 3600 },
  ];

  const impressionsData = [
    { name: 'Jan', value: 45000 },
    { name: 'Feb', value: 52000 },
    { name: 'Mar', value: 61000 },
    { name: 'Apr', value: 68000 },
    { name: 'May', value: 75000 },
    { name: 'Jun', value: 82000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Publisher Dashboard</h1>
          <p className="text-gray-600 mt-2">Monetize your traffic with premium ads</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Earnings"
            value="$3,650"
            subtitle="This month"
            icon={<DollarSign size={24} />}
            trend="+12.5% from last month"
          />
          <StatsCard
            title="Impressions"
            value="82.5K"
            subtitle="This month"
            icon={<Eye size={24} />}
            trend="+8.2% from last month"
          />
          <StatsCard
            title="Click Rate"
            value="2.4%"
            subtitle="Average CTR"
            icon={<MousePointer size={24} />}
            trend="+0.3% from last month"
          />
          <StatsCard
            title="RPM"
            value="$4.42"
            subtitle="Revenue per mille"
            icon={<TrendingUp size={24} />}
            trend="+5.1% from last month"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DashboardChart 
            title="Monthly Earnings" 
            data={earningsData}
            color="#10b981"
          />
          <DashboardChart 
            title="Monthly Impressions" 
            data={impressionsData}
            color="#3b82f6"
          />
        </div>

        {/* Ad Placements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Your Ad Placements</CardTitle>
            <Button>Add New Placement</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Header Banner", size: "728x90", revenue: "$1,250", status: "Active" },
                { name: "Sidebar Rectangle", size: "300x250", revenue: "$890", status: "Active" },
                { name: "Footer Banner", size: "728x90", revenue: "$560", status: "Paused" },
                { name: "Mobile Banner", size: "320x50", revenue: "$950", status: "Active" },
              ].map((placement, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{placement.name}</h4>
                    <p className="text-sm text-gray-600">{placement.size} pixels</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">{placement.revenue}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      placement.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {placement.status}
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

export default Publishers;
