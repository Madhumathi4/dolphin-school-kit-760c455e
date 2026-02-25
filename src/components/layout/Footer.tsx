import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { schoolInfo } from "@/data/mockData";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Dolphin</p>
                <p className="text-xs opacity-80 leading-tight">Nursery & Primary School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing bright futures with care and excellence since our founding. Building tomorrow's leaders today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Achievements", path: "/achievements" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 opacity-80" />
                <span className="text-sm opacity-80">{schoolInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 opacity-80" />
                <a href={`tel:${schoolInfo.phone}`} className="text-sm opacity-80 hover:opacity-100">
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 opacity-80" />
                <span className="text-sm opacity-80">{schoolInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Working Hours</h4>
            <div className="flex flex-col gap-1">
              {schoolInfo.workingHours.map((wh) => (
                <div key={wh.day} className="flex justify-between text-sm">
                  <span className="opacity-80">{wh.day}</span>
                  <span className={wh.hours === "Closed" ? "text-destructive" : "opacity-80"}>
                    {wh.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Dolphin Nursery & Primary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
