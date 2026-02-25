import { useState } from "react";
import { galleryImages as initialGallery } from "@/data/mockData";
import { Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageGallery = () => {
  const [images, setImages] = useState(initialGallery);

  const handleDelete = (id: number) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Gallery Images ({images.length})</h3>
        <Button className="bg-primary text-primary-foreground hover:bg-primary-light">
          <Plus className="w-4 h-4 mr-2" />
          Upload Images
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden card-shadow">
            <img src={img.src} alt={img.title} className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <button
                onClick={() => handleDelete(img.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 rounded-full bg-destructive flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4 text-destructive-foreground" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 p-2">
              <p className="text-xs text-primary-foreground truncate">{img.title}</p>
              <p className="text-xs text-primary-foreground/70">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGallery;
