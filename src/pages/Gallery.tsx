import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/floating/Chatbot";
import { galleryImages, images } from "@/data/mockData";

const categories = ["All", "Events", "Sports", "Annual Day", "Campus"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

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
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-2">Gallery</h1>
              <p className="text-primary-foreground/80">Moments captured at Dolphin School</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
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

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  className="group relative rounded-xl overflow-hidden card-shadow aspect-square cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                    <div className="p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-primary-foreground text-sm font-medium">{img.title}</p>
                      <p className="text-primary-foreground/70 text-xs">{img.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-xl object-contain animate-fade-in"
            />
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default Gallery;
