import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/floating/Chatbot";
import { achievements } from "@/data/mockData";
import { images } from "@/data/mockData";

const categories = ["All", "Academic", "Sports", "Cultural", "Awards"];

const Achievements = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? achievements : achievements.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <img src={images.heroBanner} alt="Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-2">Achievements</h1>
              <p className="text-primary-foreground/80">Celebrating our students' successes</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {filtered.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl card-shadow w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-card rounded-xl p-6 card-shadow">
                      <span className="text-xs font-semibold text-primary-glow uppercase">{item.category} • {item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Achievements;
