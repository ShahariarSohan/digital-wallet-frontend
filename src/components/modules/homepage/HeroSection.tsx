


import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface Hero1Props {
  badge?: string;
  heading?: string;
  
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

export const HeroSection = ({
  heading = "Fast, Secure & Easy Payments",

  buttons = {
    primary: {
      text: "Read More",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://i.ibb.co.com/tT3PszK5/epay.jpg",
    alt: "e pay a digital wallet system",
  },
}: Hero1Props) => {
  return (
    <section className="py-10 md:py-20">
      <div>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Simplify your transactions with our all-in-one{" "}
              <span className="text-primary font-bold text-2xl italic">
                e pay
              </span>{" "}
              solution. Send, receive, and manage money anytime, anywhere—safe
              and hassle-free.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/about">{buttons.primary.text}</Link>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};


