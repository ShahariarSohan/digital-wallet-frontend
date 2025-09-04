import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function GetResetPassword() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      
      <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
        Reset password link sent
      </h2>
      <p className="mt-2 text-muted-foreground max-w-md">
     Get the reset password link from your email
      </p>
      <div className="mt-6">
        <Button asChild size="lg">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}