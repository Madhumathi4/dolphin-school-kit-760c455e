import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

const ManageBanner = () => {
  const [title, setTitle] = useState("Welcome to Dolphin Nursery & Primary School");
  const [subtitle, setSubtitle] = useState("Nurturing Bright Futures with Care and Excellence");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl">
      <div className="bg-card rounded-xl p-6 card-shadow space-y-4">
        <h3 className="font-semibold text-foreground">Banner Settings</h3>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Banner Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} className="h-12" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Subtitle</label>
          <Input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="h-12" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Banner Image</label>
          <input type="file" accept="image/*" className="text-sm text-muted-foreground" />
        </div>
        <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary-light">
          <Save className="w-4 h-4 mr-2" />
          {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};

export default ManageBanner;
