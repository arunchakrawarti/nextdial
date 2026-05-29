"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const AcCidTable = () => {
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
      label: "Custom Cid",
      key: "customCid",
    },
    {
      label: "Action",
      key: "action",
      render: () => (
        <Button href="/campaigns/campaigns-main/campaign-id" variant="ghost">
          <Pencil size={16} />
        </Button>
      ),
    },
  ];

  const data = [
    {
      campaign: "Sales Campaign",
      name: "Morning Shift",
      customCid: "+1 212-555-1001",
    },
    {
      campaign: "Sales Campaign",
      name: "Evening Shift",
      customCid: "+1 212-555-1002",
    },
    {
      campaign: "Support Campaign",
      name: "Customer Care",
      customCid: "+1 310-555-2001",
    },
    {
      campaign: "Support Campaign",
      name: "Technical Support",
      customCid: "+1 310-555-2002",
    },
    {
      campaign: "Marketing Campaign",
      name: "Lead Generation",
      customCid: "+1 646-555-3001",
    },
    {
      campaign: "Marketing Campaign",
      name: "Email Campaign",
      customCid: "+1 646-555-3002",
    },
    {
      campaign: "Retention Campaign",
      name: "Renewal Team",
      customCid: "+1 718-555-4001",
    },
    {
      campaign: "Retention Campaign",
      name: "Loyalty Team",
      customCid: "+1 718-555-4002",
    },
    {
      campaign: "Collection Campaign",
      name: "Payment Follow-up",
      customCid: "+1 917-555-5001",
    },
    {
      campaign: "Collection Campaign",
      name: "Recovery Team",
      customCid: "+1 917-555-5002",
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

export default AcCidTable;
