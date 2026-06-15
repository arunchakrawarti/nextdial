"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ConferencesTable = () => {
  const campaignColumns = [
    {
      label: "Conference",
      key: "conference",
    },
    {
      label: "Server Ip",
      key: "serverIp",
    },
    {
      label: "Extension",
      key: "extension",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button
          href="/admin/conferences/modify-conference"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      conference: "Sales Team Meeting",
      serverIp: "192.168.1.10",
      extension: "1001",
    },
    {
      conference: "Support Daily Sync",
      serverIp: "192.168.1.11",
      extension: "1002",
    },
    {
      conference: "Client Discussion Room",
      serverIp: "10.0.0.20",
      extension: "1003",
    },
    {
      conference: "International Conference",
      serverIp: "172.16.0.5",
      extension: "1004",
    },
    {
      conference: "HR Interview Panel",
      serverIp: "192.168.100.25",
      extension: "1005",
    },
    {
      conference: "Training Session",
      serverIp: "10.10.10.45",
      extension: "1006",
    },
    {
      conference: "Night Shift Monitoring",
      serverIp: "172.20.1.8",
      extension: "1007",
    },
    {
      conference: "Management Board Room",
      serverIp: "192.168.50.12",
      extension: "1008",
    },
    {
      conference: "Technical Support Bridge",
      serverIp: "10.20.30.40",
      extension: "1009",
    },
    {
      conference: "Emergency Call Room",
      serverIp: "172.31.10.15",
      extension: "1010",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Conference Listings
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

export default ConferencesTable;