"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  Calendar
} from "lucide-react";
import { WhatsAppIcon, LinkedinIcon, TwitterXIcon } from "../../components/Icons";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.8 },
      colors: ["#17C0FD", "#049EE2", "#FF9689"]
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Pratham,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#17C0FD", "#FF9689", "#10b981"]
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-10">
      
      {/* Header */}
      <div className="pb-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--neutral-strong)">
          Get In Touch
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Direct Channels */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-(--neutral-strong)">
            Direct Connect
          </h2>

          {/* WhatsApp Direct */}
          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass p-5 rounded-3xl flex items-center justify-between group transition-all shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-(--neutral-strong) group-hover:text-emerald-500 transition-colors">
                  WhatsApp Direct
                </div>
                <div className="text-xs font-mono text-(--neutral-weak)">
                  {profile.whatsapp}
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-(--neutral-weak) group-hover:text-emerald-500 transition-colors" />
          </a>

          {/* Email */}
          <div className="liquid-glass p-5 rounded-3xl flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-(--brand-primary)/10 flex items-center justify-center text-(--brand-primary)">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-(--neutral-strong)">
                  Email
                </div>
                <div className="text-xs font-mono text-(--neutral-weak)">
                  {profile.email}
                </div>
              </div>
            </div>
            
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-full liquid-button"
              title="Copy email"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-(--neutral-weak)" />}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass p-5 rounded-3xl flex items-center justify-between group transition-all shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-(--neutral-strong) group-hover:text-blue-500 transition-colors">
                  LinkedIn
                </div>
                <div className="text-xs text-(--neutral-weak)">
                  Prathmesh Upadhyay
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-(--neutral-weak) group-hover:text-blue-500 transition-colors" />
          </a>

          {/* X (Twitter) */}
          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass p-5 rounded-3xl flex items-center justify-between group transition-all shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-500/10 flex items-center justify-center text-(--neutral-strong)">
                <TwitterXIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-(--neutral-strong) group-hover:text-(--brand-primary) transition-colors">
                  X (Twitter)
                </div>
                <div className="text-xs font-mono text-(--neutral-weak)">
                  @0xBlurr
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-(--neutral-weak) group-hover:text-(--brand-primary) transition-colors" />
          </a>
        </div>

        {/* Message Dispatch Form */}
        <div>
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-(--neutral-strong) mb-4">
            Send a Note
          </h2>

          {submitted ? (
            <div className="liquid-glass p-8 rounded-3xl space-y-3 text-center shadow-lg">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-(--neutral-strong)">
                Message Dispatched
              </h3>
              <p className="text-xs text-(--neutral-medium)">
                Your email client was opened to confirm delivery.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="liquid-button px-5 py-2 rounded-full text-xs font-medium text-(--neutral-strong)"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="liquid-glass p-6 sm:p-7 rounded-3xl space-y-4 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-(--neutral-weak)">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl text-xs liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-(--neutral-weak)">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-xl text-xs liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-(--neutral-weak)">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / PalZee Feedback / Advisory"
                  className="w-full px-4 py-2.5 rounded-xl text-xs liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-(--neutral-weak)">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2.5 rounded-xl text-xs liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="liquid-primary-btn w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium shadow-sm"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
