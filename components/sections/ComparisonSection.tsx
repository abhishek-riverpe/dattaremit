import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const comparisonData = [
  {
    provider: "Traditional Bank",
    amount: "₹80,100",
    fees: "$30",
    time: "3-5 days",
  },
  {
    provider: "DattaRemit",
    amount: "₹84,520",
    fees: "$0",
    time: "<1 min",
    highlight: true,
  },
  {
    provider: "Wire Transfer",
    amount: "₹81,200",
    fees: "$45",
    time: "1-2 days",
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
        <div className="hidden md:block max-w-3xl mx-auto">
          <div className="rounded-xl border bg-background overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-muted/50 text-sm font-medium text-muted-foreground">
              <div className="px-6 py-4">Provider</div>
              <div className="px-6 py-4">You Get</div>
              <div className="px-6 py-4">Fees</div>
              <div className="px-6 py-4">Time</div>
            </div>

            {/* Data Rows */}
            <div className="divide-y">
              {comparisonData.map((row) => (
                <div
                  key={row.provider}
                  className={`grid grid-cols-4 ${
                    row.highlight
                      ? "border-l-4 border-l-primary bg-primary/5 font-semibold"
                      : ""
                  }`}
                >
                  <div className="px-6 py-4">
                    {row.provider}
                  </div>
                  <div
                    className={`px-6 py-4 font-semibold ${
                      row.highlight ? "text-primary" : ""
                    }`}
                  >
                    {row.amount}
                  </div>
                  <div
                    className={`px-6 py-4 ${
                      row.highlight && row.fees === "$0"
                        ? "text-primary font-medium"
                        : ""
                    }`}
                  >
                    {row.fees}
                  </div>
                  <div className="px-6 py-4">
                    <div>{row.time}</div>
                    {row.highlight && (
                      <div className="flex items-center gap-1 text-sm text-primary mt-1">
                        <Check className="size-4" />
                        <span>Save ₹4,420</span>
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
                    ? "border-l-4 border-l-primary bg-primary/5 font-semibold"
                    : ""
                }`}
              >
                <div className="mb-3">
                  {row.provider}
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">You Get</div>
                    <div
                      className={`font-semibold ${
                        row.highlight ? "text-primary" : ""
                      }`}
                    >
                      {row.amount}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Fees</div>
                    <div
                      className={
                        row.highlight && row.fees === "$0"
                          ? "text-primary font-medium"
                          : ""
                      }
                    >
                      {row.fees}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Time</div>
                    <div>{row.time}</div>
                  </div>
                </div>

                {row.highlight && (
                  <div className="flex items-center gap-1 text-sm text-primary mt-3 pt-3 border-t">
                    <Check className="size-4" />
                    <span>You save ₹4,420</span>
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
