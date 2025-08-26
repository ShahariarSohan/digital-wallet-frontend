"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  useUpdateUserByAdminMutation,
  useGetAllUsersQuery,
} from "@/redux/features/admin/admin.api";
import SkeletonCard from "@/components/SkeletonCard";
import { toast } from "sonner";

export default function ManageUsers() {
  const [page, setPage] = useState(1); // current page
  const limit = 10; // items per page

  const { data: usersData, isLoading } = useGetAllUsersQuery({ page, limit },{refetchOnMountOrArgChange:true});
  const [updateUserStatus] = useUpdateUserByAdminMutation();

  const [selectedUser, setSelectedUser] = useState<any>(null);

  if (isLoading) return <SkeletonCard />;
 
  const users = usersData?.data;
  const meta = usersData?.meta;
console.log(users)
console.log(meta)
  const handleToggle = async (id: string, status: string) => {
    try {
      const res = await updateUserStatus({id,status: status === "unblock" ? "block" : "unblock"}).unwrap();
      console.log(res);
      toast.success("Status changed");
    } catch (err) {
      console.log(err);
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Manage Users</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Responsive scrollable table */}
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
              {users?.map((u: any) => (
                <tr key={u._id}>
                  <td className="p-2 border">{u.name}</td>
                  <td className="p-2 border break-words max-w-[200px]">
                    {u.email}
                  </td>
                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        u.status === "unblock" ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="p-2 border">
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={
                          u.status === "unblock" ? "destructive" : "default"
                        }
                        onClick={() => handleToggle(u._id, u.status)}
                        size="sm"
                      >
                        {u.status === "unblock" ? "Block" : "Unblock"}
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedUser(u)}
                          >
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>User Details</DialogTitle>
                          </DialogHeader>
                          {selectedUser && (
                            <div className="space-y-2">
                              <p>
                                <strong>Name:</strong> {selectedUser.name}
                              </p>
                              <p>
                                <strong>Email:</strong> {selectedUser.email}
                              </p>
                              <p>
                                <strong>Status:</strong> {selectedUser.status}
                              </p>
                              {selectedUser.role && (
                                <p>
                                  <strong>Role:</strong> {selectedUser.role}
                                </p>
                              )}
                              {selectedUser.createdAt && (
                                <p>
                                  <strong>Joined:</strong>{" "}
                                  {new Date(
                                    selectedUser.createdAt
                                  ).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
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
