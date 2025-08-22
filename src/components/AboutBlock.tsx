import { AboutBlock2 } from "./AboutBlock2";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}


const defaultAchievements = [
  { label: "Active Users", value: "1M+" },
  { label: "Transactions Processed", value: "10M+" },
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Merchants Onboarded", value: "500+" },
];

export const AboutBlock = ({
  
  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription = "ePay Wallet has transformed how millions of users manage money, offering speed, reliability, and security for every transaction.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        {/* Mission */}
        <div className="py-10 text-center">
          <h2 className="text-4xl font-semibold">Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our mission is to empower individuals and businesses with a secure,
            easy-to-use, and inclusive financial ecosystem. At ePay, we believe
            digital payments should be accessible to everyone, everywhere.
          </p>
        </div>
        {/* Values & Principles */}
        <AboutBlock2 />

        {/* Service Story */}
        <div className="py-10 lg:py-32 grid gap-16">
          {/* Intro Section */}
          <div>
            <h2 className="text-4xl font-semibold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              ePay Wallet was born out of a simple but powerful idea: to make
              financial services accessible, fast, and trustworthy for everyone.
              In a world where many still face challenges in managing money
              digitally, we set out to create a platform that puts people first.
              From day one, our mission has been to bridge the gap between
              technology and trust, ensuring that every transaction is not just
              seamless, but secure.
            </p>
          </div>

          {/* Journey Section */}
          <div>
            <h3 className="text-2xl font-medium">The Journey</h3>
            <p className="mt-2 text-muted-foreground">
              What began as a small startup quickly grew into a reliable digital
              wallet trusted by thousands of users. Our early days were driven
              by passion, late-night brainstorming sessions, and a relentless
              focus on solving real financial problems. Over time, we expanded
              our features — from instant money transfers and mobile top-ups to
              bill payments and merchant solutions — each one designed with
              simplicity and speed in mind. Today, ePay Wallet is more than a
              payment app; it’s a financial companion that empowers people to
              take control of their money, anytime, anywhere.
            </p>
          </div>

          {/* Future Section */}
          <div>
            <h3 className="text-2xl font-medium">Looking Ahead</h3>
            <p className="mt-2 text-muted-foreground">
              Our story is still being written. As we look toward the future, we
              remain committed to building smarter, safer, and more innovative
              financial tools. We envision a world where digital payments aren’t
              just convenient but inclusive — breaking barriers for people in
              remote areas, small businesses, and communities that have been
              underserved for too long. With technology as our backbone and
              people as our purpose, ePay Wallet will continue to redefine what
              financial freedom looks like.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-10 lg:py-20 text-center">
          <h2 className="text-4xl font-semibold">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Behind ePay is a diverse team of innovators, engineers, and
            financial experts committed to building the future of digital
            payments.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/mrfMpKwn/cheerful-man-stands-arms-confidently-260nw-2446919397.webp"
                alt="CEO"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-medium">Nabil Khan</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/C3nW3Cpr/attractive-young-charming-guy-smiles-260nw-1294180975.webp"
                alt="CTO"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-medium">Amit Roy</h3>
              <p className="text-muted-foreground">Chief Technology Officer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/FkY7582G/images-4.jpg"
                alt="CFO"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-medium">Nur Alam</h3>
              <p className="text-muted-foreground">Chief Financial Officer</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-col md:flex-row md:flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl text-primary font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};
