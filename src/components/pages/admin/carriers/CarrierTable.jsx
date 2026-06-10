"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const CarrierTable = () => {
  const campaignColumns = [
    {
      label: "Carrier Id",
      key: "carrierId",
    },
    {
      label: "Carrier Name",
      key: "carrierName",
    },
    {
      label: "Server Ip",
      key: "serverIp",
    },
    {
      label: "Protocol",
      key: "protocol",
    },
    {
      label: "Registration",
      key: "registration",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button
          href="/admin/carriers/modify-carrier"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      carrierId: "CARRIER001",
      carrierName: "Twilio SIP",
      serverIp: "192.168.1.10",
      protocol: "SIP",
      registration: "Enabled",
      active: "Y",
      adminGroup: "Admin Team A",
    },
    {
      carrierId: "CARRIER002",
      carrierName: "Asterisk Carrier",
      serverIp: "192.168.1.11",
      protocol: "IAX2",
      registration: "Disabled",
      active: "N",
      adminGroup: "Admin Team B",
    },
    {
      carrierId: "CARRIER003",
      carrierName: "VoIP Connect",
      serverIp: "10.0.0.15",
      protocol: "SIP",
      registration: "Enabled",
      active: "Y",
      adminGroup: "Support Team",
    },
    {
      carrierId: "CARRIER004",
      carrierName: "Cloud PBX",
      serverIp: "172.16.0.20",
      protocol: "PJSIP",
      registration: "Enabled",
      active: "Y",
      adminGroup: "Network Team",
    },
    {
      carrierId: "CARRIER005",
      carrierName: "Global Voice",
      serverIp: "192.168.5.22",
      protocol: "SIP",
      registration: "Disabled",
      active: "N",
      adminGroup: "Admin Team C",
    },
    {
      carrierId: "CARRIER006",
      carrierName: "Secure Telecom",
      serverIp: "10.10.10.45",
      protocol: "IAX2",
      registration: "Enabled",
      active: "Y",
      adminGroup: "Security Team",
    },
    {
      carrierId: "CARRIER007",
      carrierName: "CallNet Provider",
      serverIp: "172.20.1.8",
      protocol: "PJSIP",
      registration: "Enabled",
      active: "Y",
      adminGroup: "Operations",
    },
    {
      carrierId: "CARRIER008",
      carrierName: "NextGen Voice",
      serverIp: "192.168.100.50",
      protocol: "SIP",
      registration: "Disabled",
      active: "N",
      adminGroup: "Support Team",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          CARRIER LISTINGS
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

export default CarrierTable;