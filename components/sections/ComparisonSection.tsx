import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const comparisonData = [
  {
    provider: "DattaRemit",
    logo: "/logo.png",
    logoSize: "h-12 w-36",
    logoSizeMobile: "h-10 w-32",
    exchangeRate: "91.15",
    transferFee: "$0",
    recipientGets: "₹91,150",
    highlight: true,
  },
  {
    provider: "Wise",
    logo: "/wise.png",
    logoSize: "h-12 w-32",
    logoSizeMobile: "h-10 w-28",
    exchangeRate: "90.36",
    transferFee: "$6.15",
    recipientGets: "₹89,804",
  },
  {
    provider: "Remitly",
    logo: "/remitly.png",
    logoSize: "h-10 w-28",
    logoSizeMobile: "h-8 w-24",
    exchangeRate: "90.05",
    transferFee: "$0",
    recipientGets: "₹90,050",
  },
  {
    provider: "Skrill",
    logo: "/skrill.png",
    logoSize: "h-8 w-20",
    logoSizeMobile: "h-6 w-16",
    exchangeRate: "86.75",
    transferFee: "$0",
    recipientGets: "₹86,750",
  },
  {
    provider: "Payoneer",
    logo: "/payoneer.png",
    logoSize: "h-10 w-28",
    logoSizeMobile: "h-8 w-24",
    exchangeRate: "88.55",
    transferFee: "$1.50",
    recipientGets: "₹88,417",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get more INR per USD
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much $1000 gets you with DattaRemit vs traditional methods
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-xl border bg-background overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-muted/50 text-sm font-medium text-muted-foreground">
              <div className="px-6 py-4">Provider</div>
              <div className="px-6 py-4 text-center">Exchange rate</div>
              <div className="px-6 py-4 text-center">Transfer fee</div>
              <div className="px-6 py-4 text-center">Recipient gets</div>
            </div>

            {/* Data Rows */}
            <div className="divide-y">
              {comparisonData.map((row) => (
                <div
                  key={row.provider}
                  className={`grid grid-cols-4 items-center ${
                    row.highlight
                      ? "border-2 border-primary bg-primary/5"
                      : ""
                  }`}
                >
                  <div className="px-6 py-4 flex items-center">
                    <div className={`relative ${row.logoSize} flex-shrink-0`}>
                      <Image
                        src={row.logo}
                        alt={row.provider}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </div>
                  <div className={`px-6 py-4 text-center ${row.highlight ? "font-semibold" : ""}`}>
                    {row.exchangeRate}
                  </div>
                  <div className={`px-6 py-4 text-center ${row.highlight ? "font-semibold" : ""}`}>
                    {row.transferFee}
                  </div>
                  <div className="px-6 py-4 text-center">
                    <span className={`font-semibold ${row.highlight ? "" : "text-foreground"}`}>
                      {row.recipientGets}
                    </span>
                    {row.highlight && (
                      <div className="flex items-center justify-center gap-1 text-sm text-primary mt-1">
                        <Check className="size-4" />
                        <span>Best value</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="rounded-xl border bg-background overflow-hidden divide-y">
            {comparisonData.map((row) => (
              <div
                key={row.provider}
                className={`p-4 ${
                  row.highlight
                    ? "border-2 border-primary bg-primary/5"
                    : ""
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`relative ${row.logoSizeMobile} flex-shrink-0`}>
                    <Image
                      src={row.logo}
                      alt={row.provider}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Exchange rate
                    </div>
                    <div className={row.highlight ? "font-semibold" : ""}>
                      {row.exchangeRate}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Transfer fee
                    </div>
                    <div className={row.highlight ? "font-semibold" : ""}>
                      {row.transferFee}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Recipient gets
                    </div>
                    <div className="font-semibold">
                      {row.recipientGets}
                    </div>
                  </div>
                </div>

                {row.highlight && (
                  <div className="flex items-center gap-1 text-sm text-primary mt-3 pt-3 border-t border-primary/20">
                    <Check className="size-4" />
                    <span>Best value</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="xl" className="group" asChild>
            <Link href="/contact">
              Send Money
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
