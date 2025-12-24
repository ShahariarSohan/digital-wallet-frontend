import { Separator } from "@/components/ui/separator";
import WalletLoader from "@/components/WalletLoader";

import { useAllUserStatsQuery } from "@/redux/features/stats/stats.api";
import { Suspense } from "react";

export const CaseStudies = () => {
    const { data,isLoading} = useAllUserStatsQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });
  const userData=data?.data
  return (
    <Suspense fallback={<WalletLoader></WalletLoader>}>
      <section className="py-10 lg:py-32">
        <div className="container">
          <div className="flex flex-col gap-6 text-center">
            {isLoading ? (
              <WalletLoader></WalletLoader>
            ) : (
              <p className=" text-4xl text-primary font-bold">
                {userData?.totalUsers}+ Active Users
              </p>
            )}

            <h2 className="text-4xl font-medium md:text-5xl">
              Real experiences from trusted users
            </h2>
          </div>
          <div className="mt-20">
            <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
              {/* First case study */}
              <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
                <img
                  src="https://i.ibb.co.com/TDFhWN1f/epay2.jpg"
                  alt="placeholder"
                  className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
                />
                <div className="flex h-full flex-col justify-between gap-10">
                  <q className="sm:text-xl">
                    With ePay Wallet, sending and receiving money is instant.
                    Our customers can pay bills, recharge mobiles, and transfer
                    funds securely within seconds—no long queues, no delays.
                  </q>
                  <div className="flex items-end gap-6">
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-semibold text-primary">
                        Ahsan Rahman
                      </p>
                      <p className="text-muted-foreground">
                        Small Business Owner
                      </p>
                    </div>
                    <img
                      className="h-16 w-16"
                      src="https://i.ibb.co.com/whrm2sYm/flat-design-bookstore-logo-template-23-2149325325.jpg"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              {/* First stats */}
              <div className="flex gap-10 self-center lg:flex-col">
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium text-primary sm:text-5xl">
                    99%
                  </p>
                  <p className="font-semibold text-primary">
                    Transaction Success Rate
                  </p>
                  <p className="text-muted-foreground">
                    Reliable payments every time
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium text-primary sm:text-5xl">
                    4.5x
                  </p>
                  <p className="font-semibold text-primary">Faster Payments</p>
                  <p className="text-muted-foreground">
                    Compared to traditional banking
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-20" />

            <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
              {/* Second case study */}
              <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
                <img
                  src="https://i.ibb.co.com/r8X16Sz/epay3.jpg"
                  alt="placeholder"
                  className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
                />
                <div className="flex h-full flex-col justify-between gap-10">
                  <q className="sm:text-xl">
                    ePay Wallet made our daily transactions effortless. Whether
                    it’s paying salaries or sending refunds, everything happens
                    in just a few taps with complete transparency and security.
                  </q>
                  <div className="flex items-end gap-6">
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-semibold text-primary">
                        Nabila Karim
                      </p>
                      <p className="text-muted-foreground">
                        E-commerce Manager
                      </p>
                    </div>
                    <img
                      className="h-16 w-16"
                      src="https://i.ibb.co.com/pBQdKMVX/online-shop-logo-design-free-vector.jpg"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              {/* Second stats */}
              <div className="flex gap-10 self-center lg:flex-col">
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium text-primary sm:text-5xl">
                    3.9x
                  </p>
                  <p className="font-semibold text-primary">Business Growth</p>
                  <p className="text-muted-foreground">
                    Driven by instant payments
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-medium text-primary sm:text-5xl">
                    85%
                  </p>
                  <p className="font-semibold text-primary">
                    Reduced Cash Handling
                  </p>
                  <p className="text-muted-foreground">
                    Safe & cashless transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};


