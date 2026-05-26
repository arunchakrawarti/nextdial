"use client";
import SearchBox from "@/components/atoms/SearchBox";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const Statuses = () => {
  const columns = [
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Statuses",
      key: "statuses",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },
    {
      label: "Action",
      key: "action",
      render: (row) => (
        <Button variant="ghost">
          <Pencil size={16} />
        </Button>
      ),
    },
  ];

  const data = [
    {
      campaign: "Sales Campaign",
      name: "Interested",
      statuses: "Active",
    },
    {
      campaign: "Sales Campaign",
      name: "Not Interested",
      statuses: "Inactive",
    },
    {
      campaign: "Support Campaign",
      name: "Call Back",
      statuses: "Active",
    },
    {
      campaign: "Support Campaign",
      name: "No Answer",
      statuses: "Active",
    },
    {
      campaign: "Marketing Campaign",
      name: "Lead Generated",
      statuses: "Active",
    },
    {
      campaign: "Marketing Campaign",
      name: "Converted",
      statuses: "Inactive",
    },
    {
      campaign: "Retention Campaign",
      name: "Renewed",
      statuses: "Active",
    },
    {
      campaign: "Retention Campaign",
      name: "Expired",
      statuses: "Inactive",
    },
    {
      campaign: "Collection Campaign",
      name: "Paid",
      statuses: "Active",
    },
    {
      campaign: "Collection Campaign",
      name: "Pending",
      statuses: "Inactive",
    },
  ];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="font-lexend font-semibold text-[20px] sm:text-[20px] lg:text-[24px]  text-dark">
             CUSTOM CAMPAIGN STATUSES LISTING
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <BasicTable
          columns={columns}
          data={data}
          pagination={true}
          pageSize={10}
          total={data.length}
          wrapperClassName="border-none"
        />
      </div>
    </div>
  );
};

export default Statuses;
