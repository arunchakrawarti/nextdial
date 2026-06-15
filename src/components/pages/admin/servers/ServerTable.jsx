"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ServerTable = () => {
  const campaignColumns = [
    {
      label: "Server Id",
      key: "serverId",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Server Ip",
      key: "serverIp",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Agent",
      key: "agent",
    },
    {
      label: "Asterisk",
      key: "asterisk",
    },
    {
      label: "Trunks",
      key: "trunks",
    },
    {
      label: "GMT",
      key: "gmt",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button
          href="/admin/servers/modify-server"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      serverId: "SRV001",
      name: "Main Dialer Server",
      serverIp: "192.168.1.10",
      active: "Y",
      agent: "150",
      asterisk: "16.5",
      trunks: "12",
      gmt: "+5.30",
    },
    {
      serverId: "SRV002",
      name: "Inbound Calling Server",
      serverIp: "192.168.1.11",
      active: "Y",
      agent: "95",
      asterisk: "18.2",
      trunks: "8",
      gmt: "+5.30",
    },
    {
      serverId: "SRV003",
      name: "Outbound Campaign Server",
      serverIp: "10.0.0.20",
      active: "N",
      agent: "70",
      asterisk: "16.8",
      trunks: "5",
      gmt: "+0.00",
    },
    {
      serverId: "SRV004",
      name: "VoIP Routing Server",
      serverIp: "172.16.0.5",
      active: "Y",
      agent: "120",
      asterisk: "18.4",
      trunks: "15",
      gmt: "-4.00",
    },
    {
      serverId: "SRV005",
      name: "Backup PBX Server",
      serverIp: "192.168.100.25",
      active: "Y",
      agent: "50",
      asterisk: "17.1",
      trunks: "6",
      gmt: "+1.00",
    },
    {
      serverId: "SRV006",
      name: "Cloud SIP Server",
      serverIp: "10.10.10.45",
      active: "N",
      agent: "30",
      asterisk: "18.6",
      trunks: "4",
      gmt: "+8.00",
    },
    {
      serverId: "SRV007",
      name: "Support Calling Server",
      serverIp: "172.20.1.8",
      active: "Y",
      agent: "85",
      asterisk: "16.3",
      trunks: "9",
      gmt: "-5.00",
    },
    {
      serverId: "SRV008",
      name: "International Gateway",
      serverIp: "192.168.50.12",
      active: "Y",
      agent: "200",
      asterisk: "18.7",
      trunks: "20",
      gmt: "+9.00",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Server Listings
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

export default ServerTable;