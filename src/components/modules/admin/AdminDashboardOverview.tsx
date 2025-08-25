"use client";

import SkeletonCard from "@/components/SkeletonCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useAllAgentStatsQuery,
  useAllTransactionStatsQuery,
  useAllUserStatsQuery,
} from "@/redux/features/stats/stats.api";
import { Users, UserCheck, CreditCard, DollarSign } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  Legend,
} from "recharts";



// Colors
const colors = {
  totalCounts: "#3b82f6", // Blue
  totalAmount: "#10b981", // Green
};

export default function AdminDashboardOverview() {
  const { data: allTransactionStats, isLoading } =
    useAllTransactionStatsQuery(undefined,{refetchOnMountOrArgChange: true});
  const { data: allUserStats } = useAllUserStatsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { data: allAgentStats } = useAllAgentStatsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <SkeletonCard></SkeletonCard>;
  }
  const transactionStatsData = allTransactionStats?.data;
  const transactionData=allTransactionStats?.data?.allOperations
  const stats = [
    {
      label: "Total Users",
      value: allUserStats?.data?.totalUsers,
      icon: Users,
    },
    {
      label: "Agents",
      value: allAgentStats?.data?.totalAgents,
      icon: UserCheck,
    },
    {
      label: "Transactions",
      value: transactionStatsData?.totalTransactions,
      icon: CreditCard,
    },
    {
      label: "Volume",
      value: transactionStatsData?.totalTransactionAmount,
      icon: DollarSign,
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Stats Cards */}
      {stats.map((item, i) => (
        <Card key={i} className="rounded-2xl shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
            <item.icon className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(item.value.toFixed())} </div>
          </CardContent>
        </Card>
      ))}

      {/* Area Chart */}
      <Card className="col-span-1 md:col-span-2 lg:col-span-4 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Transactions Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={transactionData}>
              <defs>
                <linearGradient id="colorCounts" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.totalCounts}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.totalCounts}
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.totalAmount}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.totalAmount}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <XAxis dataKey="_id" />
              <YAxis />
              <ReTooltip />
              <Legend />

              <Area
                type="monotone"
                dataKey="totalCounts"
                stroke={colors.totalCounts}
                fillOpacity={1}
                fill="url(#colorCounts)"
                name="Total Counts"
              />
              <Area
                type="monotone"
                dataKey="totalAmount"
                stroke={colors.totalAmount}
                fillOpacity={1}
                fill="url(#colorAmount)"
                name="Total Amount"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
