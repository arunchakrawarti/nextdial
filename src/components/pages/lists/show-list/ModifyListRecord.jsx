"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";

const ModifyListRecord = () => {
  const rankColumns = [
    {
      label: "Rank",
      key: "rank",
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

  const rankData = [
    {
      rank: "0",
      called: "10",
      notCalled: "0",
    },
    {
      rank: "Subtotal",
      called: "10",
      notCalled: "0",
    },
    {
      rank: "Total",
      called: "",
      notCalled: "10",
    },
  ];

  const statusColumns = [
    {
      label: "Status",
      key: "status",
    },
    {
      label: "Status Name",
      key: "statusName",
    },
    {
      label: "1",
      key: "one",
    },
    {
      label: "2",
      key: "two",
    },
    {
      label: "3",
      key: "three",
    },
    {
      label: "4",
      key: "four",
    },
    {
      label: "5",
      key: "five",
    },
    {
      label: "6",
      key: "six",
    },
    {
      label: "7",
      key: "seven",
    },
    {
      label: "8",
      key: "eight",
    },
    {
      label: "Subtotal",
      key: "subtotal",
    },
  ];

  const statusData = [
    {
      status: "A",
      statusName: "Answering Machine",
      one: "",
      two: "",
      three: "",
      four: "1",
      five: "",
      six: "",
      seven: "",
      eight: "",
      subtotal: "1",
    },
    {
      status: "B",
      statusName: "Busy",
      one: "1",
      subtotal: "1",
    },
    {
      status: "CALLBK",
      statusName: "Call Back",
      one: "1",
      subtotal: "1",
    },
    {
      status: "DAIR",
      statusName: "Dead Air",
      five: "1",
      subtotal: "1",
    },
    {
      status: "HU",
      statusName: "",
      one: "1",
      two: "1",
      three: "1",
      subtotal: "3",
    },
    {
      status: "INV",
      statusName: "",
      one: "1",
      eight: "1",
      subtotal: "2",
    },
    {
      status: "SCB",
      statusName: "",
      two: "1",
      subtotal: "1",
    },
    {
      status: "",
      statusName: "TOTAL",
      one: "4",
      two: "2",
      three: "1",
      four: "1",
      five: "1",
      six: "",
      seven: "",
      eight: "1",
      subtotal: "10",
    },
  ];

  return (
    <div className="space-y-8">
      
      <div className="rounded-xl border-light bg-white overflow-hidden">
        <div className="flex items-center gap-4 px-4 py-4">
          <h2 className="text-dark font-semibold font-lexend tracking-wider uppercase">
            Ranks Within This List
          </h2>
        </div>

        <BasicTable
          columns={rankColumns}
          data={rankData}
          pagination={false}
          wrapperClassName="border-none"
        />
      </div>

      <div className="rounded-xl border-light bg-white overflow-hidden">
        <div className="flex items-center gap-4 px-4 py-4">
          <h2 className="text-dark font-semibold tracking-wider uppercase font-lexend">
            Called Counts Within This List
          </h2>
        </div>

        <BasicTable
          columns={statusColumns}
          data={statusData}
          pagination={false}
          wrapperClassName="border-none"
        />
      </div>
    </div>
  );
};

export default ModifyListRecord;