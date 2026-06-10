"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ShowStateTable = () => {

  const campaignColumns = [
    {
      label: "Calltime Id",
      key: "calltimeId",
    },
    {
      label: "Calltime State",
      key: "calltimeState",
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
        <Button
          href="/admin/call-times/modify-stateform"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      calltimeId: "CT001",
      calltimeState: "Alabama",
      calltimeName: "Morning Shift",
      defaultStart: "08:00 AM",
      defaultStop: "12:00 PM",
      adminGroup: "Admin Team A",
    },
    {
      calltimeId: "CT002",
      calltimeState: "California",
      calltimeName: "Afternoon Shift",
      defaultStart: "01:00 PM",
      defaultStop: "05:00 PM",
      adminGroup: "Admin Team B",
    },
    {
      calltimeId: "CT003",
      calltimeState: "Texas",
      calltimeName: "Night Shift",
      defaultStart: "06:00 PM",
      defaultStop: "11:00 PM",
      adminGroup: "Support Team",
    },
    {
      calltimeId: "CT004",
      calltimeState: "Florida",
      calltimeName: "Weekend Support",
      defaultStart: "09:00 AM",
      defaultStop: "04:00 PM",
      adminGroup: "Weekend Team",
    },
    {
      calltimeId: "CT005",
      calltimeState: "New York",
      calltimeName: "Customer Service",
      defaultStart: "10:00 AM",
      defaultStop: "06:00 PM",
      adminGroup: "Customer Care",
    },
    {
      calltimeId: "CT006",
      calltimeState: "Nevada",
      calltimeName: "Sales Calling",
      defaultStart: "11:00 AM",
      defaultStop: "07:00 PM",
      adminGroup: "Sales Team",
    },
    {
      calltimeId: "CT007",
      calltimeState: "Ohio",
      calltimeName: "Lead Followup",
      defaultStart: "07:00 AM",
      defaultStop: "03:00 PM",
      adminGroup: "Lead Team",
    },
    {
      calltimeId: "CT008",
      calltimeState: "Arizona",
      calltimeName: "Inbound Support",
      defaultStart: "12:00 PM",
      defaultStop: "08:00 PM",
      adminGroup: "Inbound Team",
    },
    {
      calltimeId: "CT009",
      calltimeState: "Georgia",
      calltimeName: "Customer Query",
      defaultStart: "09:30 AM",
      defaultStop: "05:30 PM",
      adminGroup: "Customer Team",
    },
    {
      calltimeId: "CT010",
      calltimeState: "Chicago",
      calltimeName: "Technical Support",
      defaultStart: "08:30 AM",
      defaultStop: "04:30 PM",
      adminGroup: "Tech Team",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light overflow-hidden mt-5">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-light">
        <h2 className="heading font-lexend">
          STATE CALL TIME LISTINGS
        </h2>
      </div>
      <BasicTable
        columns={campaignColumns}
        data={campaignData}
        pagination={true}
        itemsPerPage={5}
      />

    </div>
  );
};

export default ShowStateTable;