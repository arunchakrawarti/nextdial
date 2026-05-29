"use client";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import React from "react"

const CampaignRanksTable = () => {
  const campaignColumns = [
    { 
      label: "Campaign", 
      key: "campaignName" 
    },
    {
      label: "Rank",
      key: "rank",
      render: (value) => (
        <Input type="select" options={["0", "1", "2"]} defaultValue={value} className="h-9 w-24" />
      ),
    },
    {
      label: "Grade",
      key: "grade",
      render: (value) => (
        <Input type="select" options={["1", "2", "3"]} defaultValue={value} className="h-9 w-24" />
      ),
    },
    { 
      label: "Calls", 
      key: "calls" 
    },
    {
      label: "Web Vars",
      key: "webVars",
      render: (value) => (
        <Input type="text" placeholder="99" defaultValue={value} className="h-9 max-w-[200px]" />
      ),
    },
  ];

  const campaignData = [
    {
      campaignName: "outbound - outbound",
      rank: "0",
      grade: "1",
      calls: "0",
      webVars: "99",
    },
  ];

  return (
    <div className="bg-white rounded-xl border-light  space-y-4">
      <div className="flex items-center gap-1.5 p-4">
        <h2 className="heading font-lexend">
          Campaign Ranks
        </h2>
      </div>

      <BasicTable 
        columns={campaignColumns} 
        data={campaignData} 
        pagination={false} 
      />
    </div>
  );
};

export default CampaignRanksTable;