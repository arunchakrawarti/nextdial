"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddNewShiftForm = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">

      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend">
          Modify A Shift
        </h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-white rounded-xl border border-gray-100">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider font-lexend">
            Shift ID:
          </span>

          <p className="text-base  font-bold text-gray-900 font-lexend break-all">
            24HRMIDNIGHT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Input
            label="Shift Name"
            type="text"
            defaultValue="24 hours 7 days a week"
          />

          <Input
            label="Admin User Group"
            type="select"
            defaultValue="ALL"
            options={[
              { label: "---ALL---", value: "ALL" },
              { label: "Admin", value: "admin" },
              { label: "Agent", value: "agent" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Input
            label="Shift Start Time"
            type="text"
            defaultValue="0000"
          />

          <Input
            label="Shift End Time"
            type="text"
            defaultValue="0000"
          />
        </div>
        <div className="flex justify-end">
          <Button variant="gradient">
            Calculate Shift Length
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Input
            label="Shift Length"
            type="text"
            defaultValue="24:00"
          />

          <Input
            label="Report Option"
            type="select"
            defaultValue="N"
            options={[
              { label: "N", value: "N" },
              { label: "Y", value: "Y" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Input
            label="Report Rank"
            type="select"
            defaultValue="1"
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
            ]}
          />

          <div />
        </div>
        <div className="space-y-4 pt-2">

          <label className="font-semibold text-[13px] text-gray-600 uppercase tracking-wider font-lexend block">
            Shift Weekdays
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

            <Input
              type="checkbox"
              label="Sunday"
              defaultChecked={true}
            />

            <Input
              type="checkbox"
              label="Monday"
              defaultChecked={true}
            />

            <Input
              type="checkbox"
              label="Tuesday"
              defaultChecked={true}
            />

            <Input
              type="checkbox"
              label="Wednesday"
              defaultChecked={true}
            />

            <Input
              type="checkbox"
              label="Thursday"
              defaultChecked={true}
            />

            <Input
              type="checkbox"
              label="Friday"
              defaultChecked={true}
            />

            <Input
              type="checkbox"
              label="Saturday"
              defaultChecked={true}
            />
          </div>
        </div>
        <div className="flex justify-end pt-6">

          <Button
            variant="gradient"
            className="w-full sm:w-auto px-10 sm:px-14 py-3"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewShiftForm;