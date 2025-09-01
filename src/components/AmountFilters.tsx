/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router";

export const AmountFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const minAmount = searchParams.get("minAmount") || undefined;
  const maxAmount = searchParams.get("maxAmount") || undefined;
  const handleMaxAmount = (value: any) => {
    if (value.trim() !== "") {
      value = Number(value);
    }
    const params = new URLSearchParams(searchParams);
    params.set("maxAmount", value);
    setSearchParams(params);
  };
  const handleMinAmount = (value: any) => {
    if (value.trim() !== "") {
      value = Number(value);
    }
    const params = new URLSearchParams(searchParams);
    params.set("minAmount", value);
    setSearchParams(params);
  };

  const handleReset = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("minAmount");
    params.delete("maxAmount");
    setSearchParams(params);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 gap-4 items-center mt-1">
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-sm font-medium">Min Amount</label>
        <Input
          name="min"
          type="number"
          placeholder="Min"
          value={minAmount ? minAmount : ""}
          onChange={(e) => handleMinAmount(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-sm font-medium">Max Amount</label>
        <Input
          name="max"
          type="number"
          placeholder="Max"
          value={maxAmount ? maxAmount : ""}
          onChange={(e) => handleMaxAmount(e.target.value)}
        />
      </div>
      <div className="flex gap-2  mt-2 sm:mt-5">
        <Button
          variant="outline"
          onClick={handleReset}
          className=""
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
