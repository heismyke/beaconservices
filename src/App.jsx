import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Crown,
  Gem,
  Handshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";
import heroImage from "./assets/beacon-hero.png";
import { companyProfile } from "./data/companyProfile";
import { Badge } from "./components/Badge";
import { SectionHeader } from "./components/SectionHeader";
import { ServiceCard } from "./components/ServiceCard";

const serviceIcons = [Users, CalendarCheck];
const valueIcons = [Crown, Gem, CheckCircle2, Handshake, ClipboardList, Sparkles];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    ["Services", "#services"],
    ["Events", "#events"],
    ["Values", "#values"],
    ["Enquire", "#contact"],
  ];

  return (
    <main className="min-h-screen bg-beacon-pearl text-beacon-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-beacon-ink/55 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-beacon-gold text-sm font-black text-beacon-ink">
              B
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              Beacon Ushers
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/82 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={
                  label === "Enquire"
                    ? "rounded-full bg-white px-5 py-2.5 text-beacon-forest transition hover:bg-beacon-mist"
                    : "transition hover:text-white"
                }
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
        {mobileMenuOpen ? (
          <div className="border-t border-white/15 bg-beacon-ink px-5 py-4 text-white md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-1 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/82"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden bg-beacon-forest">
        <img
          src={heroImage}
          alt="Professional event ushers welcoming guests at an elegant venue"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-beacon-ink via-beacon-ink/68 to-beacon-ink/8" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-beacon-pearl to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-24 pt-28 lg:px-8">
          <div className="max-w-3xl text-white">
            <Badge>Premium ushering and event management</Badge>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
              Beacon Ushers & Events
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
              Creating seamless, elegant, and memorable experiences through professional service, careful planning, and exceptional event execution.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-beacon-gold px-6 py-3.5 font-bold text-beacon-ink shadow-soft transition hover:bg-[#d7ad63]">
                Plan an event <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 lg:grid-cols-3 lg:px-8">
        {companyProfile.highlights.map((item) => (
          <div key={item} className="border-l-4 border-beacon-gold bg-white px-6 py-5 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-beacon-emerald">
              {item}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow="Who we are" title="Your trusted partner for organised, welcoming, and memorable events." />
          <div className="space-y-5 text-lg leading-8 text-beacon-ink/75">
            {companyProfile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Our services"
            title="Professional support from guest arrival to post-event wrap-up."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {companyProfile.services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                Icon={serviceIcons[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader
            eyebrow="Event coverage"
            title="Built for corporate, social, faith-based, and brand experiences."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {companyProfile.eventTypes.map((eventType) => (
              <div key={eventType} className="flex min-h-16 items-center gap-3 bg-white px-4 py-3 shadow-soft">
                <CheckCircle2 className="shrink-0 text-beacon-emerald" size={18} />
                <span className="font-semibold text-beacon-ink/78">{eventType}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beacon-forest py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          {companyProfile.statements.map((statement) => (
            <article key={statement.title} className="border border-white/15 bg-white/7 p-8 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-beacon-gold">
                {statement.title}
              </p>
              <p className="mt-5 text-2xl font-semibold leading-9 text-white/92">
                {statement.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="values" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Why choose us"
            title="A service culture shaped by elegance, reliability, and detail."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyProfile.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div key={value} className="bg-beacon-mist p-6">
                  <Icon className="text-beacon-emerald" size={24} />
                  <h3 className="mt-5 text-lg font-black">{value}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid overflow-hidden bg-beacon-ink text-white shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12">
            <Badge>Our promise</Badge>
            <h2 className="mt-6 text-4xl font-black leading-tight">
              Every guest welcomed. Every detail managed. Every event executed with care.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              {companyProfile.promise}
            </p>
          </div>
          <div id="contact" className="bg-beacon-gold p-8 text-beacon-ink sm:p-12">
            <p className="text-sm font-black uppercase tracking-[0.18em]">Contact</p>
            <h2 className="mt-4 text-3xl font-black">Start your inquiry</h2>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${companyProfile.contact.email}`} className="flex items-center gap-3 font-bold">
                <Mail size={20} /> {companyProfile.contact.email}
              </a>
              <a href={`tel:${companyProfile.contact.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 font-bold">
                <Phone size={20} /> {companyProfile.contact.phone}
              </a>
              <p className="flex items-center gap-3 font-bold">
                <MapPin size={20} /> {companyProfile.contact.location}
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold text-beacon-ink/70">
              Placeholder contact details are included for launch readiness and should be replaced with verified business information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
