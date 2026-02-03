import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using the DattaPay service (\"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, do not use the Service. We reserve the right to modify these Terms at any time." },
  { title: "2. Eligibility", content: "You must be at least 18 years old and have the legal capacity to enter into a binding agreement. By using DattaPay, you represent that you meet these requirements and that all information you provide is accurate." },
  { title: "3. Account Registration", content: "To use our Service, you must create an account and complete identity verification. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account." },
  { title: "4. Money Transfer Services", content: "DattaPay provides international money transfer services subject to applicable laws. Transfer amounts, delivery times, and methods may vary based on destination, payment method, and regulatory requirements." },
  { title: "5. Fees and Exchange Rates", content: "Fees and exchange rates are disclosed before you confirm each transfer. Exchange rates fluctuate and the rate applied is the rate at confirmation. We may change our fee structure with notice to existing customers." },
  { title: "6. Prohibited Activities", content: "You agree not to use the Service for any unlawful purpose, including money laundering, terrorist financing, fraud, or any other illegal activity. We reserve the right to suspend accounts and report to authorities." },
  { title: "7. Limitation of Liability", content: "To the fullest extent permitted by law, DattaPay shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed fees paid in the twelve months preceding the claim." },
  { title: "8. Contact Information", content: "If you have questions about these Terms, contact us at legal@dattapay.com or write to: DattaPay, 100 Financial District, Suite 400, San Francisco, CA 94111." },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Terms of Service
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
