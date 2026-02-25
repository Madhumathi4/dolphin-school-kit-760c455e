import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { images } from "@/data/mockData";

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <img
        src={images.heroBanner}
        alt="Dolphin School Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Welcome to Dolphin Nursery & Primary School
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Nurturing Bright Futures with Care and Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8">
                  Admission Details
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
