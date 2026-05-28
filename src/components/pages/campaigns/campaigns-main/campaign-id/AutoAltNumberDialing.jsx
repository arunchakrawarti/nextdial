"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const AutoAltNumberDialing = () => {
  const tableData = [
    { id: 1, status: "N" },
    { id: 2, status: "NA" },
    { id: 3, status: "DC" },
  ];

  const selectedStatus = "A - Answering Machine";

  const columns = [
    {
      key: "sno",
      label: "Sno",
      render: (_, __, index) => (
        <div className="font-medium text-gray-700">
          {index + 1}
        </div>
      ),
    },
    {
      key: "status",
      label: "Statues",
      render: (value) => (
        <div className=" font-medium text-gray-700 tracking-wider">
          {value}
        </div>
      ),
    },
  ];

  const actions = [
    () => (
      <Button className="text-sm font-semibold text-purple-600 uppercase">
        Delete
      </Button>
    ),
  ];

  return (
    <div className="w-full space-y-6 min-h-screen">
      <div className="bg-white rounded-2xl border-light p-4 sm:p-6">

        <h2 className="text-base sm:text-lg font-bold text-slate-800 uppercase mb-4 sm:mb-6 text-left">
          Auto Alt Number Dialing For This Campaign
        </h2>

        <div className="overflow-x-auto">
          <BasicTable
            columns={columns}
            data={tableData}
            actions={actions}
            wrapperClassName="shadow-none rounded-none min-w-[400px]"
          />
        </div>

      </div>
      <div className="bg-white rounded-2xl border-light p-4 sm:p-6">

        <h2 className="text-base sm:text-lg font-bold text-slate-800 uppercase mb-4 sm:mb-6 text-left">
          Add New Auto Alt Number Dialing Status
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-end gap-4">

          <Input
            label="Status"
            type="select"
            value={selectedStatus}
            options={[
              "A - Answering Machine",
              "B - Busy",
              "AA - Auto Answer",
              "AM - Answering Machine Message",
            ]}
          />

          <Button
            variant="gradient"
            className="w-full uppercase tracking-wider font-semibold"
          >
            + Add
          </Button>

        </div>
      </div>

    </div>
  );
};

export default AutoAltNumberDialing;