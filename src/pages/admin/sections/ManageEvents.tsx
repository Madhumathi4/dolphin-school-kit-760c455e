import { useState } from "react";
import { mockEvents, SchoolEvent } from "@/data/eventsData";
import { Plus, Trash2, Edit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ManageEvents = () => {
  const [events, setEvents] = useState<SchoolEvent[]>(mockEvents);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<SchoolEvent | null>(null);
  const [form, setForm] = useState({ title: "", date: "", description: "", category: "" });

  const openAdd = () => {
    setEditing(null);
    setForm({ title: "", date: "", description: "", category: "" });
    setShowModal(true);
  };

  const openEdit = (ev: SchoolEvent) => {
    setEditing(ev);
    setForm({ title: ev.title, date: ev.date, description: ev.description, category: ev.category });
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setEvents(events.map(ev => ev.id === editing.id ? { ...ev, ...form } : ev));
      toast({ title: "Updated", description: "Event updated successfully." });
    } else {
      setEvents([...events, { id: Date.now(), ...form }]);
      toast({ title: "Added", description: "New event added." });
    }
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter(ev => ev.id !== id));
    toast({ title: "Deleted", description: "Event removed." });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Events ({events.length})</h3>
        <Button onClick={openAdd} className="bg-primary text-primary-foreground hover:bg-primary-light">
          <Plus className="w-4 h-4 mr-2" /> Add Event
        </Button>
      </div>

      <div className="bg-card rounded-2xl card-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left p-4 font-medium text-muted-foreground">Title</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                <th className="text-left p-4 font-medium text-muted-foreground hidden md:table-cell">Category</th>
                <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(ev => (
                <tr key={ev.id} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                  <td className="p-4 font-medium text-foreground">{ev.title}</td>
                  <td className="p-4 text-muted-foreground">{ev.date}</td>
                  <td className="p-4 hidden md:table-cell">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{ev.category}</span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEdit(ev)} className="p-2 rounded-lg hover:bg-accent"><Edit className="w-4 h-4 text-primary" /></button>
                      <button onClick={() => handleDelete(ev.id)} className="p-2 rounded-lg hover:bg-destructive/10"><Trash2 className="w-4 h-4 text-destructive" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-card rounded-2xl p-6 max-w-md w-full card-shadow animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-foreground">{editing ? "Edit Event" : "Add Event"}</h3>
              <button onClick={() => setShowModal(false)} className="p-1 rounded-lg hover:bg-accent"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <Input placeholder="Event Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
              <Input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
              <Input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required />
              <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full border border-input rounded-lg p-3 text-sm bg-background" rows={3} required />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-light">
                {editing ? "Update" : "Add"} Event
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
