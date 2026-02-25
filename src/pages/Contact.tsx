import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/floating/Chatbot";
import { schoolInfo, images } from "@/data/mockData";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

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
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-2">Contact Us</h1>
              <p className="text-primary-foreground/80">We'd love to hear from you</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-12"
                />
                <Textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                />
                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary-light w-full font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>

              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: schoolInfo.address },
                  { icon: Phone, label: "Phone", value: schoolInfo.phone },
                  { icon: Mail, label: "Email", value: schoolInfo.email },
                  { icon: Clock, label: "Working Hours", value: "Mon-Fri: 7:30am – 7:30pm" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours Table */}
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">Working Hours</h3>
                <div className="space-y-2">
                  {schoolInfo.workingHours.map((wh) => (
                    <div key={wh.day} className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{wh.day}</span>
                      <span className={wh.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"}>
                        {wh.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section-padding-sm bg-section-alt">
          <div className="max-w-6xl mx-auto rounded-xl overflow-hidden card-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d79.6350767!3d10.7619261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQzLjAiTiA3OcKwMzgnMDYuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="School Location"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Contact;
