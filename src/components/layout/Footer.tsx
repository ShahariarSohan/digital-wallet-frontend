import Logo from "@/assets/icons/Logo";
import {
  Mail,
  Phone,
  Globe,
  MessageCircle,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router";

// Import your Logo component
// import Logo from "@/assets/icons/Logo";

// Temporary Logo placeholder - replace with your actual Logo import

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-12 px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Logo />
              <h2 className="text-2xl font-bold italic">ePay</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Simplify your transactions with our secure, fast, and reliable
              payment solution.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sohanshahariar4@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">sohanshahariar4@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801622143630"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+880 1622 143630</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801622143630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/shahariarsohan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sohanshahariar4@gmail.com"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://shahariarsohan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://m.me/mdshahariar.sohan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Messenger"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary font-semibold italic">ePay</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
