

import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "react-router";





export default function NotFound() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/20 overflow-hidden">
        <div className="container relative z-10 flex flex-col items-center justify-center gap-10 px-4 text-center">
          {/* 404 Circle */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-destructive/10 animate-ping" />
            <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-muted-foreground/20 backdrop-blur-sm">
              <h1 className="text-7xl sm:text-8xl font-extrabold text-primary tracking-tight">
                404
              </h1>
            </div>
            <div className="absolute -top-4 -right-4 rounded-full bg-destructive p-3 text-destructive-foreground shadow-xl animate-bounce">
              <AlertCircle className="h-7 w-7" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Page Not Found
            </h2>
            <p className="max-w-md text-lg text-muted-foreground">
              The page you're looking for doesn’t exist. It may have been moved
              or deleted.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
