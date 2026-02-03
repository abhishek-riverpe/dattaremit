import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get more INR per USD
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much $1000 gets you with DattaPay vs traditional methods
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ComparisonCard
            provider="Traditional Bank"
            amount="80,100"
            fees="$30"
            time="3-5 days"
          />
          <ComparisonCard
            provider="DattaPay"
            amount="84,520"
            fees="$0"
            time="<1 min"
            highlight
          />
          <ComparisonCard
            provider="Wire Transfer"
            amount="81,200"
            fees="$45"
            time="1-2 days"
          />
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

function ComparisonCard({
  provider,
  amount,
  fees,
  time,
  highlight = false,
}: {
  provider: string;
  amount: string;
  fees: string;
  time: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 bg-background border ${
        highlight ? 'border-primary ring-1 ring-primary' : 'border-border'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          Best Value
        </div>
      )}

      <div className="text-sm text-muted-foreground mb-2">{provider}</div>

      <div className={`text-3xl font-bold mb-4 ${highlight ? 'text-primary' : ''}`}>
        ₹{amount}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Fees</span>
          <span className={`font-medium ${highlight && fees === '$0' ? 'text-primary' : ''}`}>
            {fees}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Time</span>
          <span className="font-medium">{time}</span>
        </div>
      </div>

      {highlight && (
        <div className="mt-4 pt-4 border-t flex items-center gap-2 text-sm text-primary">
          <Check className="size-4" />
          <span>You save ₹4,420</span>
        </div>
      )}
    </div>
  );
}
