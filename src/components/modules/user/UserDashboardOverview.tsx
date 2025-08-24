/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, ArrowUpCircle, Send } from "lucide-react";
import { Link } from "react-router";

import { useRecentTransactionQuery } from "@/redux/features/transaction/transaction.api";

import { formatDate } from "@/utils/formatDate";
import SkeletonCard from "@/components/SkeletonCard";
import { useMyWalletQuery } from "@/redux/features/wallet/wallet.api";

export default function UserDashboardOverview() {
  const { data: walletData, isLoading } = useMyWalletQuery(undefined);
  const { data: recentTransactionsData } = useRecentTransactionQuery(undefined);

  if (isLoading) {
    return <SkeletonCard></SkeletonCard>;
  }
  const balance = walletData?.data?.balance;

  const recentTransactions = recentTransactionsData?.data;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Wallet Balance */}
      <Card className="col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle>Wallet Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{balance.toFixed()} tk</p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button asChild className="w-full flex items-center gap-2">
            <Link to="/user/deposit">
              <ArrowDownCircle className="h-5 w-5" /> Deposit
            </Link>
          </Button>
          <Button asChild className="w-full flex items-center gap-2">
            <Link to="/user/withdraw">
              <ArrowUpCircle className="h-5 w-5" /> Withdraw
            </Link>
          </Button>
          <Button asChild className="w-full flex items-center gap-2">
            <Link to="/user/sendmoney">
              <Send className="h-5 w-5" /> Send Money
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions?.map((tx: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-2 last:border-none"
              >
                <div>
                  <p className="font-medium capitalize">{tx.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(tx.createdAt)}
                  </p>
                </div>
                <p
                  className={`font-semibold ${
                    tx.type === "deposit"
                      ? "text-green-600"
                      : tx.type === "withdraw"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {tx.type === "withdraw" ? "-" : "+"}
                  {tx.amount} tk
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
