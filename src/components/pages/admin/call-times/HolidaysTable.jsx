"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const HolidaysTable = () => {

  const campaignColumns = [
    {
      label: "Holiday Id",
      key: "holidayId",
    },
    {
      label: "Date",
      key: "date",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Status",
      key: "status",
    },
    {
      label: "Start",
      key: "start",
    },
    {
      label: "Stop",
      key: "stop",
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
          href="/admin/call-times/modify-holiday"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      holidayId: "HD001",
      date: "2026-01-01",
      name: "New Year",
      status: "ACTIVE",
      start: "00:00",
      stop: "23:59",
      adminGroup: "ALL",
    },
    {
      holidayId: "HD002",
      date: "2026-01-26",
      name: "Republic Day",
      status: "ACTIVE",
      start: "08:00",
      stop: "20:00",
      adminGroup: "Admin",
    },
    {
      holidayId: "HD003",
      date: "2026-03-08",
      name: "Holi",
      status: "ACTIVE",
      start: "09:00",
      stop: "18:00",
      adminGroup: "Support",
    },
    {
      holidayId: "HD004",
      date: "2026-08-15",
      name: "Independence Day",
      status: "ACTIVE",
      start: "00:00",
      stop: "23:59",
      adminGroup: "ALL",
    },
    {
      holidayId: "HD005",
      date: "2026-10-02",
      name: "Gandhi Jayanti",
      status: "INACTIVE",
      start: "10:00",
      stop: "17:00",
      adminGroup: "Management",
    },
    {
      holidayId: "HD006",
      date: "2026-10-24",
      name: "Diwali",
      status: "ACTIVE",
      start: "06:00",
      stop: "23:00",
      adminGroup: "Sales",
    },
    {
      holidayId: "HD007",
      date: "2026-12-25",
      name: "Christmas",
      status: "ACTIVE",
      start: "00:00",
      stop: "23:59",
      adminGroup: "ALL",
    },
    {
      holidayId: "HD008",
      date: "2026-11-14",
      name: "Children's Day",
      status: "ACTIVE",
      start: "09:00",
      stop: "15:00",
      adminGroup: "HR Team",
    },
    {
      holidayId: "HD009",
      date: "2026-04-14",
      name: "Ambedkar Jayanti",
      status: "ACTIVE",
      start: "08:00",
      stop: "18:00",
      adminGroup: "Admin",
    },
    {
      holidayId: "HD010",
      date: "2026-05-01",
      name: "Labour Day",
      status: "ACTIVE",
      start: "07:00",
      stop: "19:00",
      adminGroup: "Operations",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-light overflow-hidden mt-5">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-light">
        <h2 className="heading font-lexend">
          Holiday Listings
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

export default HolidaysTable;