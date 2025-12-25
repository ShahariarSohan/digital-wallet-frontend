


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
      url: "/about",
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
        <div className="flex flex-col-reverse items-center  justify-center  gap-8 lg:gap-36 lg:flex-row">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Simplify your transactions with our all-in-one{" "}
              <span className="text-primary font-bold text-2xl italic">
                ePay
              </span>{" "}
              wallet. Send, receive, and manage money anytime, anywhere—safe
              and hassle-free.
            </p>
            <div className="flex w-full flex-col justify-center items-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-1/2 md:w-auto text-foreground">
                  <Link id={`read-more`} to={buttons.primary.url}>{buttons.primary.text}</Link>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-3/4 lg:1/4  rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};


