/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggle";
import { Link, useNavigate } from "react-router";

import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";
import {
  authApi,
  useLogoutMutation,
  useMyInfoQuery,
} from "@/redux/features/auth/auth.api";
import AuthActions from "@/lib/authActions";
import { Menu } from "lucide-react";

/* ------------------ NAV LINKS ------------------ */
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

/* ------------------ NAVBAR ------------------ */
export default function Navbar() {
  const { data } = useMyInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loggedIn = Boolean(data?.data?.email);

  const handleLogout = async () => {
    const res = await logout(undefined).unwrap();
    dispatch(authApi.util.resetApiState());

    if (res.success) {
      navigate("/login");
      toast.success("Logged out");
    }
  };

  return (
    <header className="container mx-auto px-4">
      {/* 
        lg+: 3-column grid → left / center / right
        <lg: flex → logo left, menu right
      */}
      <div className="flex h-16 items-center justify-between lg:grid lg:grid-cols-3">
        {/* ================= LEFT ================= */}
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-xl font-bold italic">Pay</h1>
        </div>

        {/* ================= CENTER (DESKTOP) ================= */}
        <NavigationMenu className="hidden lg:flex justify-center">
          <NavigationMenuList className="gap-4">
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  <Link to={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center justify-end gap-2">
          <ModeToggle />

          {/* Desktop auth buttons */}
          <div className="hidden lg:block">
            <AuthActions loggedIn={loggedIn} onLogout={handleLogout} />
          </div>

          {/* Mobile / Tablet Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-2xl"
              >
                <Menu></Menu>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-52 p-3">
              <nav className="flex flex-col gap-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-3">
                  <AuthActions loggedIn={loggedIn} onLogout={handleLogout} />
                </div>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
