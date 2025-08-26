"use client";

import { useState } from "react";
import SkeletonCard from "@/components/SkeletonCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  useGetAllAgentsQuery,
  useUpdateAgentByAdminMutation,
} from "@/redux/features/admin/admin.api";
import { toast } from "sonner";

export default function ManageAgents() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data: agentsData, isLoading } = useGetAllAgentsQuery(
    { page, limit },
    { refetchOnMountOrArgChange: true }
  );
  const [updateAgentStatus] = useUpdateAgentByAdminMutation();

  if (isLoading) return <SkeletonCard />;

  const agents = agentsData?.data;
  const meta = agentsData?.meta;

  const handleChange = async (id: string, newStatus: string) => {
    try {
      const res = await updateAgentStatus({
        id,
        approvalStatus: newStatus,
      }).unwrap();
      toast.success("Status updated");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handlePrev = () => {
    if (meta.page > 1) setPage(meta.page - 1);
  };

  const handleNext = () => {
    if (meta.page < meta.totalPages) setPage(meta.page + 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Agents</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Scrollable table */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border text-sm sm:text-base">
            <thead>
              <tr>
                <th className="p-2 border text-left">Name</th>
                <th className="p-2 border text-left">Email</th>
                <th className="p-2 border text-left">Status</th>
                <th className="p-2 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {agents?.map((a: any) => (
                <tr key={a._id} className="text-center">
                  <td className="p-2 border">{a.name}</td>
                  <td className="p-2 border break-words max-w-[200px]">
                    {a.email}
                  </td>
                  <td className="p-2 border capitalize">{a.approvalStatus}</td>
                  <td className="p-2 border flex flex-col sm:flex-row justify-center gap-2">
                    {a.approvalStatus !== "approved" && (
                      <Button
                        size="sm"
                        onClick={() => handleChange(a._id, "approved")}
                      >
                        Approve
                      </Button>
                    )}
                    {a.approvalStatus !== "suspended" && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleChange(a._id, "suspended")}
                      >
                        Suspend
                      </Button>
                    )}
                  </td>
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
  );
}
