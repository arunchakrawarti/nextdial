"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ScreenLabelTable = () => {
  const campaignColumns = [
    {
      label: "Label Id",
      key: "labelId",
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
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button variant="gradient">
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      labelId: "LBL001",
      name: "Customer Support Screen",
      active: "Y",
    },
    {
      labelId: "LBL002",
      name: "Sales Dashboard",
      active: "Y",
    },
    {
      labelId: "LBL003",
      name: "Agent Monitoring Panel",
      active: "N",
    },
    {
      labelId: "LBL004",
      name: "Call Transfer Window",
      active: "Y",
    },
    {
      labelId: "LBL005",
      name: "Live Campaign Screen",
      active: "Y",
    },
    {
      labelId: "LBL006",
      name: "Quality Check Interface",
      active: "N",
    },
    {
      labelId: "LBL007",
      name: "Supervisor Console",
      active: "Y",
    },
    {
      labelId: "LBL008",
      name: "Inbound Call Screen",
      active: "Y",
    },
    {
      labelId: "LBL009",
      name: "Technical Support Panel",
      active: "Y",
    },
    {
      labelId: "LBL010",
      name: "Emergency Response Screen",
      active: "N",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Agent Screen Labels
        </h2>
      </div>

      <BasicTable
        columns={campaignColumns}
        data={campaignData}
        pagination={true}
      />
    </div>
  );
};

export default ScreenLabelTable;