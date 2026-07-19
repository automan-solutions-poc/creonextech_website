import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../lib/data";
import textLogo from "../../assets/textlogo 2.png";

const Logo = () => (
  <a href="#home" data-testid="nav-logo" className="flex items-center gap-2.5" data-cursor="hover">
    <img src={textLogo} alt="CreonexTech" className="h-9 w-auto" />
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.7 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[#c9c9c9] transition-colors duration-300 hover:text-[#f5b400]"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("#contact")}
            data-testid="nav-cta-btn"
            className="btn-gold hidden !px-6 !py-2.5 sm:inline-flex"
          >
            Let&apos;s Talk
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#050505]/95 lg:hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="container-x flex flex-col py-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="border-b border-white/5 py-3 text-left text-base font-medium text-[#c9c9c9]"
                >
                  {l.label}
                </button>
              ))}
              <button onClick={() => go("#contact")} className="btn-gold mt-4">
                Let&apos;s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
