"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const ShowExtensionTable = () => {

  const columns = [
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Extension",
      key: "extension",
    },
    {
      label: "Rank",
      key: "rank",
    },
    {
      label: "Restrict",
      key: "restrict",
    },
    {
      label: "Count",
      key: "count",
    },
    {
      label: "Last Call",
      key: "lastCall",
    },
    {
      label: "Last Id",
      key: "lastId",
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button variant="danger">
          Modify
        </Button>
      ),
    },
  ];

  const data = [
    {
      group: "SALES",
      extension: "860001",
      rank: "1",
      restrict: "NONE",
      count: "12",
      lastCall: "2026-06-05 10:30 AM",
      lastId: "1001",
    },
    {
      group: "SUPPORT",
      extension: "860002",
      rank: "2",
      restrict: "YES",
      count: "18",
      lastCall: "2026-06-05 09:45 AM",
      lastId: "1002",
    },
    {
      group: "MARKETING",
      extension: "860003",
      rank: "3",
      restrict: "NO",
      count: "9",
      lastCall: "2026-06-05 11:00 AM",
      lastId: "1003",
    },
    {
      group: "RETENTION",
      extension: "860004",
      rank: "1",
      restrict: "YES",
      count: "14",
      lastCall: "2026-06-05 08:50 AM",
      lastId: "1004",
    },
    {
      group: "COLLECTION",
      extension: "860005",
      rank: "4",
      restrict: "NO",
      count: "20",
      lastCall: "2026-06-05 12:15 PM",
      lastId: "1005",
    },
    {
      group: "OUTBOUND",
      extension: "860006",
      rank: "2",
      restrict: "NONE",
      count: "11",
      lastCall: "2026-06-05 01:00 PM",
      lastId: "1006",
    },
    {
      group: "QUALITY",
      extension: "860007",
      rank: "5",
      restrict: "YES",
      count: "6",
      lastCall: "2026-06-05 09:20 AM",
      lastId: "1007",
    },
    {
      group: "APPOINTMENT",
      extension: "860008",
      rank: "1",
      restrict: "NO",
      count: "16",
      lastCall: "2026-06-05 02:10 PM",
      lastId: "1008",
    },
  ];

  return (
    <div className="w-full bg-white border-light rounded-xl">
      <div className="mb-3 p-4">
        <h2 className="heading">
          EXTENSION GROUP LISTINGS:
        </h2>
      </div>
      <div className="rounded-xl overflow-hidden border-light">
        <BasicTable
          columns={columns}
          data={data}
          wrapperClassName=""
        />
      </div>
    </div>
  );
};

export default ShowExtensionTable;