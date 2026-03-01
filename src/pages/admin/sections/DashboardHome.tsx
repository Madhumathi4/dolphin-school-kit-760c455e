import { Images, Image, Video, Calendar, Bell, Activity } from "lucide-react";

const stats = [
  { label: "Total Gallery Media", count: 48, icon: Images, color: "bg-primary" },
  { label: "Total Images", count: 30, icon: Image, color: "bg-primary-light" },
  { label: "Total Videos", count: 10, icon: Video, color: "bg-primary-glow" },
  { label: "Total Events", count: 8, icon: Calendar, color: "bg-primary" },
  { label: "Total Activities", count: 12, icon: Activity, color: "bg-primary-light" },
  { label: "Total Notices", count: 3, icon: Bell, color: "bg-primary-glow" },
];

interface Props {
  userName?: string;
}

const DashboardHome = ({ userName }: Props) => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">Welcome{userName ? `, ${userName}` : " Admin"} 👋</h3>
        <p className="text-sm text-muted-foreground mt-1">Here's an overview of your school portal</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-primary rounded-2xl p-6 card-shadow flex items-center gap-4 hover:card-shadow-hover transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">{s.count}</p>
              <p className="text-sm text-primary-foreground/80">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Media breakdown */}
      <div className="mt-8 bg-card rounded-2xl p-6 card-shadow">
        <h4 className="font-semibold text-foreground mb-4">Media Statistics</h4>
        <div className="space-y-3">
          {[
            { label: "Images", count: 30, total: 48 },
            { label: "Videos (MP4)", count: 10, total: 48 },
            { label: "YouTube Links", count: 8, total: 48 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-foreground">{item.count}/{item.total}</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(item.count / item.total) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
