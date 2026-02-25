import { Link } from "react-router-dom";
import { galleryImages } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">Campus Life</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Photo Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {galleryImages.slice(0, 6).map((img) => (
            <div
              key={img.id}
              className="group relative rounded-xl overflow-hidden card-shadow aspect-square"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                <p className="text-primary-foreground text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
