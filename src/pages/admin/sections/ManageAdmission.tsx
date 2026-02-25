import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

const ManageAdmission = () => {
  const [data, setData] = useState({
    openText: "Admissions Open for 2026-2027",
    eligibility: "Children aged 3-10 years are eligible for admission to LKG through Class V.",
    documents: "Birth Certificate, Aadhaar Card, Transfer Certificate, 4 Passport-sized Photos, Previous Year Marksheet (if applicable)",
    feeOverview: "Affordable fee structure with installment options available. Contact office for detailed fee breakdown.",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="max-w-2xl">
      <div className="bg-card rounded-xl p-6 card-shadow space-y-4">
        <h3 className="font-semibold text-foreground">Admission Details</h3>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Admission Open Text</label>
          <Input value={data.openText} onChange={(e) => setData({ ...data, openText: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Eligibility</label>
          <Textarea value={data.eligibility} onChange={(e) => setData({ ...data, eligibility: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Documents Required</label>
          <Textarea value={data.documents} onChange={(e) => setData({ ...data, documents: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Fee Overview</label>
          <Textarea value={data.feeOverview} onChange={(e) => setData({ ...data, feeOverview: e.target.value })} />
        </div>
        <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary-light">
          <Save className="w-4 h-4 mr-2" /> {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};

export default ManageAdmission;
