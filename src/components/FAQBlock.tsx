import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is ePay wallet?",
    answer:
      "ePay wallet is a secure digital wallet that allows you to store money, make payments, and transfer funds instantly through your smartphone.",
  },
  {
    question: "How can I add money to my ePay Wallet?",
    answer:
      "You can add money to your ePay Wallet using bank transfers, debit/credit cards, or by receiving money from another ePay Wallet user.",
  },
  {
    question: "Can I send money to other users?",
    answer:
      "Yes, with ePay Wallet you can transfer money instantly to other ePay Wallet users using their phone number or wallet ID.",
  },
  {
    question: "Is my money safe in ePay Wallet?",
    answer:
      "Yes, your money is secured with advanced encryption and multi-layer authentication, ensuring safe transactions every time.",
  },
  {
    question: "What should I do if I forget my ePay Wallet PIN?",
    answer:
      "If you forget your wallet PIN, you can reset it through the 'Forgot PIN' option in the app. A verification code will be sent to your registered phone number.",
  },
  {
    question: "Does ePay Wallet charge any fees?",
    answer:
      "Most transactions are free, but some services such as bank withdrawals or international transfers may include minimal fees.",
  },
  {
    question: "Can I pay bills using ePay Wallet?",
    answer:
      "Yes, ePay Wallet allows you to pay utility bills, mobile recharges, and other services directly from your wallet balance.",
  },
  {
    question: "What should I do if I face issues with my transaction?",
    answer:
      "If you face any issue with a transaction, you can check the transaction history in the app and contact customer support for assistance.",
  },
];

export const FAQBlock = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className=" py-10 md:py-30">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium bg-slate-400">{badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{heading}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


