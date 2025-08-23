import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-primary sm:text-9xl">404</h1>
      <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
        Unauthorized Access
      </h2>
      <p className="mt-2 text-muted-foreground max-w-md">
        Sorry, you don’t have permission to view this page. Please log in with
        the correct account or go back to the homepage.
      </p>
      <div className="mt-6">
        <Button asChild size="lg">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}