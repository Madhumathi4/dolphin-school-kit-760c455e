import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const AdmissionCTA = () => {
  return (
    <section className="cta-gradient section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <GraduationCap className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Admissions Open 2026-2027
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Give your child the best start in life. Join the Dolphin family and watch them thrive in a nurturing, excellence-driven environment.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-10">
            Enquire Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AdmissionCTA;
