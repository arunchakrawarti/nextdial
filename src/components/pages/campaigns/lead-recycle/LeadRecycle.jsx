"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const LeadRecycle = () => {
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
      label: "Lead Recycles",
      key: "lead recycles",
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
      leadRecycles: "3 DAYS - 10:00 AM",
    },
    {
      campaign: "Sales Campaign",
      name: "Not Interested",
      leadRecycles: "5 DAYS - 11:30 AM",
    },
    {
      campaign: "Support Campaign",
      name: "Call Back",
      leadRecycles: "1 DAY - 09:00 AM",
    },
    {
      campaign: "Support Campaign",
      name: "No Answer",
      leadRecycles: "2 DAYS - 02:00 PM",
    },
    {
      campaign: "Marketing Campaign",
      name: "Lead Generated",
      leadRecycles: "7 DAYS - 10:30 AM",
    },
    {
      campaign: "Marketing Campaign",
      name: "Converted",
      leadRecycles: "15 DAYS - 01:00 PM",
    },
    {
      campaign: "Retention Campaign",
      name: "Renewed",
      leadRecycles: "30 DAYS - 11:00 AM",
    },
    {
      campaign: "Retention Campaign",
      name: "Expired",
      leadRecycles: "45 DAYS - 03:30 PM",
    },
    {
      campaign: "Collection Campaign",
      name: "Paid",
      leadRecycles: "60 DAYS - 12:00 PM",
    },
    {
      campaign: "Collection Campaign",
      name: "Pending",
      leadRecycles: "90 DAYS - 04:00 PM",
    },
  ];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="heading font-lexend">
              Campaign Lead Recycle Listings
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

export default LeadRecycle;
