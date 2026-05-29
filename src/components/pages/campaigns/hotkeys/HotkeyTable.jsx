"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const HotkeyTable = () => {
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
      label: "Hotkeys",
      key: "hotkeys",
    },
    
    {
      label: "Action",
      key: "action",
      render: (row) => (
        <Button href="/campaigns/campaigns-main/campaign-id" variant="ghost">
          <Pencil size={16} />
        </Button>
      ),
    },
  ];

 const data = [
  {
    campaign: "Sales Campaign",
    name: "Interested",
    hotkeys: "1",
  },
  {
    campaign: "Sales Campaign",
    name: "Not Interested",
    hotkeys: "2",
  },
  {
    campaign: "Support Campaign",
    name: "Call Back",
    hotkeys: "3",
  },
  {
    campaign: "Support Campaign",
    name: "No Answer",
    hotkeys: "4",
  },
  {
    campaign: "Marketing Campaign",
    name: "Lead Generated",
    hotkeys: "5",
  },
  {
    campaign: "Marketing Campaign",
    name: "Converted",
    hotkeys: "6",
  },
  {
    campaign: "Retention Campaign",
    name: "Renewed",
    hotkeys: "7",
  },
  {
    campaign: "Retention Campaign",
    name: "Expired",
    hotkeys: "8",
  },
  {
    campaign: "Collection Campaign",
    name: "Paid",
    hotkeys: "9",
  },
  {
    campaign: "Collection Campaign",
    name: "Pending",
    hotkeys: "0",
  },
];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="heading font-lexend">
             Custom Campaign Hotkeys Listing
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

export default HotkeyTable;
