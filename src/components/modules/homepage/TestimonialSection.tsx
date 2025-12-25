import { useState, useEffect } from "react";
import { Star, Quote, User, Briefcase, ShoppingBag } from "lucide-react";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Small Business Owner",
      avatar: User,
      rating: 5,
      text: "ePay transformed how I manage my business transactions. The agent network makes cash collection seamless, and the dashboard gives me real-time insights into my finances.",
      highlight: "agent network",
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Rakib Hasan",
      role: "Freelance Developer",
      avatar: User,
      rating: 5,
      text: "As a freelancer receiving payments from clients, ePay has been a game-changer. Instant transfers, low fees, and the security features give me complete peace of mind.",
      highlight: "Instant transfers",
      icon: User,
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "Online Shopper",
      avatar: User,
      rating: 5,
      text: "Shopping online is now so much easier with ePay. Quick payments, instant confirmations, and the transaction history helps me track my spending perfectly.",
      highlight: "Quick payments",
      icon: ShoppingBag,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 my-16 bg-gradient-to-br from-primary to-secondary relative overflow-hidden rounded-lg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Star className="w-4 h-4 text-foreground fill-white" />
            <span className="text-sm font-semibold text-foreground">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by thousands of users across{" "}
            <span className="text-foreground/90 font-bold italic">Bangladesh</span>
          </h2>

          <p className="text-xl text-foreground/80">
            See what our users have to say about their{" "}
            <span className="text-foreground font-bold italic">ePay</span> experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px]">
            {testimonials.map((testimonial, idx) => {
              const Icon = testimonial.icon;
              const isActive = activeTestimonial === idx;
              const isPrev =
                activeTestimonial === (idx + 1) % testimonials.length;
              const isNext =
                (activeTestimonial + 1) % testimonials.length === idx;

              let transform = "translateX(0%) scale(1)";
              let opacity = 1;
              let zIndex = 30;

              if (isPrev) {
                transform = "translateX(-80%) scale(0.85)";
                opacity = 0.5;
                zIndex = 10;
              } else if (isNext) {
                transform = "translateX(80%) scale(0.85)";
                opacity = 0.5;
                zIndex = 10;
              } else if (!isActive) {
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={testimonial.id}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl transition-all duration-700 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                >
                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-12 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                      <Quote className="w-8 h-8 text-foreground" />
                    </div>

                    {/* Category Icon */}
                    <div className="absolute -top-6 right-12 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 mt-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-primary fill-primary"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-2xl text-black leading-relaxed mb-8 font-light">
                      "{testimonial.text}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <User className="w-8 h-8 text-foreground" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-black">
                          {testimonial.name}
                        </div>
                        <div className="text-black">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    <div className="absolute bottom-32 md:bottom-12  md:right-12">
                      <div className="px-4 py-2 bg-gradient-to-br from-primary to-secondary rounded-full text-foreground text-sm font-semibold shadow-lg">
                        ✨ {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeTestimonial === idx
                    ? "w-12 h-3 bg-white"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "50K+", label: "Transactions" },
            { value: "4.9/5", label: "User Rating" },
            { value: "99.9%", label: "Satisfaction" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
