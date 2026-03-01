import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/floating/Chatbot";
import { mockEvents, SchoolEvent } from "@/data/eventsData";
import { ChevronLeft, ChevronRight, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const EventsCalendar = () => {
  const [current, setCurrent] = useState(new Date(2026, 2, 1)); // March 2026
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const eventMap = useMemo(() => {
    const map: Record<string, SchoolEvent[]> = {};
    mockEvents.forEach(ev => {
      const d = ev.date;
      if (!map[d]) map[d] = [];
      map[d].push(ev);
    });
    return map;
  }, []);

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prev = () => setCurrent(new Date(year, month - 1, 1));
  const next = () => setCurrent(new Date(year, month + 1, 1));

  const dateStr = (d: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Events Calendar</h1>
          </div>
          <p className="text-muted-foreground">Stay updated with school events and activities</p>
        </div>

        <div className="bg-card rounded-2xl card-shadow overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 bg-primary text-primary-foreground">
            <Button variant="ghost" onClick={prev} className="text-primary-foreground hover:bg-primary-light">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg md:text-xl font-bold">{MONTHS[month]} {year}</h2>
            <Button variant="ghost" onClick={next} className="text-primary-foreground hover:bg-primary-light">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 bg-secondary">
            {DAYS.map(d => (
              <div key={d} className="p-2 md:p-3 text-center text-xs md:text-sm font-semibold text-muted-foreground">{d}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              const events = day ? eventMap[dateStr(day)] : undefined;
              const isToday = day === 1 && month === 2 && year === 2026; // mock "today"
              return (
                <div
                  key={i}
                  className={`min-h-[60px] md:min-h-[90px] border border-border/50 p-1 md:p-2 ${day ? "cursor-pointer hover:bg-accent/50 transition-colors" : ""}`}
                  onClick={() => events && events.length > 0 && setSelectedEvent(events[0])}
                >
                  {day && (
                    <>
                      <span className={`text-xs md:text-sm font-medium ${events ? "text-primary-foreground bg-primary w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center" : "text-foreground"}`}>
                        {day}
                      </span>
                      {events && (
                        <div className="mt-1 hidden md:block">
                          {events.map(ev => (
                            <p key={ev.id} className="text-[10px] text-primary font-medium truncate">{ev.title}</p>
                          ))}
                        </div>
                      )}
                      {events && <div className="mt-1 md:hidden w-1.5 h-1.5 rounded-full bg-primary mx-auto" />}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Event list */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockEvents.filter(e => e.date >= "2026-03-01").sort((a, b) => a.date.localeCompare(b.date)).map(ev => (
              <div key={ev.id} onClick={() => setSelectedEvent(ev)} className="bg-card rounded-2xl p-5 card-shadow hover:card-shadow-hover transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{MONTHS[parseInt(ev.date.split("-")[1]) - 1]?.slice(0, 3)}</span>
                    <span className="text-sm font-bold text-primary">{parseInt(ev.date.split("-")[2])}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{ev.title}</h4>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">{ev.category}</span>
                    <p className="text-sm text-muted-foreground mt-1">{ev.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
          <div className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full card-shadow animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-foreground">{selectedEvent.title}</h3>
              <button onClick={() => setSelectedEvent(null)} className="p-1 rounded-lg hover:bg-accent"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{new Date(selectedEvent.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
              <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">{selectedEvent.category}</span>
              <p className="text-muted-foreground">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default EventsCalendar;
