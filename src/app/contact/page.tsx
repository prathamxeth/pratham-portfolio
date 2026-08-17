"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink 
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-10">
      
      {/* Header */}
      <div className="pb-4 sm:pb-6 border-b border-(--neutral-border)">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--neutral-strong)">
          Get In Touch
        </h1>
        <p className="text-xs sm:text-sm text-(--neutral-medium) mt-1">
          Have an idea, project, or want to discuss Android architectures & edge tech? Drop a line.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Direct Channels */}
        <div className="space-y-3.5 sm:space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-(--neutral-strong)">
            Direct Connect
          </h2>

          {/* WhatsApp Direct */}
          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass p-4 sm:p-5 rounded-2xl flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-(--neutral-strong) group-hover:text-emerald-500 transition-colors">
                  WhatsApp Direct
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-(--neutral-weak) truncate">
                  {profile.whatsapp}
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-(--neutral-weak) group-hover:text-emerald-500 transition-colors shrink-0" />
          </a>

          {/* Email */}
          <div className="liquid-glass p-4 sm:p-5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-(--brand-primary)/10 flex items-center justify-center text-(--brand-primary) shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-(--neutral-strong)">
                  Email
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-(--neutral-weak) truncate">
                  {profile.email}
                </div>
              </div>
            </div>
            
            <button
              onClick={handleCopyEmail}
              className="p-2 sm:p-2.5 rounded-xl liquid-button shrink-0"
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
            className="liquid-glass p-4 sm:p-5 rounded-2xl flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-(--neutral-strong) group-hover:text-blue-500 transition-colors">
                  LinkedIn
                </div>
                <div className="text-[11px] sm:text-xs text-(--neutral-weak) truncate">
                  Prathmesh Upadhyay
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-(--neutral-weak) group-hover:text-blue-500 transition-colors shrink-0" />
          </a>

          {/* X (Twitter) */}
          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass p-4 sm:p-5 rounded-2xl flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-500/10 flex items-center justify-center text-(--neutral-strong) shrink-0">
                <TwitterXIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-(--neutral-strong) group-hover:text-(--brand-primary) transition-colors">
                  X (Twitter)
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-(--neutral-weak) truncate">
                  @0xBlurr
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-(--neutral-weak) group-hover:text-(--brand-primary) transition-colors shrink-0" />
          </a>
        </div>

        {/* Message Dispatch Form */}
        <div>
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-(--neutral-strong) mb-3.5 sm:mb-4">
            Send a Note
          </h2>

          {submitted ? (
            <div className="liquid-glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-(--neutral-strong)">
                Message Dispatched
              </h3>
              <p className="text-xs text-(--neutral-medium)">
                Your email client was opened to send the message.
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
            <form onSubmit={handleSubmit} className="liquid-glass p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-(--neutral-strong)">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-(--neutral-strong)">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-(--neutral-strong)">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Advisory"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-(--neutral-strong)">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm liquid-input text-(--neutral-strong) placeholder:text-(--neutral-weak) focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="liquid-primary-btn w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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
