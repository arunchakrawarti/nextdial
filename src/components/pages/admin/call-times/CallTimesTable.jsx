"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const CallTimesTable = () => {
  const campaignColumns = [
    {
      label: "Calltime Id",
      key: "calltimeId",
    },
    {
      label: "Calltime Name",
      key: "calltimeName",
    },
    {
      label: "Default Start",
      key: "defaultStart",
    },
    {
      label: "Default Stop",
      key: "defaultStop",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button href="/admin/call-times/modify" variant="gradient">
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      calltimeId: "CT001",
      calltimeName: "Morning Shift",
      defaultStart: "09:00 AM",
      defaultStop: "01:00 PM",
      adminGroup: "Admin Team A",
    },
    {
      calltimeId: "CT002",
      calltimeName: "Afternoon Shift",
      defaultStart: "02:00 PM",
      defaultStop: "06:00 PM",
      adminGroup: "Admin Team B",
    },
    {
      calltimeId: "CT003",
      calltimeName: "Night Shift",
      defaultStart: "07:00 PM",
      defaultStop: "11:00 PM",
      adminGroup: "Admin Team C",
    },
    {
      calltimeId: "CT004",
      calltimeName: "Weekend Support",
      defaultStart: "10:00 AM",
      defaultStop: "05:00 PM",
      adminGroup: "Support Team",
    },
  ];

  return (
    <div className="bg-white rounded-xl border-light space-y-4 mt-5">
      <div className="flex items-center gap-1.5 p-4">
        <h2 className="heading font-lexend">
          Call Time Listings
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

export default CallTimesTable;