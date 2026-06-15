"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ConfBridgeTable = () => {
  const campaignColumns = [
    {
      label: "Confbridge",
      key: "confbridge",
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
      confbridge: "Main Sales Bridge",
      serverIp: "192.168.1.10",
      extension: "7001",
    },
    {
      confbridge: "Customer Support Bridge",
      serverIp: "192.168.1.11",
      extension: "7002",
    },
    {
      confbridge: "Technical Team Bridge",
      serverIp: "10.0.0.20",
      extension: "7003",
    },
    {
      confbridge: "International Calling Bridge",
      serverIp: "172.16.0.5",
      extension: "7004",
    },
    {
      confbridge: "HR Conference Bridge",
      serverIp: "192.168.100.25",
      extension: "7005",
    },
    {
      confbridge: "Training Webinar Bridge",
      serverIp: "10.10.10.45",
      extension: "7006",
    },
    {
      confbridge: "Night Monitoring Bridge",
      serverIp: "172.20.1.8",
      extension: "7007",
    },
    {
      confbridge: "Board Meeting Bridge",
      serverIp: "192.168.50.12",
      extension: "7008",
    },
    {
      confbridge: "Emergency Support Bridge",
      serverIp: "10.20.30.40",
      extension: "7009",
    },
    {
      confbridge: "Client Demo Bridge",
      serverIp: "172.31.10.15",
      extension: "7010",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Agent Confbridge Listings
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

export default ConfBridgeTable;