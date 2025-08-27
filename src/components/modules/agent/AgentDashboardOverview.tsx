/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "@/utils/formatDate";
import SkeletonCard from "@/components/SkeletonCard";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import { useRecentTransactionQuery } from "@/redux/features/transaction/transaction.api";
import { useMyTransactionStatsQuery } from "@/redux/features/stats/stats.api";

export default function AgentDashboardResponsive() {
  const { data: walletData, isLoading } = useMyWalletQuery(undefined);
  const { data: recentTransactions } = useRecentTransactionQuery(undefined);
 
  const { data: myTransactionStats } = useMyTransactionStatsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  if (isLoading) {
    return <SkeletonCard></SkeletonCard>;
  }
  

  const myBalance = walletData?.data?.balance;
  const allOperations = myTransactionStats?.data?.myTransactions?.perTypes;
  const cashInTotal = allOperations?.find(
    (cashIn: any) => cashIn._id === "cash_in"
  )?.totalAmount;
  const cashOutTotal = allOperations?.find(
    (cashOut: any) => cashOut._id === "cash_out"
  )?.totalAmount;
  const recentActivity = recentTransactions?.data;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Cash-In Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-900">
              {cashInTotal?cashInTotal:0} tk
            </p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">Cash-Out Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-900">{cashOutTotal?cashOutTotal:0} tk</p>
          </CardContent>
        </Card>
      </div>

      {/* My Balance + Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Balance */}
        <Card className="col-span-1 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Wallet className="h-5 w-5" /> My Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-900">
              {myBalance.toFixed()} tk
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-around">
            <Button
              asChild
              className="flex-1 rounded-xl flex items-center justify-center gap-2 py-4"
            >
              <Link to="/agent/cashin">
                <ArrowDownCircle className="h-6 w-6" />
                Cash In
              </Link>
            </Button>
            <Button
              asChild
              className="flex-1 rounded-xl flex items-center justify-center gap-2 py-4"
            >
              <Link to="/agent/cashout">
                <ArrowUpCircle className="h-6 w-6" />
                Cash Out
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Type</th>
                  <th className="py-2">Date</th>
                  <th className="py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentActivity?.map((tx: any, index: number) => (
                  <tr key={index}>
                    <td className="capitalize">{tx.type.replace("_", " ")}</td>
                    <td>{formatDate(tx.createdAt)}</td>
                    <td
                      className={`text-right font-semibold ${
                        tx.type === "cash_in"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {tx.type === "cash_out" ? "-" : "+"}
                      {tx.amount} tk
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
