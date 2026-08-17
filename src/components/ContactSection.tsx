"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink
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
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#a855f7"]
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Launch mailto fallback
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Pratham,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#6366f1", "#ec4899", "#10b981"]
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-indigo-600 dark:text-indigo-400">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT INBOX & CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Let&apos;s Build Together
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl">
            Whether you&apos;re looking to architect a zero-latency native app, consult on systems design, or explore collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Quick Connect Cards (Left Column) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* WhatsApp Quick Card */}
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group glass-panel p-5 rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-between transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {profile.whatsapp}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Email Quick Card */}
            <div className="glass-panel p-5 rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-white">
                    Direct Email
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {profile.email}
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Quick Card */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group glass-panel p-5 rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-between transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Prathmesh Upadhyay
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* X / Twitter Quick Card */}
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="group glass-panel p-5 rounded-2xl border border-black/5 dark:border-white/10 flex items-center justify-between transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center border border-zinc-500/20">
                  <TwitterXIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-950 dark:text-white group-hover:text-indigo-500 transition-colors">
                    X (Twitter)
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    @0xBlurr
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
            </a>

          </div>

          {/* Contact Interactive Form (Right Column) */}
          <div className="md:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/5 dark:border-white/10 h-full flex flex-col justify-between">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 animate-bounce">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
                    Thank you for reaching out. Your default email client was opened to confirm delivery, or you can message directly via WhatsApp.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-opacity"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="sender-name" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Your Name
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Satya Nadella"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:border-indigo-500 transition-colors text-zinc-950 dark:text-white placeholder:text-zinc-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="sender-email" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Your Email
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:border-indigo-500 transition-colors text-zinc-950 dark:text-white placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="sender-subject" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Subject
                    </label>
                    <input
                      id="sender-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Advisory / PalZee Architecture"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:border-indigo-500 transition-colors text-zinc-950 dark:text-white placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="sender-message" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Message
                    </label>
                    <textarea
                      id="sender-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or idea..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:border-indigo-500 transition-colors text-zinc-950 dark:text-white placeholder:text-zinc-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-md shadow-indigo-500/20 hover:shadow-lg"
                  >
                    <span>Send Direct Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
