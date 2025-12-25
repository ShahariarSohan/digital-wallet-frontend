import { useState, useEffect } from "react";
import {
  ArrowRight,
  Smartphone,
  Lock,
  Zap,
  TrendingUp,
  CreditCard,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { useAllUserStatsQuery } from "@/redux/features/stats/stats.api";
import WalletLoader from "@/components/WalletLoader";

const CTASection = () => {
  const [balance, setBalance] = useState(12500);
  const [transactionCount, setTransactionCount] = useState(143);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance((prev) => prev + Math.floor(Math.random() * 100));
      setTransactionCount((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const { data, isLoading } = useAllUserStatsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const userData = data?.data;
  const quickStats = [
    { icon: TrendingUp, label: "Growth", value: "+23%" },
    { icon: CreditCard, label: "Saved", value: "$500" },
    { icon: Users, label: "Contacts", value: "48" },
  ];

  const recentTransactions = [
    {
      name: "Send Money",
      amount: "-$12.50",
      time: "2m ago",
      color: "from-primary to-secondary",
    },
    {
      name: "Salary Deposit",
      amount: "+$2,500",
      time: "1h ago",
      color: "from-secondary to-primary",
    },
    {
      name: "Withdraw",
      amount: "-$45.80",
      time: "3h ago",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section className="relative py-24  overflow-hidden rounded:md">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 ">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Zap className="w-4 h-4 text-foreground" />
              <span className="text-sm font-semibold text-foreground">
                GET STARTED TODAY
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span>Your financial</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                freedom starts here
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-foreground">
              Join thousands of users who trust{" "}
              <span className="font-bold italic text-foreground">ePay</span> for
              their daily transactions. Experience the perfect blend of
              security, speed, and simplicity.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: Lock, text: "Bank-grade 256-bit encryption" },
                { icon: Zap, text: "Instant transfers in under 2 seconds" },
                { icon: Smartphone, text: "Available 24/7 on web & mobile" },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/register">
                <button className="group px-8 py-5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-foreground rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                  Create Free Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-6 pt-6 border-t border-primary/20">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white flex items-center justify-center text-white font-bold"
                  >
                    {i}K
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {isLoading ? (
                    <WalletLoader></WalletLoader>
                  ) : (
                    <p className=" text-xl text-primary font-bold">
                      {userData?.totalUsers}+ Happy Active Users
                    </p>
                  )}
                </div>
                <div className="text-sm text-foreground/70">
                  ⭐ Rated 4.9/5 by our community
                </div>
              </div>
            </div>
          </div>

          {/* Right - Interactive Dashboard Preview */}
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-gradient-to-b from-primary/5 to-secondary/5 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-primary to-secondary px-6 py-8 text-primary-foreground">
                    <div className="flex justify-between items-center mb-6 text-sm">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-white/30 rounded" />
                        <div className="w-4 h-4 bg-white/30 rounded" />
                        <div className="w-4 h-4 bg-white rounded" />
                      </div>
                    </div>
                    <div className="text-primary-foreground/80 text-sm mb-1">
                      Total Balance
                    </div>
                    <div className="text-4xl font-bold mb-4">
                      ${balance.toLocaleString()}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold">↑</div>
                        <div className="text-xs">Send</div>
                      </div>
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold">↓</div>
                        <div className="text-xs">Receive</div>
                      </div>
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold">⊕</div>
                        <div className="text-xs">More</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 p-6">
                    {quickStats.map((stat, idx) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-card rounded-xl p-3 shadow-sm border border-primary/10"
                        >
                          <Icon className="w-5 h-5 text-foreground mb-1" />
                          <div className="text-xs text-foreground/70">
                            {stat.label}
                          </div>
                          <div className="text-sm font-bold text-foreground">
                            {stat.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Recent Transactions */}
                  <div className="px-6 pb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-foreground">
                        Recent Activity
                      </h3>
                      <span className="text-xs font-semibold text-foreground">
                        {transactionCount} total
                      </span>
                    </div>
                    <div className="space-y-3">
                      {recentTransactions.map((tx, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-card rounded-xl p-3 shadow-sm border border-primary/10"
                        >
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tx.color} flex items-center justify-center text-primary-foreground font-bold`}
                          >
                            {tx.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-foreground truncate">
                              {tx.name}
                            </div>
                            <div className="text-xs text-foreground/60">
                              {tx.time}
                            </div>
                          </div>
                          <div
                            className={`text-sm font-bold ${
                              tx.amount.startsWith("+")
                                ? "text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {tx.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="hidden absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl md:flex items-center justify-center animate-bounce">
                <span className="text-white text-2xl font-bold">🎉</span>
              </div>
              <div className=" hidden absolute -bottom-8 -left-8 w-20 h-20  bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-2xl md:flex items-center justify-center animate-pulse">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
