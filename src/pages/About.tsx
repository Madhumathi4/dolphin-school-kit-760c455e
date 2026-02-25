import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/floating/Chatbot";
import { images, schoolInfo } from "@/data/mockData";
import { BookOpen, Heart, Users, Star, Shield, Lightbulb } from "lucide-react";

const values = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum designed to challenge and inspire every student." },
  { icon: Heart, title: "Nurturing Care", desc: "A warm, supportive environment where every child feels valued." },
  { icon: Users, title: "Community", desc: "Strong partnerships between teachers, parents, and students." },
  { icon: Star, title: "Holistic Growth", desc: "Focus on intellectual, physical, emotional, and social development." },
  { icon: Shield, title: "Safe Environment", desc: "A secure campus with trained staff ensuring child safety." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern teaching methods and technology-enhanced learning." },
];

const About = () => {
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
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-2">About Us</h1>
              <p className="text-primary-foreground/80">Learn more about our school and values</p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src={images.aboutSchool} alt="Students" className="rounded-xl card-shadow w-full h-80 object-cover" />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dolphin Nursery & Primary School was established with a singular vision — to create a centre
                of learning excellence in Thiruvarur that would shape young minds into confident, capable,
                and compassionate individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we have grown into one of the most trusted educational institutions in the
                region, known for our commitment to academic excellence, character development, and
                holistic education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art facilities, experienced faculty, and innovative teaching methodologies
                ensure that every child receives the attention and guidance they need to reach their full potential.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-section-alt">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading institution of primary education that inspires excellence, fosters creativity,
                and builds character in every child, preparing them to become responsible global citizens.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a safe, nurturing, and stimulating environment where children develop a love for
                learning, build strong values, and acquire the skills needed to succeed in an ever-changing world.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">What We Stand For</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-6 rounded-xl bg-secondary hover:card-shadow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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

export default About;
