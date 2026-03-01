import { useState, useRef } from "react";
import { galleryImages as initialGallery } from "@/data/mockData";
import { Trash2, Plus, Upload, X, Image, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

const ManageGallery = () => {
  const [images, setImages] = useState(initialGallery);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [previews, setPreviews] = useState<{ name: string; url: string; type: string }[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setImages(images.filter((img) => img.id !== id));
    toast({ title: "Deleted", description: "Media removed from gallery." });
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files).filter(f => f.type.startsWith("image/") || f.type.startsWith("video/"));
    if (arr.length === 0) return;
    const newPreviews = arr.map(f => ({ name: f.name, url: URL.createObjectURL(f), type: f.type.startsWith("video") ? "video" : "image" }));
    setPreviews(newPreviews);
  };

  const simulateUpload = () => {
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setUploading(false);
          setPreviews([]);
          toast({ title: "Upload Complete", description: `${previews.length} file(s) added to gallery.` });
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Gallery Images ({images.length})</h3>
      </div>

      {/* Drag & Drop Area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 md:p-12 text-center cursor-pointer transition-all mb-6 ${dragOver ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/50 hover:bg-accent/50"}`}
      >
        <input ref={fileRef} type="file" accept="image/*,video/mp4" multiple hidden onChange={(e) => handleFiles(e.target.files)} />
        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
        <p className="font-medium text-foreground">Drag & drop files here</p>
        <p className="text-sm text-muted-foreground mt-1">or click to browse • Images & MP4 Videos</p>
      </div>

      {/* Previews */}
      {previews.length > 0 && (
        <div className="mb-6 bg-card rounded-2xl p-4 card-shadow">
          <div className="flex items-center justify-between mb-3">
            <p className="font-medium text-foreground">{previews.length} file(s) selected</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => setPreviews([])}>
                <X className="w-4 h-4 mr-1" /> Clear
              </Button>
              <Button size="sm" onClick={simulateUpload} disabled={uploading} className="bg-primary text-primary-foreground hover:bg-primary-light">
                <Plus className="w-4 h-4 mr-1" /> Upload
              </Button>
            </div>
          </div>
          {uploading && <Progress value={progress} className="mb-3 h-2" />}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {previews.map((p, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-square bg-secondary">
                {p.type === "video" ? (
                  <div className="w-full h-full flex items-center justify-center"><Film className="w-8 h-8 text-muted-foreground" /></div>
                ) : (
                  <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                )}
                <button onClick={(e) => { e.stopPropagation(); setPreviews(prev => prev.filter((_, j) => j !== i)); }} className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
                  <X className="w-3 h-3 text-destructive-foreground" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative group rounded-2xl overflow-hidden card-shadow">
            <img src={img.src} alt={img.title} className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <button onClick={() => handleDelete(img.id)} className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
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
