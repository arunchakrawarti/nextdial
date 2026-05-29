"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const ListMixTable = () => {
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
    label: "List Mix",
    key: "list-mix",
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
    name: "High Priority Leads",
    listMix: "50%",
  },
  {
    campaign: "Sales Campaign",
    name: "Warm Leads",
    listMix: "30%",
  },
  {
    campaign: "Support Campaign",
    name: "Customer Follow Up",
    listMix: "40%",
  },
  {
    campaign: "Support Campaign",
    name: "Pending Tickets",
    listMix: "60%",
  },
  {
    campaign: "Marketing Campaign",
    name: "New Prospects",
    listMix: "25%",
  },
  {
    campaign: "Marketing Campaign",
    name: "Qualified Leads",
    listMix: "75%",
  },
  {
    campaign: "Retention Campaign",
    name: "Renewal Customers",
    listMix: "45%",
  },
  {
    campaign: "Retention Campaign",
    name: "Inactive Customers",
    listMix: "55%",
  },
  {
    campaign: "Collection Campaign",
    name: "Paid Accounts",
    listMix: "35%",
  },
  {
    campaign: "Collection Campaign",
    name: "Pending Accounts",
    listMix: "65%",
  },
];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="heading font-lexend">
              Camapaign Lead Auto-Alt Dial Listings
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

export default ListMixTable;
