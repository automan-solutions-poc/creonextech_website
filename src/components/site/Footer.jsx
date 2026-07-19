import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Linkedin, Twitter, Github, Dribbble } from "lucide-react";
import { NAV_LINKS, SERVICES } from "../../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SOCIALS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email.");
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're subscribed. Welcome aboard!");
      setEmail("");
    } catch {
      toast.error("Please enter a valid email address.");
    } finally {
      setLoading(false);
    }
  };

  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/8 pt-24">
      <div className="container-x">
        {/* Newsletter */}
        <div className="grid gap-10 pb-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Get the <span className="gold-text">insider brief</span>
            </h2>
            <p className="mt-3 max-w-md text-[#9ca3af]">
              Monthly ideas on AI, product and engineering. No spam, unsubscribe anytime.
            </p>
          </div>
          {/* <form onSubmit={subscribe} className="flex w-full items-center gap-3" data-testid="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              data-testid="newsletter-input"
              className="w-full rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-white placeholder:text-[#6b7280] outline-none transition-colors focus:border-[#f5b400]"
            />
            <button type="submit" disabled={loading} className="btn-gold shrink-0 disabled:opacity-70" data-testid="newsletter-submit">
              {loading ? "…" : <>Subscribe <ArrowRight size={16} /></>}
            </button>
          </form> */}
        </div>

        <div className="grid gap-10 border-t border-white/8 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f5b400] font-display text-lg font-black text-[#050505]">C</span>
              <span className="font-display text-lg font-bold text-white">Creonex<span className="text-[#f5b400]">Tech</span></span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#9ca3af]">
              Building intelligent digital solutions — AI, automation, cloud and modern software for ambitious enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} data-cursor="hover"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#c9c9c9] transition-colors duration-300 hover:bg-[#f5b400] hover:text-[#050505]">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button onClick={() => go(l.href)} className="text-sm text-[#9ca3af] transition-colors hover:text-[#f5b400]">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.title}>
                  <button onClick={() => go("#services")} className="text-sm text-[#9ca3af] transition-colors hover:text-[#f5b400]">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-8 md:flex-row">
          <p className="text-sm text-[#6b7280]">© {new Date().getFullYear()} CreonexTech. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-[#6b7280]">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security</a>
          </div>
        </div>
      </div>

      {/* Massive watermark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <div className="font-display whitespace-nowrap text-center text-[19vw] font-black leading-[0.8] tracking-tighter text-white/[0.03]">
          CREONEXTECH
        </div>
      </div>
    </footer>
  );
};

export default Footer;
