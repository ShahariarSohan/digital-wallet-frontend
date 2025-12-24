import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Scale,
  AlertCircle,
  UserCheck,
  CreditCard,
  Ban,
  Repeat,
  Shield,
} from "lucide-react";

/* =======================
   TYPES
======================= */

export type SectionPoint = {
  label: string;
  text: string;
};

export type SectionContent = {
  intro: string;
  points: SectionPoint[];
};

export type TermsSection = {
  id: number;
  number: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  gradient: string;
  content: SectionContent;
};

/* =======================
   DATA
======================= */

export const termsSections: TermsSection[] = [
  {
    id: 1,
    number: "01",
    icon: UserCheck,
    title: "Acceptance & Eligibility",
    shortDesc: "Who can use ePay and agreement terms",
    gradient: "from-primary to-secondary",
    content: {
      intro:
        "By creating an ePay account, you enter into a binding agreement with us. Please ensure you meet all eligibility requirements.",
      points: [
        {
          label: "Age Requirement",
          text: "You must be at least 18 years old or have reached the age of majority in your jurisdiction.",
        },
        {
          label: "Valid Identity",
          text: "You must provide accurate, current, and complete information including government-issued ID for verification.",
        },
        {
          label: "Jurisdiction",
          text: "You must be a resident of Bangladesh or an authorized jurisdiction where ePay operates.",
        },
        {
          label: "Legal Capacity",
          text: "You have the legal capacity to enter into a binding agreement and are not prohibited from using financial services.",
        },
        {
          label: "Account Responsibility",
          text: "You are solely responsible for maintaining the confidentiality of your account credentials.",
        },
      ],
    },
  },
  {
    id: 2,
    number: "02",
    icon: CreditCard,
    title: "Services & Transactions",
    shortDesc: "Available features and transaction rules",
    gradient: "from-secondary to-primary",
    content: {
      intro:
        "ePay provides a comprehensive digital wallet platform with multiple transaction types and features designed for your convenience.",
      points: [
        {
          label: "Send Money",
          text: "Transfer funds instantly to any ePay wallet user. Transaction fee: 1.5% per transfer.",
        },
        {
          label: "Cash In",
          text: "Add money through authorized agents, bank transfers, or card payments.",
        },
        {
          label: "Cash Out",
          text: "Withdraw funds from our agent network. Fee: 2% per transaction (min ৳10).",
        },
        {
          label: "Transaction History",
          text: "Access complete transaction records, receipts, and statements anytime.",
        },
      ],
    },
  },
  {
    id: 3,
    number: "03",
    icon: Scale,
    title: "Fees & Payment Terms",
    shortDesc: "Complete fee structure and pricing",
    gradient: "from-primary via-secondary to-primary",
    content: {
      intro:
        "We maintain transparent pricing with no hidden charges. All fees are displayed before confirmation.",
      points: [
        {
          label: "Transaction Fees",
          text: "Send: 1.5% | Cash Out: 2% | Cash In: Free via agents.",
        },
        {
          label: "Fee Changes",
          text: "We may modify fees with 30 days advance notice.",
        },
      ],
    },
  },
  {
    id: 4,
    number: "04",
    icon: AlertCircle,
    title: "User Obligations",
    shortDesc: "Your responsibilities and prohibited activities",
    gradient: "from-secondary to-primary",
    content: {
      intro:
        "You agree to use ePay responsibly and in compliance with all laws.",
      points: [
        {
          label: "Security",
          text: "Use strong passwords, enable 2FA, and report suspicious activity.",
        },
        {
          label: "Prohibited Use",
          text: "No fraud, illegal activity, or policy violations.",
        },
      ],
    },
  },
  {
    id: 5,
    number: "05",
    icon: Repeat,
    title: "Refunds & Disputes",
    shortDesc: "How we handle transaction issues",
    gradient: "from-primary to-secondary",
    content: {
      intro:
        "Disputes are handled through a structured and fair investigation process.",
      points: [
        {
          label: "Dispute Timeline",
          text: "Submit disputes within 60 days of the transaction date.",
        },
      ],
    },
  },
  {
    id: 6,
    number: "06",
    icon: Ban,
    title: "Suspension & Termination",
    shortDesc: "Account closure conditions and process",
    gradient: "from-secondary via-primary to-secondary",
    content: {
      intro:
        "We may suspend or terminate accounts for violations or legal reasons.",
      points: [
        {
          label: "Termination",
          text: "Accounts may be closed for inactivity or policy violations.",
        },
      ],
    },
  },
  {
    id: 7,
    number: "07",
    icon: Shield,
    title: "Liability & Disclaimers",
    shortDesc: "Service limitations and liability terms",
    gradient: "from-primary to-secondary",
    content: {
      intro: "Our liability is limited as permitted by applicable law.",
      points: [
        {
          label: "Liability Cap",
          text: "Limited to transaction amount or ৳50,000, whichever is lower.",
        },
      ],
    },
  },
  {
    id: 8,
    number: "08",
    icon: FileText,
    title: "Updates & Communication",
    shortDesc: "How we modify terms and contact you",
    gradient: "from-secondary to-primary",
    content: {
      intro: "We may update these terms periodically with proper notice.",
      points: [
        {
          label: "Notifications",
          text: "Updates sent via email, in-app notifications, and website.",
        },
      ],
    },
  },
];
