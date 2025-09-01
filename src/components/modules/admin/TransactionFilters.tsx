/* eslint-disable @typescript-eslint/no-explicit-any */
import { AmountFilter } from "@/components/AmountFilters";
import SearchBox from "@/components/SearchBox";
import SkeletonCard from "@/components/SkeletonCard";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdminInfoQuery, useAgentInfoQuery, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useSearchParams } from "react-router";

export default function TransactionFilters() {
  const { data:user, isLoading } = useUserInfoQuery(undefined)
  const { data:agent } = useAgentInfoQuery(undefined)
  const {data:admin} = useAdminInfoQuery(undefined)
  
  
  const [searchParams, setSearchParams] = useSearchParams();
  if (isLoading) {
    return <SkeletonCard></SkeletonCard>
  }
  const loggedInData=user?.data.email||agent?.data.email||admin?.data.email
  const selectedType = searchParams.get("type") || undefined;
  const adminTypes = [
    { value: "deposit" },
    { value: "withdraw" },
    { value: "send_money" },
    { value: "cash_in" },
    { value: "cash_out" },
  ];
  const agentTypes = [{ value: "cash_in" }, { value: "cash_out" }];
  const transactionTypes=loggedInData!==agent?.data.email?adminTypes:agentTypes
  const handleTypes = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("type", value);
    setSearchParams(params);
  };
  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("type");
    setSearchParams(params);
  };
  return (
    <div className=" flex flex-col md:flex-row items-center gap-5 justify-between my-5">
      {user?.data.email || agent?.data.email ? (
        <div>
          <SearchBox></SearchBox>
        </div>
      ) : (
        <div>
          <AmountFilter></AmountFilter>
        </div>
      )}

      <div className=" flex flex-col md:flex-row  gap-2 items-center mb-1">
        <div>
          <label className="text-sm font-medium">Type</label>
          <Select
            onValueChange={handleTypes}
            value={selectedType ? selectedType : ""}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {transactionTypes?.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex  md:mt-6 ">
          <Button onClick={handleClear} variant="outline" className="">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
