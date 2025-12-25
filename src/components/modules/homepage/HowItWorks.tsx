import  { useState, useEffect } from "react";
import { UserPlus, Wallet, ArrowRightLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const HowItWorksSection = () => {
  // autoplay step (source of truth)
  const [autoStep, setAutoStep] = useState(0);

  // UI step (hover or auto)
  const [activeStep, setActiveStep] = useState(0);

  // loader progress
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

  // 🔁 TRUE sequential autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setAutoStep((s) => (s + 1) % steps.length);
          return 0;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [steps.length]);

  // 🔗 sync UI with autoplay
  useEffect(() => {
    setActiveStep(autoStep);
  }, [autoStep]);

  return (
    <section className="py-24 overflow-hidden">
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-foreground">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get started with <span className="italic">ePay</span> in 4 simple
            steps
          </h2>

          <p className="text-xl text-foreground/70">
            From registration to transactions - we've made it incredibly simple
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isPast = idx < autoStep;

            return (
              <div
                key={step.id}
                className="relative"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(autoStep)}
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
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <span className="font-bold text-lg text-foreground">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-6 ${
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

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>

                  <p className="mb-6 text-foreground/70">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className={`flex gap-2 text-sm transition-all duration-300 ${
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

                  {/* Loader */}
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
                    <CheckCircle2 className="absolute bottom-8 right-8 w-6 h-6 text-secondary" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Ready to experience the future of digital payments?
          </p>

          <Link to="/register">
            <button className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-foreground rounded-2xl font-bold text-lg shadow-xl">
              Start Your Journey →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
