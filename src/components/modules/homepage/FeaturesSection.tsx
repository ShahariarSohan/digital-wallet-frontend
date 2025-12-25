import React, { useState } from "react";
import {
  Wallet,
  Send,
  Download,
  Upload,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Link } from "react-router";

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: Send,
      title: "Send Money",
      description: "Transfer funds instantly to any wallet with zero hassle",
      stat: "< 2s",
      statLabel: "Average time",
    },
    {
      id: 2,
      icon: Download,
      title: "Cash In",
      description: "Add money to your wallet through agents or bank transfer",
      stat: "24/7",
      statLabel: "Available",
    },
    {
      id: 3,
      icon: Upload,
      title: "Cash Out",
      description: "Withdraw your balance anytime from nearby agents",
      stat: "1000+",
      statLabel: "Agents",
    },
    {
      id: 4,
      icon: Wallet,
      title: "Smart Wallet",
      description: "Auto-created secure wallet with real-time balance tracking",
      stat: "256-bit",
      statLabel: "Encryption",
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: "Secure Auth",
      description: "JWT-based authentication with OTP verification",
      stat: "99.99%",
      statLabel: "Secure",
    },
    {
      id: 6,
      icon: Clock,
      title: "Transaction History",
      description: "Track every transaction with detailed logs and filters",
      stat: "Live",
      statLabel: "Updates",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 via-secondary/5 to-primary/5 rounded-sm">
      <div className=" mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-foreground">
              FEATURES
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need in a{" "}
            <span className="italic text-foreground">digital wallet</span>
          </h2>

          <p className="text-xl text-foreground/70">
            Enterprise-grade features designed for seamless financial operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === feature.id;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative"
              >
                <div
                  className={`relative h-full p-8 border-2 rounded-2xl transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-br from-primary to-secondary border-primary shadow-2xl -translate-y-2"
                      : "bg-primary/5 border-primary/20 shadow-md hover:border-primary/50"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl shadow-lg transition-all duration-300 ${
                        isHovered
                          ? "bg-white/20 scale-110 rotate-6"
                          : "bg-gradient-to-br from-primary to-secondary"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          isHovered ? "text-white" : "text-primary-foreground"
                        }`}
                        strokeWidth={2}
                      />
                    </div>

                    <div
                      className={`absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-primary to-secondary border-2 border-primary-foreground rounded-full text-xs font-bold text-foreground shadow-lg transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                    >
                      {feature.stat}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed mb-6 text-foreground/70">
                    {feature.description}
                  </p>

                  {/* Stat */}
                  <div
                    className={`pt-4 border-t ${
                      isHovered ? "border-white/30" : "border-primary/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">
                        {feature.statLabel}
                      </span>
                      <span className="text-lg font-bold text-foreground">
                        {feature.stat}
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-xl transition-opacity duration-300 -z-10 ${
                    isHovered ? "opacity-20" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/features">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3">
              Explore All Features
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="text-xs">→</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
