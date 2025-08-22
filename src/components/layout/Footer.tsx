import Logo from "@/assets/icons/Logo";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-foreground">
          <div className="flex justify-center text-teal-600">
            <div className="flex items-center gap-1 text-primary">
              {" "}
              <Logo></Logo> <h1 className="text-xl font-bold italic">Pay</h1>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground">
            Simplify your transactions with our all-in-one solution. Send, receive, and manage money anytime, anywhere—safe and
            hassle-free.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-2 md:gap-8 ">
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Secure{" "}
            </li>
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Fast{" "}
            </li>
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Reliable{" "}
            </li>
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Powered by{" "}
              <span className="text-primary font-bold  italic">
                {" "}
                ePay
              </span>{" "}
            </li>
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Simplifying payments{" "}
            </li>{" "}
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Trusted transactions{" "}
            </li>{" "}
            <li className="text-muted-foreground transition hover:text-muted-foreground">
              {" "}
              Making payments effortless{" "}
            </li>
          </ul>
          <ul className="text-center mt-8 text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-bold  italic"> ePay</span>. All
            rights reserved.
          </ul>
        </div>
      </footer>
    </div>
  );
}
