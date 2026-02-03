import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

const sections = [
  { title: "1. Information We Collect", content: "We collect information you provide directly, including name, email, phone, date of birth, government ID details, bank information, and transaction history. We also collect device information, IP addresses, and usage data." },
  { title: "2. How We Use Your Information", content: "We use your information to provide money transfer services, verify identity, comply with regulations, process transactions, send notifications, detect fraud, improve services, and communicate about products (with consent)." },
  { title: "3. Information Sharing", content: "We share information only as necessary: with payment partners, identity verification services, regulatory authorities, and service providers. We never sell personal information to third parties." },
  { title: "4. Data Security", content: "We implement 256-bit SSL encryption in transit, AES-256 at rest, two-factor authentication, regular independent security audits, and strict employee access controls." },
  { title: "5. Data Retention", content: "We retain information while your account is active or as needed for services. Certain information is retained as required by law, for dispute resolution, and agreement enforcement." },
  { title: "6. Your Rights", content: "Depending on jurisdiction, you may access, correct, delete your information, restrict processing, request portability, and withdraw marketing consent. Contact privacy@dattapay.com." },
  { title: "7. Cookies and Tracking", content: "We use cookies and tracking technologies to enhance experience, analyze usage, and personalize content. Manage preferences through browser settings. Essential cookies cannot be disabled." },
  { title: "8. Contact Us", content: "Questions about this policy? Contact our Data Protection Officer at privacy@dattapay.com or: DattaPay, 100 Financial District, Suite 400, San Francisco, CA 94111." },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">Last updated: January 1, 2025</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
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
