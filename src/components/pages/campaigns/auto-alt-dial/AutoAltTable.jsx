"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const AutoAltTable = () => {
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
    label: "Auto Alt Dial",
    key: "autoAltDial",
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
    name: "Primary Contact",
    autoAltDial: "Enabled",
  },
  {
    campaign: "Sales Campaign",
    name: "Secondary Contact",
    autoAltDial: "Disabled",
  },
  {
    campaign: "Support Campaign",
    name: "Customer Mobile",
    autoAltDial: "Enabled",
  },
  {
    campaign: "Support Campaign",
    name: "Office Number",
    autoAltDial: "Enabled",
  },
  {
    campaign: "Marketing Campaign",
    name: "Alternate Mobile",
    autoAltDial: "Disabled",
  },
  {
    campaign: "Marketing Campaign",
    name: "Work Number",
    autoAltDial: "Enabled",
  },
  {
    campaign: "Retention Campaign",
    name: "Home Number",
    autoAltDial: "Enabled",
  },
  {
    campaign: "Retention Campaign",
    name: "Emergency Contact",
    autoAltDial: "Disabled",
  },
  {
    campaign: "Collection Campaign",
    name: "Reference Number",
    autoAltDial: "Enabled",
  },
  {
    campaign: "Collection Campaign",
    name: "Alternate Contact",
    autoAltDial: "Enabled",
  },
];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="font-lexend font-semibold text-[20px] sm:text-[20px] lg:text-[24px]  text-dark">
              CAMPAIGN LEAD AUTO-ALT DIAL LISTINGS
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

export default AutoAltTable;
