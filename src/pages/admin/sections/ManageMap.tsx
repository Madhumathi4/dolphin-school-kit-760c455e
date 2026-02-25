import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

const ManageMap = () => {
  const [iframeUrl, setIframeUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d79.6350767!3d10.7619261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQzLjAiTiA3OcKwMzgnMDYuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  );
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="bg-card rounded-xl p-6 card-shadow space-y-4">
        <h3 className="font-semibold text-foreground">Map Settings</h3>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Google Maps Embed URL</label>
          <Input value={iframeUrl} onChange={(e) => setIframeUrl(e.target.value)} className="h-12" />
        </div>
        <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary-light">
          <Save className="w-4 h-4 mr-2" /> {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      <div className="bg-card rounded-xl p-4 card-shadow">
        <h4 className="font-medium text-foreground text-sm mb-3">Preview</h4>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src={iframeUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default ManageMap;
