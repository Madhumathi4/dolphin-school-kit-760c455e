import { useState } from "react";
import {
  LayoutDashboard, Image, Images, Trophy, GraduationCap,
  Bell, Users, MapPin, LogOut, Menu, X
} from "lucide-react";
import ManageBanner from "./sections/ManageBanner";
import ManageGallery from "./sections/ManageGallery";
import ManageAchievements from "./sections/ManageAchievements";
import ManageAdmission from "./sections/ManageAdmission";
import ManageNotes from "./sections/ManageNotes";
import ManageLeadership from "./sections/ManageLeadership";
import ManageMap from "./sections/ManageMap";
import DashboardHome from "./sections/DashboardHome";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "banner", label: "Manage Banner", icon: Image },
  { id: "gallery", label: "Manage Gallery", icon: Images },
  { id: "achievements", label: "Manage Achievements", icon: Trophy },
  { id: "admission", label: "Manage Admission", icon: GraduationCap },
  { id: "notes", label: "Manage Notes", icon: Bell },
  { id: "leadership", label: "Manage Leadership", icon: Users },
  { id: "map", label: "Manage Map", icon: MapPin },
];

interface Props {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: Props) => {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (active) {
      case "banner": return <ManageBanner />;
      case "gallery": return <ManageGallery />;
      case "achievements": return <ManageAchievements />;
      case "admission": return <ManageAdmission />;
      case "notes": return <ManageNotes />;
      case "leadership": return <ManageLeadership />;
      case "map": return <ManageMap />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen flex bg-section-alt">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-primary text-primary-foreground flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="p-5 flex items-center justify-between border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
              <span className="text-primary font-bold text-sm">D</span>
            </div>
            <span className="font-semibold text-sm">Admin Panel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                active === item.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-primary-foreground/80 hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-sidebar-accent/50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-accent">
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-foreground capitalize">
            {menuItems.find((m) => m.id === active)?.label || "Dashboard"}
          </h2>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
