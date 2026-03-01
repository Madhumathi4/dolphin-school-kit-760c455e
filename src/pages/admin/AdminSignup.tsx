import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Props {
  onSignup: (name: string, email: string, password: string) => boolean;
}

const AdminSignup = ({ onSignup }: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    const ok = onSignup(name, email, password);
    if (ok) {
      toast({ title: "Registration Successful", description: "You can now login with your credentials." });
      navigate("/admin/login");
    } else {
      setError("Email already registered.");
    }
  };

  return (
    <div className="min-h-screen bg-section-alt flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">D</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
          <p className="text-sm text-muted-foreground mt-1">Register as an Admin</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-shadow space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value); setError(""); }} className="pl-10 h-12" required />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} className="pl-10 h-12" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type={showPw ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} className="pl-10 pr-10 h-12" required />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => { setConfirm(e.target.value); setError(""); }} className="pl-10 h-12" required />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-light font-semibold">
            Register
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/admin/login" className="text-primary font-medium hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
