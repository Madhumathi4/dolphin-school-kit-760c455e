import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Props {
  onLogin: (email: string, password: string, remember: boolean) => boolean;
}

const AdminLoginPage = ({ onLogin }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = onLogin(email, password, remember);
    if (ok) {
      toast({ title: "Login Successful", description: "Welcome back, Admin!" });
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-section-alt flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">D</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Dolphin Nursery & Primary School</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-shadow space-y-4">
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
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded border-border" />
              Remember me
            </label>
            <Link to="/admin/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-light font-semibold">
            Login
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/admin/signup" className="text-primary font-medium hover:underline">Sign Up</Link>
          </p>
        </form>
        <p className="text-center text-xs text-muted-foreground mt-4">Default: admin@dolphin.in / admin123</p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
