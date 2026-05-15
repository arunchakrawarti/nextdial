"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const TodayStatsTable = () => {
  const columns = [
    {
      label: "Total Calls",
      key: "totalCalls",
    },
    {
      label: "Total Inbound Calls",
      key: "inboundCalls",
    },
    {
      label: "Total Outbound Calls",
      key: "outboundCalls",
    },
    {
      label: "Maximum Agents",
      key: "maximumAgents",
    },
  ];

  const data = [
    {
      totalCalls: "*** NO ACTIVITY FOR 2026-05-15 ***",
      inboundCalls: "",
      outboundCalls: "",
      maximumAgents: "",
    },
  ];

  return (
    <div className="space-y-4 mt-5 bg-white rounded-xl border border-gray-200">
      <BasicTable
        columns={columns}
        data={data}
        pagination={true}
        pageSize={10}
        total={data.length}
        wrapperClassName="rounded-xl "
      />

      <div className="flex items-center justify-between px-2 p-2">
        <h2 className="font-lexend font-semibold text-[18px] leading-9 text-gray-800">
          Total Stats for Today:
        </h2>

        <Button variant="outline">
          [view max stats]
        </Button>
      </div>
    </div>
  );
};

export default TodayStatsTable;
