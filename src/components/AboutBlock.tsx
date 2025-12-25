import { AboutBlock2 } from "./AboutBlock2";

interface AboutProps {
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
const members = [
  {
    name: "Nabil Khan",
    role: "Founder & CEO",
    img: "https://i.ibb.co.com/mrfMpKwn/cheerful-man-stands-arms-confidently-260nw-2446919397.webp",
  },
  {
    name: "Amit Roy",
    role: "Chief Technology Officer",
    img: "https://i.ibb.co.com/C3nW3Cpr/attractive-young-charming-guy-smiles-260nw-1294180975.webp",
  },
  {
    name: "Nur Alam",
    role: "Chief Financial Officer",
    img: "https://i.ibb.co.com/FkY7582G/images-4.jpg",
  },
];
export const AboutBlock = ({
  achievementsTitle = "Trusted by Millions",
  achievementsDescription = `ePay Wallet continues to grow as a secure, reliable, and user-centric digital financial platform.`,
  achievements = defaultAchievements,
}: AboutProps) => {
  return (
    <section className="py-14 lg:py-24">
      <div className="container space-y-24">
        {/* Company Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold">
            About <span className="text-primary italic">ePay</span> Wallet
          </h1>
          <p className="mt-6 text-muted-foreground">
            <span className="text-primary italic text-2xl font-bold">ePay</span> Wallet is
            a modern digital payment platform built to simplify financial
            transactions for individuals and businesses. We focus on speed,
            security, and accessibility — enabling people to manage money
            confidently in an increasingly digital world.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
          <div>
            <h3 className="text-xl font-medium">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              To empower users with seamless, secure, and inclusive digital
              financial solutions that fit into everyday life.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">
              To become a trusted digital financial ecosystem that removes
              barriers and enables financial freedom for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Our Values</h3>
            <p className="mt-3 text-muted-foreground">
              Trust, simplicity, innovation, and customer-first thinking guide
              every decision we make.
            </p>
          </div>
        </div>

        {/* Core Principles / Values Block */}
        <AboutBlock2 />

        {/* Product Story */}
        <div className="grid gap-16 container mx-auto">
          <div>
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              <span className="text-primary italic text-2xl font-bold">ePay</span> Wallet was
              created to solve a simple but critical problem — managing money
              digitally should not be complicated or exclusive. We started with
              a clear goal: build a platform that anyone can use, whether for
              sending money, paying bills, or running a business.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium">How We Evolved</h3>
            <p className="mt-3 text-muted-foreground">
              From a small idea to a growing fintech platform, our journey has
              been driven by real user needs. Each feature we launch is designed
              to be fast, intuitive, and reliable — ensuring our users always
              stay in control of their finances.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium">What’s Next</h3>
            <p className="mt-3 text-muted-foreground">
              We are continuously expanding our services, strengthening
              security, and exploring smarter financial tools. Our roadmap is
              focused on long-term trust, scalability, and innovation.
            </p>
          </div>
        </div>

        {/* Impact / Achievements */}
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold">{achievementsTitle}</h2>
            <p className="mt-3 text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-center">
            {achievements.map((item) => (
              <div key={item.label} className="space-y-2">
                <span className="text-4xl md:text-5xl font-semibold text-primary">
                  {item.value}
                </span>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 hidden md:block bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Leadership Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our leadership team brings together experience in technology,
            finance, and product innovation.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {members.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
