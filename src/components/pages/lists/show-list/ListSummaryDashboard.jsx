"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";

const ListSummaryDashboard = () => {
  const statusColumns = [
    { label: "Status", key: "status" },
    { label: "Status Name", key: "statusName" },
    { label: "Called", key: "called" },
    { label: "Not Called", key: "notCalled" },
    { label: "Dialable", key: "dialable" },
    { label: "Penetration", key: "penetration" },
  ];

  const statusData = [
    {
      status: "A",
      statusName: "Answering Machine",
      called: 1,
      notCalled: 0,
      dialable: 0,
      penetration: "0%",
    },
    {
      status: "B",
      statusName: "Busy",
      called: 1,
      notCalled: 0,
      dialable: 0,
      penetration: "0%",
    },
    {
      status: "CALLBK",
      statusName: "Call Back",
      called: 1,
      notCalled: 0,
      dialable: 0,
      penetration: "0%",
    },
    {
      status: "DAIR",
      statusName: "Dead Air",
      called: 1,
      notCalled: 0,
      dialable: 0,
      penetration: "0%",
    },
    {
      status: "HU",
      statusName: "",
      called: 3,
      notCalled: 0,
      dialable: 0,
      penetration: "0%",
    },
    {
      status: "INV",
      statusName: "",
      called: 2,
      notCalled: 0,
      dialable: 0,
      penetration: "0%",
    },
    {
      status: "SCB",
      statusName: "",
      called: 1,
      notCalled: 0,
      dialable: 0,
      penetration: "100%",
    },
    {
      status: (
        <span className="font-bold text-dark">
          SUBTOTALS
        </span>
      ),
      statusName: "",
      called: (
        <span className="font-bold text-dark">
          10
        </span>
      ),
      notCalled: (
        <span className="font-bold text-dark">
          0
        </span>
      ),
      dialable: "",
      penetration: "",
    },
    {
      status: (
        <span className="font-bold text-dark">
          TOTAL
        </span>
      ),
      statusName: "",
      called: (
        <span className="font-bold text-dark">
          10
        </span>
      ),
      notCalled: "",
      dialable: (
        <span className="font-bold text-dark">
          0
        </span>
      ),
      penetration: (
        <span className="font-bold text-dark">
          10%
        </span>
      ),
    },
  ];

  const timeZoneColumns = [
    {
      label: "Gmt Offset Now",
      key: "gmtOffset",
    },
    {
      label: "Called",
      key: "called",
    },
    {
      label: "Not Called",
      key: "notCalled",
    },
  ];

  const timeZoneData = [
    {
      gmtOffset: "+0.00 (Fri 29 May 2026 09:29)",
      called: 10,
      notCalled: 0,
    },
    {
      gmtOffset: (
        <span className="font-bold text-dark">
          SUBTOTALS
        </span>
      ),
      called: (
        <span className="font-bold text-dark">
          10
        </span>
      ),
      notCalled: (
        <span className="font-bold text-dark">
          0
        </span>
      ),
    },
    {
      gmtOffset: (
        <span className="font-bold text-dark">
          TOTAL
        </span>
      ),
      called: "",
      notCalled: (
        <span className="font-bold text-dark">
          10
        </span>
      ),
    },
  ];

  const ownerColumns = [
    {
      label: "Omner",
      key: "owner",
    },
    {
      label: "Called",
      key: "called",
    },
    {
      label: "Not Called",
      key: "notCalled",
    },
  ];

  const ownerData = [
    {
      owner: "",
      called: 9,
      notCalled: 0,
    },
    {
      owner: "as",
      called: 1,
      notCalled: 0,
    },
    {
      owner: (
        <span className="font-bold text-dark">
          SUBTOTALS
        </span>
      ),
      called: (
        <span className="font-bold text-dark">
          10
        </span>
      ),
      notCalled: (
        <span className="font-bold text-dark">
          0
        </span>
      ),
    },
    {
      owner: (
        <span className="font-bold text-dark">
          TOTAL
        </span>
      ),
      called: "",
      notCalled: (
        <span className="font-bold text-dark">
          10
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-light rounded-xl overflow-hidden bg-white">
        <BasicTable
          columns={statusColumns}
          data={statusData}
          pagination={false}
        />
      </div>
      <div className="border-light rounded-xl overflow-hidden bg-white">
        <h2 className="px-4 py-4 text-xs font-bold text-dark tracking-wider uppercase font-lexend">
          Time Zones Within This List
        </h2>

        <BasicTable
          columns={timeZoneColumns}
          data={timeZoneData}
          pagination={false}
        />
      </div>
      <div className="border-light rounded-xl overflow-hidden bg-white">
        <h2 className="px-4 py-4 text-xs font-bold text-dark tracking-wider uppercase font-lexend">
          Owners Within This List
        </h2>

        <BasicTable
          columns={ownerColumns}
          data={ownerData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default ListSummaryDashboard;