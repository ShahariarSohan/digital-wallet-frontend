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
import { Link } from "react-router";

import { useAppDispatch } from "@/redux/hook";
import { role } from "@/constants/role";
import { toast } from "sonner";
import { authApi, useAdminInfoQuery, useAgentInfoQuery, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" ,role:"public" },
  { href: "/features", label: "Features" ,role:"public" },
  { href: "/about", label: "About", role:"public" },
  { href: "/contact", label: "Contact", role:"public" },
  { href: "/faq", label: "FAQ", role:"public" },
  { href: "/admin", label: "Dashboard", role:role.admin },
  { href: "/agent", label: "Dashboard", role:role.agent },
  { href: "/user", label: "Dashboard", role:role.user },
];

export default function Navbar() {
  const { data: agentData } = useAgentInfoQuery(undefined);
  const { data: userData } = useUserInfoQuery(undefined);
  const { data: adminData } = useAdminInfoQuery(undefined);
  const loggedInEmail=agentData?.data?.email || userData?.data?.email || adminData?.data?.email;
  const loggedInRole =agentData?.data?.role || userData?.data?.role || adminData?.data?.role;
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const handleLogout = async() => {
    await logout(undefined).unwrap();
    dispatch(authApi.util.resetApiState());
    toast.success("Logged Out")
  };

  return (
    <header className=" px-4 container mx-auto">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <div key={index}>
                      {link.role === "public" && (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            asChild
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                      {link.role === loggedInRole && (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            asChild
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                          >
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </div>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6 text-primary">
            <div className="flex items-center gap-1 text-primary">
              {" "}
              <Logo></Logo> <h1 className=" text-xl font-bold italic">Pay</h1>
            </div>

            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <div key={index}>
                    {link.role === "public" && (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                    {link.role === loggedInRole && (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </div>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {loggedInEmail ? (
            <Button
              onClick={handleLogout}
              size="sm"
              className="text-sm "
            >
              Logout
            </Button>
          ) : (
            <Button asChild size="sm" className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </header>
  );
}
