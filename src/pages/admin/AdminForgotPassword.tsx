import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-section-alt flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-bold text-2xl">D</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Forgot Password</h1>
          <p className="text-sm text-muted-foreground mt-1">Enter your email to reset password</p>
        </div>

        <div className="bg-card rounded-2xl p-8 card-shadow">
          {sent ? (
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-success mx-auto" />
              <h2 className="text-lg font-semibold text-foreground">Reset Link Sent!</h2>
              <p className="text-sm text-muted-foreground">
                A password reset link has been sent to <strong>{email}</strong>. Please check your inbox.
              </p>
              <Link to="/admin/login">
                <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-light font-semibold mt-4">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 h-12" required />
              </div>
              <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-light font-semibold">
                Send Reset Link
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                <Link to="/admin/login" className="text-primary font-medium hover:underline">
                  <ArrowLeft className="w-3 h-3 inline mr-1" />Back to Login
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
