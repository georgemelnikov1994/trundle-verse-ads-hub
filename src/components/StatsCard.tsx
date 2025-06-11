
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  trend?: string;
}

const StatsCard = ({ title, value, subtitle, icon, trend }: StatsCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold text-primary mt-1">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            {trend && (
              <p className="text-xs text-green-600 mt-1 font-medium">{trend}</p>
            )}
          </div>
          <div className="text-primary opacity-80">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
