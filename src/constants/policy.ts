import { CheckCircle2, Database, Eye, FileText, Shield, Users } from "lucide-react";
import { type LucideIcon } from "lucide-react";
export interface IPolicySection {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  content: {
    subtitle: string;
    items: string[];
  }[];
}
export const policySections:IPolicySection[] = [
  {
    id: "collection",
    icon: Database,
    title: "Information We Collect",
    summary: "What data we gather when you use ePay",
    content: [
      {
        subtitle: "Personal Information",
        items: [
          "Full name, email address, and phone number",
          "Government-issued ID for verification purposes",
          "Billing and payment information",
          "Profile photo (optional)",
        ],
      },
      {
        subtitle: "Transaction Data",
        items: [
          "Payment history and transaction records",
          "Wallet balance and financial activities",
          "Agent interactions and cash-in/cash-out records",
          "Device information and IP addresses",
        ],
      },
      {
        subtitle: "Usage Information",
        items: [
          "App usage patterns and preferences",
          "Feature interactions and click data",
          "Error logs and performance metrics",
          "Customer support communications",
        ],
      },
    ],
  },
  {
    id: "usage",
    icon: Eye,
    title: "How We Use Your Information",
    summary: "The purposes behind data collection",
    content: [
      {
        subtitle: "Service Delivery",
        items: [
          "Process transactions and manage your wallet",
          "Verify your identity and prevent fraud",
          "Provide customer support and assistance",
          "Send transaction notifications and updates",
        ],
      },
      {
        subtitle: "Service Improvement",
        items: [
          "Analyze usage patterns to enhance features",
          "Develop new products and services",
          "Conduct research and analytics",
          "Personalize your experience",
        ],
      },
      {
        subtitle: "Legal Compliance",
        items: [
          "Comply with regulatory requirements",
          "Prevent money laundering and fraud",
          "Respond to legal requests",
          "Protect our rights and property",
        ],
      },
    ],
  },
  {
    id: "sharing",
    icon: Users,
    title: "Information Sharing",
    summary: "When and how we share your data",
    content: [
      {
        subtitle: "We Share Information With:",
        items: [
          "Payment processors and financial institutions",
          "Identity verification service providers",
          "Cloud storage and hosting providers",
          "Analytics and performance monitoring services",
        ],
      },
      {
        subtitle: "We DO NOT Share:",
        items: [
          "Your information with advertisers",
          "Personal data for marketing purposes",
          "Transaction details with third parties",
          "Any data without your explicit consent",
        ],
      },
    ],
  },
  {
    id: "security",
    icon:Shield,
    title: "Data Security",
    summary: "How we protect your information",
    content: [
      {
        subtitle: "Security Measures",
        items: [
          "Bank-grade 256-bit SSL encryption",
          "Two-factor authentication (2FA)",
          "Regular security audits and penetration testing",
          "Secure data centers with 24/7 monitoring",
        ],
      },
      {
        subtitle: "Your Responsibilities",
        items: [
          "Keep your password confidential",
          "Enable 2FA on your account",
          "Report suspicious activities immediately",
          "Use secure networks for transactions",
        ],
      },
    ],
  },
  {
    id: "rights",
    icon: Shield,
    title: "Your Rights",
    summary: "Control over your personal data",
    content: [
      {
        subtitle: "You Have The Right To:",
        items: [
          "Access your personal information",
          "Correct inaccurate data",
          "Request data deletion (subject to legal requirements)",
          "Export your data in a portable format",
          "Opt-out of marketing communications",
          "Withdraw consent at any time",
        ],
      },
    ],
  },
  {
    id: "retention",
    icon: FileText,
    title: "Data Retention",
    summary: "How long we keep your information",
    content: [
      {
        subtitle: "Retention Periods",
        items: [
          "Active account data: As long as your account is active",
          "Transaction records: 7 years (regulatory requirement)",
          "Support communications: 3 years",
          "Marketing data: Until you opt-out",
        ],
      },
    ],
  },
];

export interface IQuickFact {
  icon: LucideIcon; 
  label: string;
  value: string;
}
 export  const quickFacts:IQuickFact[] = [
    { icon: Shield, label: "Bank-Grade Encryption", value: "256-bit SSL" },
    { icon: Shield, label: "Data Protection", value: "GDPR Compliant" },
    { icon: Eye, label: "Transparency", value: "100%" },
    { icon: CheckCircle2, label: "Regular Audits", value: "Quarterly" },
  ];