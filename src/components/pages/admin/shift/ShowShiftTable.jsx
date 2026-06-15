"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ShowShiftTable = () => {

  const campaignColumns = [
    {
      label: "Shift Id",
      key: "shiftId",
    },
    {
      label: "Shift Name",
      key: "shiftName",
    },
    {
      label: "Shift Start",
      key: "shiftStart",
    },
    {
      label: "Shift Length",
      key: "shiftLength",
    },
    {
      label: "WeekDays",
      key: "weekDays",
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
          href="/admin/shift/modify-state"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      shiftId: "SH001",
      shiftName: "Morning Shift",
      shiftStart: "08:00 AM",
      shiftLength: "8 Hours",
      weekDays: "Mon-Fri",
      adminGroup: "Admin Team A",
    },
    {
      shiftId: "SH002",
      shiftName: "Afternoon Shift",
      shiftStart: "01:00 PM",
      shiftLength: "6 Hours",
      weekDays: "Mon-Sat",
      adminGroup: "Support Team",
    },
    {
      shiftId: "SH003",
      shiftName: "Night Shift",
      shiftStart: "08:00 PM",
      shiftLength: "10 Hours",
      weekDays: "Mon-Fri",
      adminGroup: "Night Ops",
    },
    {
      shiftId: "SH004",
      shiftName: "Weekend Shift",
      shiftStart: "09:00 AM",
      shiftLength: "5 Hours",
      weekDays: "Sat-Sun",
      adminGroup: "Weekend Team",
    },
    {
      shiftId: "SH005",
      shiftName: "Customer Support",
      shiftStart: "10:00 AM",
      shiftLength: "7 Hours",
      weekDays: "Mon-Fri",
      adminGroup: "Customer Care",
    },
    {
      shiftId: "SH006",
      shiftName: "Sales Shift",
      shiftStart: "11:00 AM",
      shiftLength: "8 Hours",
      weekDays: "Mon-Sat",
      adminGroup: "Sales Team",
    },
    {
      shiftId: "SH007",
      shiftName: "Technical Shift",
      shiftStart: "07:00 AM",
      shiftLength: "9 Hours",
      weekDays: "Mon-Fri",
      adminGroup: "Tech Team",
    },
    {
      shiftId: "SH008",
      shiftName: "Inbound Shift",
      shiftStart: "12:00 PM",
      shiftLength: "6 Hours",
      weekDays: "Tue-Sun",
      adminGroup: "Inbound Team",
    },
    {
      shiftId: "SH009",
      shiftName: "Outbound Shift",
      shiftStart: "02:00 PM",
      shiftLength: "7 Hours",
      weekDays: "Mon-Fri",
      adminGroup: "Outbound Team",
    },
    {
      shiftId: "SH010",
      shiftName: "Holiday Support",
      shiftStart: "09:30 AM",
      shiftLength: "4 Hours",
      weekDays: "Sun",
      adminGroup: "Holiday Team",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-light overflow-hidden mt-5">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-light">
        <h2 className="heading font-lexend">
          Shift Listings
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

export default ShowShiftTable;