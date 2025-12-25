import { Button } from "@/components/ui/button";
import type { TRole } from "@/types/interface";
import { Link } from "react-router";
import { getRedirectPath } from "./getRedirectPath";


export default function AuthActions({
  loggedInRole,
  onLogout,
}: {
  loggedInRole: TRole;
  onLogout: () => void;
}) {
  const to = getRedirectPath(loggedInRole);

  return loggedInRole ? (
    <div className="flex flex-col lg:flex-row gap-2 ">
      <Button asChild size="sm" className="text-foreground">
        <Link to={to}>Dashboard</Link>
      </Button>
      <Button size="sm" className="text-foreground" onClick={onLogout}>
        Logout
      </Button>
    </div>
  ) : (
    <Button asChild size="sm" className="text-foreground">
      <Link to="/login">Login</Link>
    </Button>
  );
}
