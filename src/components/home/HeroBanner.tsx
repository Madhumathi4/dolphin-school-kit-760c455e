import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { images } from "@/data/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";

const slides = [
  { src: images.heroBanner, title: "Welcome to Dolphin Nursery & Primary School", subtitle: "Nurturing Bright Futures with Care and Excellence" },
  { src: gallery1, title: "Holistic Education for Every Child", subtitle: "Academic Excellence Combined with Strong Moral Values" },
  { src: gallery2, title: "Champions in Sports & Arts", subtitle: "Encouraging Talent and Building Confidence" },
  { src: gallery3, title: "Admissions Open 2026–2027", subtitle: "Join the Dolphin Family – Limited Seats Available" },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((idx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 300);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current && fade ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className={`max-w-2xl transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8">
                  Admission Details
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm flex items-center justify-center transition-colors">
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </button>
      <button onClick={next} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm flex items-center justify-center transition-colors">
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary-foreground w-8" : "bg-primary-foreground/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
