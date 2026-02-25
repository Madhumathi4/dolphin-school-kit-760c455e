import { importantNotes } from "@/data/mockData";
import { Bell, Calendar } from "lucide-react";

const ImportantNotes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">Stay Updated</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Important Notices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {importantNotes.map((note) => (
            <div
              key={note.id}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{note.title}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3 h-3" />
                <span>{new Date(note.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantNotes;
