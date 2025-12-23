import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function AuthActions({
  loggedIn,
  onLogout,
}: {
  loggedIn: boolean;
  onLogout: () => void;
}) {
  return loggedIn ? (
    <div className="flex flex-col lg:flex-row gap-2">
      <Button asChild size="sm">
        <Link to="/dashboard">Dashboard</Link>
      </Button>
      <Button size="sm" onClick={onLogout}>
        Logout
      </Button>
    </div>
  ) : (
    <Button asChild size="sm">
      <Link to="/login">Login</Link>
    </Button>
  );
}