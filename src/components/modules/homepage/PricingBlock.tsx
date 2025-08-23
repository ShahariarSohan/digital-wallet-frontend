"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export const PricingBlock = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  const handlePurchase = () => {
    toast.success("Successfully purchased your plan")
  }
  return (
    <section className="py-10 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            <span className="text-primary italic">ePay</span> Wallet Plans
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-muted-foreground max-w-3xl lg:text-xl">
              Choose the plan that fits your lifestyle. From personal use to
              growing your business, ePay Wallet makes transactions seamless,
              secure, and rewarding.
            </p>
            <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="monthly"
                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
                  >
                    Monthly
                  </Label>
                </div>
                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                  <RadioGroupItem
                    value="annually"
                    id="annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="annually"
                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                  >
                    Yearly
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {/* Basic Plan */}
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit bg-slate-400">BASIC</Badge>
              <span className="text-4xl font-medium text-primary">$0</span>
              <p className="text-muted-foreground">Forever free</p>
              <Separator className="my-6" />
              <div className="flex flex-col justify-between gap-20">
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Send & receive money instantly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Pay utility bills & mobile recharge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Basic fraud protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>No hidden fees</span>
                  </li>
                </ul>
                <Button
                  onClick={() => handlePurchase()}
                  className="w-full mt-6"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit bg-slate-400">PRO</Badge>
              {isAnnually ? (
                <>
                  <span className="text-4xl font-medium text-primary">$99</span>
                  <p className="text-muted-foreground">Per year</p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-medium text-primary">$10</span>
                  <p className="text-muted-foreground">Per month</p>
                </>
              )}
              <Separator className="my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Everything in BASIC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Higher transfer limits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Exclusive cashback offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Priority customer support</span>
                  </li>
                </ul>
                <Button onClick={() => handlePurchase()} className="w-full">
                  Upgrade to Pro
                </Button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-muted flex w-full flex-col rounded-lg border p-6 text-left">
              <Badge className="mb-8 block w-fit bg-slate-400">BUSINESS</Badge>
              {isAnnually ? (
                <>
                  <span className="text-4xl font-medium text-primary">
                    $249
                  </span>
                  <p className="text-muted-foreground">Per year</p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-medium text-primary">$25</span>
                  <p className="text-muted-foreground">Per month</p>
                </>
              )}
              <Separator className="my-6" />
              <div className="flex h-full flex-col justify-between gap-20">
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Everything in PRO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>API access for integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Advanced fraud monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4" />
                    <span>Unlimited business transactions</span>
                  </li>
                </ul>
                <Button onClick={() => handlePurchase()} className="w-full">
                  Go Business
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
