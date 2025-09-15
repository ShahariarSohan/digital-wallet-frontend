// /* eslint-disable @typescript-eslint/no-explicit-any */
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
import { role } from "@/constants/role";
import { useMyInfoQuery } from "@/redux/features/auth/auth.api";

import { useSearchParams } from "react-router";

export default function TransactionFilters() {
  const { data, isLoading } = useMyInfoQuery(undefined)

  
  
  const [searchParams, setSearchParams] = useSearchParams();
  if (isLoading) {
    return <SkeletonCard></SkeletonCard>
  }
  const loggedInRole=data?.data.role
  const selectedType = searchParams.get("type") || undefined;
  const adminTypes = [
    { value: "deposit" },
    { value: "withdraw" },
    { value: "send_money" },
    { value: "cash_in" },
    { value: "cash_out" },
  ];
  const agentTypes = [{ value: "cash_in" }, { value: "cash_out" }];
  const transactionTypes=loggedInRole!==role.agent?adminTypes:agentTypes
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
      {data?.data.email  ? (
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
