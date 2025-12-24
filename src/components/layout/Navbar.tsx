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
import { Link, useNavigate, useLocation } from "react-router";

import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";
import {
  authApi,
  useLogoutMutation,
  useMyInfoQuery,
} from "@/redux/features/auth/auth.api";
import AuthActions from "@/utils/AuthActions";

import Menu4 from "@/assets/icons/Menu";

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
  const location = useLocation(); // ✅ get current path

  const loggedInRole = data?.data?.role;

  const handleLogout = async () => {
    const res = await logout(undefined).unwrap();
    dispatch(authApi.util.resetApiState());

    if (res.success) {
      navigate("/login");
      toast.success("Logged out");
    }
  };

  return (
    <header className="container mx-auto px-4 sticky top-0 z-50 bg-background">
      {/* lg+: 3-column grid → left / center / right */}
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
                  className={`font-medium ${
                    location.pathname === link.href
                      ? "dark:bg-card bg-gray-100"
                      : "text-muted-foreground hover:text-primary"
                  }`}
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
            <AuthActions loggedInRole={loggedInRole} onLogout={handleLogout} />
          </div>

          {/* Mobile / Tablet Menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden p-2">
                <Menu4 />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-52 p-3">
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium block px-2 py-1 rounded-sm ${
                      location.pathname === link.href
                        ? "bg-card"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-3">
                  <AuthActions
                    loggedInRole={loggedInRole}
                    onLogout={handleLogout}
                  />
                </div>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
