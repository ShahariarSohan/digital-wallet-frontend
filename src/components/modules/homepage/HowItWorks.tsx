import React, { useState, useEffect } from "react";
import { UserPlus, Wallet, ArrowRightLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Create Account",
      description:
        "Sign up in seconds with email verification. Choose your role: User or Agent.",
      details: [
        "Email & OTP verification",
        "Instant wallet creation",
        "Secure JWT authentication",
      ],
    },
    {
      id: 2,
      icon: Wallet,
      title: "Add Money",
      description:
        "Load your wallet through agents, bank transfer, or card payment.",
      details: [
        "Multiple payment options",
        "Real-time balance update",
        "Transaction confirmation",
      ],
    },
    {
      id: 3,
      icon: ArrowRightLeft,
      title: "Transact",
      description:
        "Send money, cash in, cash out - all with atomic operations for security.",
      details: [
        "Instant transfers",
        "Agent network support",
        "Full transaction history",
      ],
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: "Track & Manage",
      description:
        "Monitor all transactions with filters, charts, and detailed logs.",
      details: ["Real-time dashboard", "Advanced filters", "Export statements"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((step) => (step + 1) % steps.length);
          return 0;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/5 via-primary/5 to-secondary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get started with{" "}
            <span className="italic text-foreground">ePay</span> in 4 simple
            steps
          </h2>

          <p className="text-xl text-foreground/70">
            From registration to transactions - we've made it incredibly simple
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-primary/10">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.id}
                  className="relative"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div
                    className={`relative rounded-3xl p-8 border-2 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-br from-primary to-secondary border-primary shadow-2xl -translate-y-4"
                        : isPast
                        ? "bg-secondary/10 border-secondary/50 shadow-lg"
                        : "bg-primary/5 border-primary/20 shadow-md"
                    }`}
                  >
                    {/* Number */}
                    <div
                      className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg transition-all duration-500 ${
                        isActive
                          ? "scale-125 rotate-12"
                          : isPast
                          ? "scale-110"
                          : ""
                      }`}
                    >
                      <span className="font-bold text-lg text-foreground">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-500 ${
                        isActive
                          ? "bg-white/20"
                          : "bg-gradient-to-br from-primary to-secondary"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          isActive ? "text-white" : "text-primary-foreground"
                        }`}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-foreground/70">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                              isActive ? "bg-white" : "bg-primary"
                            }`}
                          />
                          <span className="text-foreground/70">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Progress */}
                    {isActive && (
                      <div className="mt-6 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}

                    {/* Completed */}
                    {isPast && (
                      <div className="absolute bottom-8 right-8">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-2xl transition-opacity duration-500 -z-10 ${
                        isActive ? "opacity-20" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-lg text-foreground/70">
              Ready to experience the future of digital payments?
            </p>
            <Link to="/register">
              <button className="group px-10 py-5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-foreground rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                Start Your Journey
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform text-foreground">
                  →
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
