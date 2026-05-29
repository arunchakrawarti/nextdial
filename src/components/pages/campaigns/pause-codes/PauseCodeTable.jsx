"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const PauseCodeTable = () => {
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
    label: "Pause Code",
    key: "pause-code",
  },
  {
    label: "Action",
    key: "action",
    render: () => (
      <Button
        href="/campaigns/campaigns-main/campaign-id"
        variant="ghost"
      >
        <Pencil size={16} />
      </Button>
    ),
  },
];

const data = [
  {
    campaign: "Sales Campaign",
    name: "Break",
    pauseCode: "BRK",
  },
  {
    campaign: "Sales Campaign",
    name: "Lunch",
    pauseCode: "LUN",
  },
  {
    campaign: "Support Campaign",
    name: "Meeting",
    pauseCode: "MTG",
  },
  {
    campaign: "Support Campaign",
    name: "Training",
    pauseCode: "TRN",
  },
  {
    campaign: "Marketing Campaign",
    name: "Tea Break",
    pauseCode: "TEA",
  },
  {
    campaign: "Marketing Campaign",
    name: "Follow Up",
    pauseCode: "FUP",
  },
  {
    campaign: "Retention Campaign",
    name: "Coaching",
    pauseCode: "COA",
  },
  {
    campaign: "Retention Campaign",
    name: "System Issue",
    pauseCode: "SYS",
  },
  {
    campaign: "Collection Campaign",
    name: "Documentation",
    pauseCode: "DOC",
  },
  {
    campaign: "Collection Campaign",
    name: "Personal",
    pauseCode: "PER",
  },
];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="heading font-lexend">
              Campaign Lead Auto-Alt Dial Listings
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

export default PauseCodeTable;
