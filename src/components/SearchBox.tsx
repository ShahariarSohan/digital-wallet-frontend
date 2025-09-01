/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { LoaderCircleIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router";
import { Button } from "./ui/button";

export default function SearchBox() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const amount = searchParams.get("amount") || undefined;

  const handleAmount = (value: any) => {
    if (value.trim() !== "") {
      value = Number(value);
    }
    const params = new URLSearchParams(searchParams);
    params.set("amount", value);
    setSearchParams(params);
  };
  useEffect(() => {
    if (amount) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  }, [amount]);
  const handleReset = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("amount");
    setSearchParams(params);
  };
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 gap-4 items-center mt-4">
      <div className="relative flex-1 w-full">
        <Input
          className="peer ps-9 pe-9 h-10 w-full"
          placeholder="Search amount"
          type="search"
          value={amount || ""}
          onChange={(e) => handleAmount(e.target.value)}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          {isLoading ? (
            <LoaderCircleIcon
              className="animate-spin"
              size={16}
              role="status"
              aria-label="Loading..."
            />
          ) : (
            <SearchIcon size={16} aria-hidden="true" />
          )}
        </div>
      </div>

      <div className="flex gap-2 w-full md:w-auto">
        <Button
          variant="outline"
          onClick={handleReset}
          className="h-10 flex-1 md:flex-none"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
