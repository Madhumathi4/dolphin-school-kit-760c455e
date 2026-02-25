import { images } from "@/data/mockData";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden card-shadow">
            <img
              src={images.aboutSchool}
              alt="Students learning at Dolphin School"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Tomorrow's Leaders Today
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Dolphin Nursery & Primary School, we believe that every child is unique and capable of
              achieving greatness. Our holistic approach to education combines academic rigor with
              character development, creative expression, and physical fitness.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a vision to provide world-class education in Thiruvarur, we nurture young
              minds through innovative teaching methods, modern facilities, and a caring environment
              that encourages curiosity and lifelong learning.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "500+", label: "Students" },
                { number: "50+", label: "Teachers" },
                { number: "15+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-xl">
                  <p className="text-2xl font-bold text-primary">{stat.number}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
