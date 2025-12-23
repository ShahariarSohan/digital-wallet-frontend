/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Loader2 } from "lucide-react";

type ActionState = {
  id: string;
  action: "approved" | "suspended";
} | null;

export default function ManageAgents() {
  const [page, setPage] = useState(1);
  const limit = 10;

  /** 🔹 Row-level loading state */
  const [actionState, setActionState] = useState<ActionState>(null);

  const { data: agentsData, isLoading: isAgentLoading } = useGetAllAgentsQuery(
    { page, limit },
    { refetchOnMountOrArgChange: true }
  );

  const [updateAgentStatus] = useUpdateAgentByAdminMutation();

  if (isAgentLoading) return <SkeletonCard />;

  const agents = agentsData?.data;
  const meta = agentsData?.meta;

  const handleChange = async (
    id: string,
    newStatus: "approved" | "suspended"
  ) => {
    try {
      setActionState({ id, action: newStatus });

      await updateAgentStatus({
        id,
        approvalStatus: newStatus,
      }).unwrap();

      toast.success("Status updated");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setActionState(null);
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
              {agents?.map((a: any) => {
                const isApproving =
                  actionState?.id === a._id &&
                  actionState?.action === "approved";

                const isSuspending =
                  actionState?.id === a._id &&
                  actionState?.action === "suspended";

                return (
                  <tr key={a._id} className="text-center">
                    <td className="p-2 border">{a.name}</td>

                    <td className="p-2 border break-words max-w-[200px]">
                      {a.email}
                    </td>

                    <td className="p-2 border capitalize">
                      {a.approvalStatus}
                    </td>

                    <td className="p-2 border flex flex-col sm:flex-row justify-center gap-2">
                      {a.approvalStatus !== "approved" && (
                        <Button
                          size="sm"
                          disabled={!!actionState}
                          onClick={() => handleChange(a._id, "approved")}
                        >
                          {isApproving ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Approving...
                            </>
                          ) : (
                            "Approve"
                          )}
                        </Button>
                      )}

                      {a.approvalStatus !== "suspended" && (
                        <Button
                          size="sm"
                          variant="destructive"
                          disabled={!!actionState}
                          onClick={() => handleChange(a._id, "suspended")}
                        >
                          {isSuspending ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Suspending...
                            </>
                          ) : (
                            "Suspend"
                          )}
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {meta?.totalPages > 1 && (
          <div className="flex justify-between items-center mt-4">
            <Button size="sm" onClick={handlePrev} disabled={meta.page === 1}>
              Previous
            </Button>

            <span>
              Page {meta.page} of {meta.totalPages}
            </span>

            <Button
              size="sm"
              onClick={handleNext}
              disabled={meta.page === meta.totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
