"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { WhatsAppIcon, LinkedinIcon, TwitterXIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function ContactSection() {
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
      colors: ["#6366f1", "#ec4899", "#10b981"]
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-[65ch]">
            Reach out for native engineering projects, architecture advisory, or direct inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Quick Channels */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">
              Direct Channels
            </h3>

            {/* WhatsApp */}
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="apple-glass p-4 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    WhatsApp Direct
                  </div>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {profile.whatsapp}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Email */}
            <div className="apple-glass p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-950 dark:text-white">
                    Direct Email
                  </div>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {profile.email}
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg apple-glass-pill hover:border-indigo-500 transition-colors"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="apple-glass p-4 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Prathmesh Upadhyay
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* X */}
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="apple-glass p-4 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-zinc-500/10 flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                  <TwitterXIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-950 dark:text-white group-hover:text-indigo-500 transition-colors">
                    X (Twitter)
                  </div>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    @0xBlurr
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">
              Send Message
            </h3>

            {submitted ? (
              <div className="apple-glass p-7 space-y-3 text-center transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white">
                  Message Dispatched
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Email client opened to confirm delivery.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apple-glass p-5 sm:p-6 space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded-xl text-xs apple-glass-pill text-zinc-950 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  />

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-3 py-2 rounded-xl text-xs apple-glass-pill text-zinc-950 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject (Project Inquiry / Advisory)"
                  className="w-full px-3 py-2 rounded-xl text-xs apple-glass-pill text-zinc-950 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />

                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full px-3 py-2 rounded-xl text-xs apple-glass-pill text-zinc-950 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-all shadow-md"
                >
                  <span>Send Direct Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
