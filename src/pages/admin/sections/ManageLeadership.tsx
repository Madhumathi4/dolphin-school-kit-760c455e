import { useState } from "react";
import { leadership as initialData } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

const ManageLeadership = () => {
  const [leaders, setLeaders] = useState(initialData);
  const [saved, setSaved] = useState(false);

  const updateLeader = (id: number, field: string, value: string) => {
    setLeaders(leaders.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
  };

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="space-y-6 max-w-2xl">
      {leaders.map((leader) => (
        <div key={leader.id} className="bg-card rounded-xl p-6 card-shadow space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <img src={leader.image} alt={leader.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-foreground">{leader.role}</p>
              <p className="text-sm text-muted-foreground">Upload new photo: <input type="file" accept="image/*" className="text-xs" /></p>
            </div>
          </div>
          <Input placeholder="Name" value={leader.name} onChange={(e) => updateLeader(leader.id, "name", e.target.value)} />
          <Input placeholder="Qualification" value={leader.qualification} onChange={(e) => updateLeader(leader.id, "qualification", e.target.value)} />
          <Textarea placeholder="Message" value={leader.message} onChange={(e) => updateLeader(leader.id, "message", e.target.value)} rows={3} />
        </div>
      ))}
      <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary-light">
        <Save className="w-4 h-4 mr-2" /> {saved ? "Saved!" : "Save Changes"}
      </Button>
    </div>
  );
};

export default ManageLeadership;
