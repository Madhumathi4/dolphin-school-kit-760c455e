import { useState } from "react";
import { Bot, X, Send } from "lucide-react";
import { chatbotReplies } from "@/data/mockData";

interface Message {
  from: "bot" | "user";
  text: string;
}

const quickOptions = [
  { label: "Admission Process", key: "admission" },
  { label: "Fee Details", key: "fee" },
  { label: "School Timings", key: "timings" },
  { label: "Location", key: "location" },
  { label: "Contact Number", key: "contact" },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hello! 👋 Welcome to Dolphin School. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleQuickReply = (key: string) => {
    const label = quickOptions.find((q) => q.key === key)?.label || key;
    const reply = chatbotReplies[key] || "Please contact us at +91 96554 67791 for more details.";
    setMessages((prev) => [...prev, { from: "user", text: label }, { from: "bot", text: reply }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim().toLowerCase();
    setMessages((prev) => [...prev, { from: "user", text: input.trim() }]);
    setInput("");

    const matchedKey = Object.keys(chatbotReplies).find((key) => userMsg.includes(key));
    const reply = matchedKey
      ? chatbotReplies[matchedKey]
      : "Thank you for your query! Please contact us at +91 96554 67791 or visit our school for detailed information.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);
  };

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat with us"
      >
        {open ? <X className="w-5 h-5 text-primary-foreground" /> : <Bot className="w-5 h-5 text-primary-foreground" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-[9.5rem] right-6 z-40 w-80 max-h-[28rem] bg-card rounded-xl card-shadow border border-border flex flex-col animate-fade-in-up overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-4 rounded-t-xl">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary-foreground" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Dolphin Assistant</p>
                <p className="text-xs text-primary-foreground/70">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-60">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                    msg.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Options */}
          <div className="px-3 pb-2 flex flex-wrap gap-1">
            {quickOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => handleQuickReply(opt.key)}
                className="px-2 py-1 text-xs bg-secondary text-foreground rounded-full hover:bg-primary/10 transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-2 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center hover:bg-primary-light transition-colors"
            >
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
