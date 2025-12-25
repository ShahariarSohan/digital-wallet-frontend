"use client";

import {
  Wallet,
  Send,
  Download,
  Upload,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const FeaturesBlock = () => {
  const features = [
    {
      icon: Send,
      title: "Send Money",
      description:
        "Transfer funds instantly to any registered wallet with enterprise-grade speed and reliability.",
      points: [
        "Instant peer-to-peer transfers",
        "Low-latency transaction processing",
        "Real-time confirmation & notifications",
      ],
      stat: "< 2s average processing time",
    },
    {
      icon: Download,
      title: "Cash In",
      description:
        "Seamlessly add money to your wallet through trusted agents or secure bank transfers.",
      points: [
        "Agent-based deposits",
        "Bank & online channel support",
        "24/7 availability",
      ],
      stat: "Always available",
    },
    {
      icon: Upload,
      title: "Cash Out",
      description:
        "Withdraw your wallet balance anytime from nearby authorized agents.",
      points: [
        "Wide agent network",
        "Fast cash withdrawal",
        "Secure verification process",
      ],
      stat: "1000+ active agents",
    },
    {
      icon: Wallet,
      title: "Smart Wallet",
      description:
        "A secure, auto-created digital wallet with real-time balance tracking and transaction safety.",
      points: [
        "Auto wallet creation",
        "Live balance updates",
        "Encrypted data storage",
      ],
      stat: "256-bit encryption",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "Robust authentication system designed to protect accounts and transactions.",
      points: [
        "JWT-based authentication",
        "OTP verification",
        "Fraud & misuse protection",
      ],
      stat: "99.99% secure",
    },
    {
      icon: Clock,
      title: "Transaction History",
      description:
        "Detailed transaction logs with filters for complete financial transparency.",
      points: [
        "Live transaction updates",
        "Search & filter support",
        "Downloadable records",
      ],
      stat: "Real-time tracking",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Powerful Features, Built for Scale
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A deeper look into the enterprise-grade capabilities that power our
            digital wallet ecosystem.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border p-8 md:p-12 transition-all hover:shadow-lg"
              >
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-4">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {feature.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stat */}
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Performance
                      </span>
                      <span className="font-semibold text-foreground">
                        {feature.stat}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
