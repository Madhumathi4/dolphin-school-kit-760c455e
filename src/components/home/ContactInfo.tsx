import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { schoolInfo } from "@/data/mockData";

const ContactInfo = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">Reach Out</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact Information</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: MapPin, title: "Address", value: schoolInfo.address },
            { icon: Phone, title: "Phone", value: schoolInfo.phone },
            { icon: Mail, title: "Email", value: schoolInfo.email },
            { icon: Clock, title: "Hours", value: "Mon-Fri: 7:30am–7:30pm" },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-xl bg-secondary hover:card-shadow transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
