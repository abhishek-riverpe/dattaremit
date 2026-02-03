import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Building2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind DattaPay. Built by industry veterans from Urban Company, Pine Labs, and top IITs/IIMs, backed by leading investors.",
  openGraph: {
    title: "About Us | DattaPay",
    description:
      "Meet the team behind DattaPay. Built by industry veterans from Urban Company, Pine Labs, and top IITs/IIMs.",
    url: "https://dattapay.com/about",
  },
  alternates: {
    canonical: "https://dattapay.com/about",
  },
};

const founders = [
  {
    name: "Aditya Varma",
    role: "Co-Founder",
    background: "Ex SVP Urban Company",
    education: "IIT Bombay & INSEAD",
    initials: "AV",
  },
  {
    name: "Himanshu Arora",
    role: "Co-Founder",
    background: "Ex SVP Travel Plus",
    education: "IIM Ahmedabad",
    initials: "HA",
  },
  {
    name: "Nikhil Shanker",
    role: "Co-Founder",
    background: "Ex VP Urban Company",
    education: "IIM Lucknow",
    initials: "NS",
  },
];

const investors = [
  { name: "Zero Pearl", type: "VC" },
  { name: "White Venture Capital", type: "VC" },
  { name: "Abhiraj Singh Bhal", role: "CEO & Co-Founder, Urban Company" },
  { name: "Amrish Rau", role: "CEO Pine Labs" },
  { name: "Jitendra Gupta", role: "Founder Jupiter" },
  { name: "Kunal Shah", role: "CEO & Founder, Cred" },
  { name: "Pradeep Parameswaran", role: "Head of Mobility at Uber" },
  { name: "Raghav Chandra", role: "CTO & Co-Founder, Urban Company" },
  { name: "Rishabh Goel", role: "CEO & Co-Founder, Credgenics" },
  { name: "Varun Khaitan", role: "COO & Co-Founder, Urban Company" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                We believe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We believe in a world where sending money across continents is as simple as paying a friend next door. Where savings and investments are not bound by geography. Where anyone, anywhere, can access the best financial tools.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-primary mt-8">
                We believe finance should be borderless.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="size-4" />
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Built by builders
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="bg-card rounded-3xl border shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">
                    {founder.initials}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground text-sm">{founder.background}</p>
                  <p className="text-muted-foreground text-sm">{founder.education}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="size-4" />
                Investors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Backed by the best
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {investors.map((investor) => (
                <div
                  key={investor.name}
                  className="bg-card rounded-2xl border shadow p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mx-auto mb-4">
                    {investor.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{investor.name}</h3>
                  <p className="text-muted-foreground text-xs">
                    {investor.type || investor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
