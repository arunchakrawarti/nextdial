"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search } from "lucide-react";

const ListTable = () => {
  const columns = [
    {
      label: "List id",
      key: "listId",
    },
    {
      label: "List Name",
      key: "listName",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Rtime",
      key: "rtime",
    },
    {
      label: "Leads Count",
      key: "leadsCount",
    },
    {
      label: "Call Time",
      key: "callTime",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Last Call Date",
      key: "lastCallDate",
    },
    {
      label: "Campaign",
      key: "campaign",
      render: (value) => (
        <Button href="/list/show-lists/modify"
          variant="ghost"
          className="px-4 py-2 rounded-xl border border-red-300 text-red-500"
        >
          {value}
        </Button>
      ),
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button href="/list/show-lists/modify" variant="ghost" className="border border-primary text-primary">
          <Pencil size={16} />
          Modify
        </Button>
      ),
    },
  ];

  const data = [
    {
      listId: "998",
      listName: "Default Manual list",
      description: "-",
      rtime: "-",
      leadsCount: "X",
      callTime: "campaign",
      active: "N",
      lastCallDate: "2026-04-23 13:59:34",
      campaign: "TESTCAMP",
    },
    {
      listId: "999",
      listName: "Default inbound list",
      description: "-",
      rtime: "-",
      leadsCount: "X",
      callTime: "campaign",
      active: "N",
      lastCallDate: "-",
      campaign: "TESTCAMP",
    },
    {
      listId: "31032026",
      listName: "31032026",
      description: "31032026",
      rtime: "-",
      leadsCount: "X",
      callTime: "24hours",
      active: "N",
      lastCallDate: "2026-04-15 17:02:42",
      campaign: "outbound",
    },
  ];
  return (
    <div className="bg-white rounded-xl border-light">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="font-lexend font-semibold text-[2rem] text-dark">
              List Listings
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

export default ListTable;
