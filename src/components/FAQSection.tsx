import  { useState } from "react";
import {
  ChevronDown,
  MessageCircleQuestion,
  Search,
  Wallet,
  Shield,
  CreditCard,
  RefreshCw,
  Phone,
} from "lucide-react";
import { Link } from "react-router";

export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "security" | "transactions" | "support";
}

export interface FaqSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is ePay wallet?",
    answer:
      "ePay wallet is a secure digital wallet that allows you to store money, make payments, and transfer funds instantly through your smartphone. With bank-grade encryption and real-time transaction processing, ePay makes managing your finances easier than ever.",
    category: "general",
  },
  {
    question: "How can I add money to my ePay Wallet?",
    answer:
      "You can add money to your ePay Wallet using multiple methods: bank transfers, debit/credit cards, cash-in through our agent network, or by receiving money from another ePay Wallet user. All methods are instant and secure.",
    category: "transactions",
  },
  {
    question: "Can I send money to other users?",
    answer:
      "Yes! With ePay Wallet you can transfer money instantly to other ePay Wallet users using their phone number or wallet ID. Transfers are processed in under 2 seconds with a small transaction fee of 1.5%.",
    category: "transactions",
  },
  {
    question: "Is my money safe in ePay Wallet?",
    answer:
      "Absolutely! Your money is secured with 256-bit SSL encryption, two-factor authentication (2FA), and multi-layer security protocols. We also monitor transactions 24/7 for suspicious activity to keep your funds protected.",
    category: "security",
  },
  {
    question: "What should I do if I forget my ePay Wallet PIN?",
    answer:
      "If you forget your wallet PIN, simply tap 'Forgot PIN' on the login screen. A verification OTP will be sent to your registered email and phone number. Follow the instructions to create a new secure PIN.",
    category: "support",
  },
  {
    question: "Does ePay Wallet charge any fees?",
    answer:
      "Most transactions are free! Cash-in through agents is completely free. Send Money charges 1.5%, and Cash Out charges 2% (minimum ৳10). Bank transfers may include minimal fees depending on your bank.",
    category: "transactions",
  },
  {
    question: "Can I pay bills using ePay Wallet?",
    answer:
      "Yes, ePay Wallet allows you to pay utility bills, mobile recharges, internet bills, and other services directly from your wallet balance. We're constantly adding new biller partnerships.",
    category: "general",
  },
  {
    question: "What should I do if I face issues with my transaction?",
    answer:
      "If you face any issue with a transaction, check the transaction history in the app first. You can report disputes within 60 days via the app or contact our 24/7 customer support team for immediate assistance.",
    category: "support",
  },
  {
    question: "How do I verify my ePay account?",
    answer:
      "To verify your account, go to Settings > Account Verification and upload a government-issued ID (National ID or Passport). Verification typically takes 1-2 business days and unlocks higher transaction limits.",
    category: "general",
  },
  {
    question: "What are the transaction limits?",
    answer:
      "Unverified accounts have a daily limit of ৳10,000. Verified accounts can transact up to ৳100,000 per day. Monthly limits are 5x the daily limit. You can check your current limits in the app settings.",
    category: "transactions",
  },
  {
    question: "Can I use ePay internationally?",
    answer:
      "Currently, ePay operates within Bangladesh. However, we're working on international partnerships to enable cross-border transactions in the near future. Stay tuned for updates!",
    category: "general",
  },
  {
    question: "How do I close my ePay account?",
    answer:
      "To close your account, withdraw all funds first, then contact our support team with your request. Account closure takes 7-14 business days. Please note that closed accounts cannot be reactivated.",
    category: "support",
  },
];

const categories = [
  { id: "all", label: "All Questions", icon: MessageCircleQuestion },
  { id: "general", label: "General", icon: Wallet },
  { id: "security", label: "Security", icon: Shield },
  { id: "transactions", label: "Transactions", icon: CreditCard },
  { id: "support", label: "Support", icon: Phone },
];

export const FAQSection = ({
  badge = "FAQ",
  heading = "Frequently Asked Questions",
  description = "Everything you need to know about ePay wallet. Can't find the answer you're looking for? Reach out to our support team.",
  faqs = defaultFaqs,
}: FaqSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MessageCircleQuestion className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{badge}</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {heading}
          </h2>

          <p className="text-xl text-foreground/70">{description}</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border-2 border-primary/20 rounded-2xl focus:border-primary focus:outline-none text-foreground placeholder:text-foreground/40 shadow-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-lg scale-105"
                    : "bg-card hover:bg-primary/10 text-foreground border-2 border-primary/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No results found
              </h3>
              <p className="text-foreground/70">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              const categoryIcon =
                categories.find((c) => c.id === faq.category)?.icon ||
                MessageCircleQuestion;
              const CategoryIcon = categoryIcon;

              return (
                <div
                  key={index}
                  className={`bg-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-primary shadow-2xl"
                      : "border-primary/20 hover:border-primary/50 shadow-lg"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-primary/5 transition-colors"
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isExpanded
                          ? "bg-gradient-to-br from-primary to-secondary"
                          : "bg-primary/10"
                      }`}
                    >
                      <CategoryIcon
                        className={`w-6 h-6 ${
                          isExpanded
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold transition-colors ${
                          isExpanded ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      className={`w-6 h-6 text-foreground/60 transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-16">
                        <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                        <p className="text-foreground/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-12 text-center shadow-2xl">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions
              or concerns about <span className="font-bold italic">ePay</span>{" "}
              wallet.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-xl font-bold shadow-lg transition-all inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: MessageCircleQuestion,
              value: "1000+",
              label: "Questions Answered",
            },
            { icon: Phone, value: "24/7", label: "Support Available" },
            { icon: Shield, value: "99.9%", label: "Satisfaction Rate" },
            { icon: RefreshCw, value: "<2hrs", label: "Avg Response Time" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-card rounded-2xl p-6 border-2 border-primary/10 text-center hover:border-primary/30 transition-all"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
