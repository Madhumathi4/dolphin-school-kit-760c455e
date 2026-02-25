import { Image, Images, Trophy, Bell, Users, GraduationCap } from "lucide-react";

const stats = [
  { label: "Banner Images", count: 1, icon: Image },
  { label: "Gallery Images", count: 8, icon: Images },
  { label: "Achievements", count: 5, icon: Trophy },
  { label: "Notices", count: 3, icon: Bell },
  { label: "Leaders", count: 2, icon: Users },
  { label: "Admissions", count: 1, icon: GraduationCap },
];

const DashboardHome = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-foreground mb-6">Welcome to Admin Dashboard</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-xl p-6 card-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{s.count}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
