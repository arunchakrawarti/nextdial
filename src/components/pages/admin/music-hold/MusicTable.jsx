"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const MusicTable = () => {
  const campaignColumns = [
    {
      label: "Default",
      key: "default",
    },
    {
      label: "Moh Name",
      key: "mohName",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Random Order",
      key: "randomOrder",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button href="/admin/music-hold/modify-music" variant="gradient">
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      default: "Y",
      mohName: "Welcome Tune",
      active: "Y",
      randomOrder: "N",
      adminGroup: "ADMIN",
    },
    {
      default: "N",
      mohName: "Customer Hold Music",
      active: "Y",
      randomOrder: "Y",
      adminGroup: "SUPPORT",
    },
    {
      default: "N",
      mohName: "Sales Promo Music",
      active: "Y",
      randomOrder: "N",
      adminGroup: "SALES",
    },
    {
      default: "Y",
      mohName: "Technical Support Tune",
      active: "N",
      randomOrder: "N",
      adminGroup: "TECH",
    },
    {
      default: "N",
      mohName: "Billing Hold Music",
      active: "Y",
      randomOrder: "Y",
      adminGroup: "BILLING",
    },
    {
      default: "N",
      mohName: "HR Waiting Music",
      active: "Y",
      randomOrder: "N",
      adminGroup: "HR",
    },
    {
      default: "Y",
      mohName: "Emergency Alert Tone",
      active: "Y",
      randomOrder: "N",
      adminGroup: "EMERGENCY",
    },
    {
      default: "N",
      mohName: "Feedback Music",
      active: "N",
      randomOrder: "Y",
      adminGroup: "FEEDBACK",
    },
    {
      default: "N",
      mohName: "Outbound Campaign Tune",
      active: "Y",
      randomOrder: "Y",
      adminGroup: "OUTBOUND",
    },
    {
      default: "Y",
      mohName: "General Inquiry Music",
      active: "Y",
      randomOrder: "N",
      adminGroup: "GENERAL",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Music HOld Table
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

export default MusicTable;