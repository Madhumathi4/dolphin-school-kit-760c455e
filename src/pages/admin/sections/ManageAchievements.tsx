import { useState } from "react";
import { achievements as initialData } from "@/data/mockData";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ManageAchievements = () => {
  const [items, setItems] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", category: "", description: "", year: "" });

  const openAdd = () => {
    setForm({ title: "", category: "", description: "", year: "" });
    setEditId(null);
    setShowModal(true);
  };

  const openEdit = (item: typeof initialData[0]) => {
    setForm({ title: item.title, category: item.category, description: item.description, year: item.year });
    setEditId(item.id);
    setShowModal(true);
  };

  const handleSave = () => {
    if (editId) {
      setItems(items.map((i) => (i.id === editId ? { ...i, ...form } : i)));
    } else {
      setItems([...items, { ...form, id: Date.now(), image: items[0]?.image || "" }]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Achievements ({items.length})</h3>
        <Button onClick={openAdd} className="bg-primary text-primary-foreground hover:bg-primary-light">
          <Plus className="w-4 h-4 mr-2" /> Add Achievement
        </Button>
      </div>

      <div className="bg-card rounded-xl card-shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="text-left p-4 font-semibold text-foreground">Title</th>
              <th className="text-left p-4 font-semibold text-foreground hidden md:table-cell">Category</th>
              <th className="text-left p-4 font-semibold text-foreground hidden md:table-cell">Year</th>
              <th className="text-right p-4 font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-border">
                <td className="p-4 text-foreground">{item.title}</td>
                <td className="p-4 text-muted-foreground hidden md:table-cell">{item.category}</td>
                <td className="p-4 text-muted-foreground hidden md:table-cell">{item.year}</td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => openEdit(item)} className="text-primary hover:text-primary-glow">
                    <Edit className="w-4 h-4 inline" />
                  </button>
                  <button onClick={() => setItems(items.filter((i) => i.id !== item.id))} className="text-destructive">
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl p-6 w-full max-w-md card-shadow animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground">{editId ? "Edit" : "Add"} Achievement</h4>
              <button onClick={() => setShowModal(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
            </div>
            <div className="space-y-3">
              <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <Input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <Input placeholder="Year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
              <Textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <Button onClick={handleSave} className="w-full bg-primary text-primary-foreground hover:bg-primary-light">
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAchievements;
