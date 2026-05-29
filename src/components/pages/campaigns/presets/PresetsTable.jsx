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
    label: "Presets",
    key: "presets",
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
    name: "Morning Shift",
    presets: "Sales Preset 1",
  },
  {
    campaign: "Sales Campaign",
    name: "Evening Shift",
    presets: "Sales Preset 2",
  },
  {
    campaign: "Support Campaign",
    name: "Customer Care",
    presets: "Support Preset A",
  },
  {
    campaign: "Support Campaign",
    name: "Technical Support",
    presets: "Support Preset B",
  },
  {
    campaign: "Marketing Campaign",
    name: "Lead Generation",
    presets: "Marketing Preset 1",
  },
  {
    campaign: "Marketing Campaign",
    name: "Email Campaign",
    presets: "Marketing Preset 2",
  },
  {
    campaign: "Retention Campaign",
    name: "Renewal Team",
    presets: "Retention Preset A",
  },
  {
    campaign: "Retention Campaign",
    name: "Loyalty Team",
    presets: "Retention Preset B",
  },
  {
    campaign: "Collection Campaign",
    name: "Payment Follow-up",
    presets: "Collection Preset 1",
  },
  {
    campaign: "Collection Campaign",
    name: "Recovery Team",
    presets: "Collection Preset 2",
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
