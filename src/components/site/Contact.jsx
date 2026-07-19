import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Reveal, SectionHead } from "../../lib/ui";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FIELD =
  "w-full border-b border-white/12 bg-transparent py-3 text-white placeholder:text-[#6b7280] outline-none transition-colors duration-300 focus:border-[#f5b400]";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@creonextech.com" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0199" },
  { icon: MapPin, label: "Office", value: "One Market St, San Francisco, CA" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks! We'll be in touch within one business day.");
      setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHead
            overline="Contact"
            title="Let's build something intelligent"
            sub="Tell us about your project and goals. Our team will get back to you within one business day."
            testid="contact-head"
          />

          <div className="mt-10 space-y-6" data-testid="contact-info">
            {CONTACT_INFO.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-[#f5b400]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6b7280]">{c.label}</p>
                    <p className="text-base font-medium text-white">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="mt-8 overflow-hidden rounded-2xl border border-white/8 grayscale">
            <iframe
              title="CreonexTech office map"
              src="https://www.google.com/maps?q=One+Market+St,+San+Francisco&output=embed"
              className="h-52 w-full opacity-80"
              loading="lazy"
            />
          </div> */}
        </div>

        {/* <Reveal>
          <form onSubmit={submit} className="rounded-3xl card-surface p-8 md:p-10" data-testid="contact-form">
            <div className="grid gap-6 sm:grid-cols-2">
              <input data-testid="contact-name" className={FIELD} placeholder="Full name *" value={form.name} onChange={update("name")} />
              <input data-testid="contact-email" type="email" className={FIELD} placeholder="Email address *" value={form.email} onChange={update("email")} />
              <input data-testid="contact-company" className={FIELD} placeholder="Company" value={form.company} onChange={update("company")} />
              <input data-testid="contact-phone" className={FIELD} placeholder="Phone" value={form.phone} onChange={update("phone")} />
            </div>
            <input data-testid="contact-service" className={`${FIELD} mt-6`} placeholder="Service you're interested in" value={form.service} onChange={update("service")} />
            <textarea data-testid="contact-message" rows={4} className={`${FIELD} mt-6 resize-none`} placeholder="Tell us about your project *" value={form.message} onChange={update("message")} />
            <button type="submit" disabled={loading} className="btn-gold mt-8 w-full disabled:opacity-70" data-testid="contact-submit">
              {loading ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <>Send Message <Send size={16} /></>}
            </button>
          </form>
        </Reveal> */}
      </div>
    </section>
  );
};

export default Contact;
