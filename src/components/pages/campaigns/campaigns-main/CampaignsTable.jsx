"use client";
import SearchBox from "@/components/atoms/SearchBox";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil } from "lucide-react";
import CampaignTab from "./CampaignTab";

const CampaignsTable = () => {
  const columns = [
    {
      label: "Campaign Id",
      key: "campaign-id",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Dial Method",
      key: "dial-method",
    },
    {
      label: "Level Order",
      key: "level-order",
    },
    {
      label: "Dial Statuses",
      key: "dial-statuses",
    },
    {
      label: "DP",
      key: "Dp",
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
      "campaign-id": "CMP001",
      name: "Sales Campaign",
      active: "Yes",
      group: "Sales Team",
      "dial-method": "Predictive",
      "level-order": "1",
      "dial-statuses": "Active",
      Dp: "10",
    },
    {
      "campaign-id": "CMP002",
      name: "Support Campaign",
      active: "No",
      group: "Support Team",
      "dial-method": "Manual",
      "level-order": "2",
      "dial-statuses": "Paused",
      Dp: "15",
    },
    {
      "campaign-id": "CMP003",
      name: "Marketing Campaign",
      active: "Yes",
      group: "Marketing Team",
      "dial-method": "Progressive",
      "level-order": "3",
      "dial-statuses": "Running",
      Dp: "20",
    },
    {
      "campaign-id": "CMP004",
      name: "Retention Campaign",
      active: "Yes",
      group: "Retention Team",
      "dial-method": "Preview",
      "level-order": "1",
      "dial-statuses": "Active",
      Dp: "12",
    },
    {
      "campaign-id": "CMP005",
      name: "Collection Campaign",
      active: "No",
      group: "Collection Team",
      "dial-method": "Manual",
      "level-order": "4",
      "dial-statuses": "Stopped",
      Dp: "8",
    },
  ];

  return (
    <div>
      <CampaignTab />
      <div className="bg-white rounded-xl border-light mt-5">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="heading font-lexend">
              Campaign Listings
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
    </div>
  );
};

export default CampaignsTable;
