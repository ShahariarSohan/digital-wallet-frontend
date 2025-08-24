import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Wallet Balance Skeleton */}
      <Card className="col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-32" />
        </CardContent>
      </Card>

      {/* Quick Actions Skeleton */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-32" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>

      {/* Recent Transactions Skeleton */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-48" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-2 last:border-none"
              >
                <div className="space-y-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
