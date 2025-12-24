import { useState } from "react";
import {
  Shield,
  Mail,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { policySections, quickFacts } from "@/constants/policy.data";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-primary/5 to-primary/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-4 h-4 text-foreground" />
              <span className="text-sm font-semibold text-foreground">
                PRIVACY POLICY
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Privacy Matters
            </h1>

            <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
              At <span className="font-bold italic">ePay</span>, we're committed
              to protecting your personal information and being transparent
              about how we use it.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-foreground">
                <div className="text-sm">Last Updated</div>
                <div className="text-lg font-bold">December 24, 2025</div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-foreground">
                <div className="text-sm">Effective Date</div>
                <div className="text-lg font-bold">January 1, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickFacts.map((fact, idx) => {
            const Icon = fact.icon as LucideIcon;
            return (
              <div
                key={idx}
                className="bg-card p-6 rounded-2xl shadow-lg border-2 border-primary/10"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {fact.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {fact.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {["overview", "details"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-primary to-primary text-foreground shadow-lg"
                  : "bg-primary/20 text-foreground/60 hover:bg-primary/30" // faded style for inactive
              }`}
            >
              {tab === "overview" ? "Quick Overview" : "Detailed Policy"}
            </button>
          ))}
        </div>

        {activeTab === "overview" ? (
          <div className="space-y-6">
            <div className=" rounded-3xl p-8 shadow-lg border-2 border-primary/10">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Privacy at a Glance
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {policySections.map((section) => {
                  const Icon = section.icon as LucideIcon;
                  return (
                    <div
                      key={section.id}
                      className="p-6 transition-colors cursor-pointer"
                      onClick={() => {
                        setActiveTab("details");
                        setExpandedSection(section.id);
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {section.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {section.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {policySections.map((section, idx) => {
              const Icon = section.icon as LucideIcon;
              const isExpanded = expandedSection === section.id;

              return (
                <div
                  key={section.id}
                  className=" rounded-2xl shadow-lg border-2 border-primary/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-muted-foreground font-semibold">
                          Section {idx + 1}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-foreground" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-6">
                      {section.content.map((block, blockIdx) => (
                        <div key={blockIdx}>
                          <h4 className="text-lg font-bold text-foreground mb-3">
                            {block.subtitle}
                          </h4>
                          <ul className="space-y-2">
                            {block.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                                <span className="text-muted-foreground">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Section */}
        {/* Contact Section */}
        <div className="mt-16 bg-card rounded-3xl p-10 shadow-lg border-2 border-primary/10">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-foreground" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Questions About Privacy?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Our privacy team is here to help. Reach out with any concerns or
                questions, and we’ll get back to you as soon as possible.
              </p>
            </div>

            <a
              href="mailto:sohanshahariar4@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary text-foreground rounded-xl font-semibold shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Email Privacy Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
