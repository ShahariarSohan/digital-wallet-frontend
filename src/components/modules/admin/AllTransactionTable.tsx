/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import TransactionFilters from "./TransactionFilters";
import { useSearchParams } from "react-router";
// Your RTK Query

export default function TransactionList() {
  const [searchParams]=useSearchParams()
  const [page, setPage] = useState(1);
  const limit = 10;
  const type = searchParams.get("type")
   const minAmount = searchParams.get("minAmount") 
   const maxAmount = searchParams.get("maxAmount") 
  const { data: transactionsData, isLoading } = useAllTransactionsQuery({
    page,
    limit,
    type,
    minAmount,
    maxAmount
  });

  if (isLoading) return <SkeletonCard />;

  const transactions = transactionsData?.data;
  const meta = transactionsData?.meta;

  const handlePrev = () => {
    if (meta.page > 1) setPage(meta.page - 1);
  };

  const handleNext = () => {
    if (meta.page < meta.totalPages) setPage(meta.page + 1);
  };

  // Function to format date as "24 Aug 2025"
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      <TransactionFilters></TransactionFilters>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full border text-sm sm:text-base">
              <thead>
                <tr>
                  <th className="p-2 border text-left">ID</th>
                  <th className="p-2 border text-left">Type</th>
                  <th className="p-2 border text-left">Amount</th>
                  <th className="p-2 border text-left">Status</th>
                  <th className="p-2 border text-left">Commission</th>
                  <th className="p-2 border text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions?.map((t: any) => (
                  <tr key={t._id} className="text-center">
                    <td className="p-2 border break-words max-w-[150px]">
                      {t._id}
                    </td>
                    <td className="p-2 border capitalize">{t.type}</td>
                    <td className="p-2 border">{t.amount}</td>
                    <td className="p-2 border capitalize">{t.status}</td>
                    <td className="p-2 border">
                      {t.commission ? t.commission : "N/A"}
                    </td>
                    <td className="p-2 border">{formatDate(t.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {meta?.totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <Button onClick={handlePrev} disabled={meta.page === 1} size="sm">
                Previous
              </Button>
              <span>
                Page {meta.page} of {meta.totalPages}
              </span>
              <Button
                onClick={handleNext}
                disabled={meta.page === meta.totalPages}
                size="sm"
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
