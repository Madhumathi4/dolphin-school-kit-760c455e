import { leadership } from "@/data/mockData";
import { Quote } from "lucide-react";

const Leadership = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">Meet Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Leadership</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadership.map((leader) => (
            <div
              key={leader.id}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary/10"
                />
                <h3 className="text-lg font-bold text-foreground">{leader.name}</h3>
                <p className="text-sm font-semibold text-primary-glow mb-1">{leader.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{leader.qualification}</p>
                <Quote className="w-6 h-6 text-primary/20 mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{leader.message}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
