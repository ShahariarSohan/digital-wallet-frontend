"use client";

import { BarChart3, CreditCard, Globe, Headphones, ShieldCheck, Smartphone, Store, Wallet } from "lucide-react";



export const FeaturesBlock = () => {
  const services = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Digital Payments",
      description:
        "Fast, secure, and reliable digital transactions designed for everyday needs.",
      items: ["Send & Receive Money", "Bill Payments", "Mobile Recharge"],
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Security",
      description:
        "Advanced encryption and authentication to keep your money and data safe.",
      items: [
        "Fraud Protection",
        "Two-Factor Authentication",
        "Data Encryption",
      ],
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Financial Services",
      description:
        "Empowering users with convenient financial solutions beyond payments.",
      items: ["Savings", "Loan Access", "Card Linking"],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Growth & Insights",
      description:
        "Tools to help users and businesses track, manage, and scale financial activities.",
      items: ["Expense Tracking", "Analytics", "Business Dashboard"],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Transfers",
      description:
        "Seamless cross-border money transfers with competitive rates and real-time speed.",
      items: ["Remittance", "Multi-Currency Support", "Instant Transfers"],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Experience",
      description:
        "A smooth and intuitive mobile app designed for effortless financial management.",
      items: ["Easy Navigation", "Quick Actions", "24/7 Access"],
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Support",
      description:
        "Dedicated assistance to keep your transactions and services running smoothly.",
      items: ["24/7 Chat", "Help Center", "Personalized Support"],
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Merchant Solutions",
      description:
        "Empowering businesses with secure payment options and customer engagement tools.",
      items: ["POS Integration", "QR Payments", "Merchant Dashboard"],
    },
  ];

  return (
    <section className="py-10 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Features
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              We craft digital experiences that makes your payments secure , simple and user friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


