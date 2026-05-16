"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const YesterdayStatsTable = () => {
  const columns = [
    { label: "Total Calls", key: "totalCalls" },
    { label: "Total Inbound Calls", key: "inboundCalls" },
    { label: "Total Outbound Calls", key: "outboundCalls" },
    { label: "Maximum Agents", key: "maximumAgents" },
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
    <div className="mt-5 bg-white rounded-xl border-light overflow-hidden">
      
      <BasicTable
        columns={columns}
        data={data}
        pagination={true}
        pageSize={10}
        total={data.length}
        wrapperClassName="rounded-none border-none"
      />

      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <h2 className="font-lexend font-semibold text-[18px] leading-9 text-gray-800">
          Total Stats for Yesterday:
        </h2>

        <Button variant="outline">
          [View Max Stats]
        </Button>
      </div>
      
    </div>
  );
};

export default YesterdayStatsTable;