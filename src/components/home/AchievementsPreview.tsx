import { Link } from "react-router-dom";
import { achievements } from "@/data/mockData";
import { Trophy, Medal, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Academic: <Trophy className="w-5 h-5" />,
  Sports: <Medal className="w-5 h-5" />,
  Cultural: <Music className="w-5 h-5" />,
};

const AchievementsPreview = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">Our Pride</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {achievements.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-primary">{iconMap[item.category] || <Trophy className="w-5 h-5" />}</div>
                  <span className="text-xs font-semibold text-primary-glow uppercase">{item.category}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/achievements">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              View All Achievements
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;
