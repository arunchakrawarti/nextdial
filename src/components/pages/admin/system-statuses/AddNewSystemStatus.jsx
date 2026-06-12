"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddNewSystemStatus = () => {
  const yesNoOptions = [
    { label: "Y", value: "Y" },
    { label: "N", value: "N" },
  ];

  return (
    <div className="w-full bg-white border border-light rounded-2xl p-4 sm:p-6 mt-5">
      <h2 className="heading mb-6">
        ADD NEW SYSTEM STATUS
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <Input
          label="Status"
          type="text"
          placeholder="Enter Status"
        />

        <Input
          label="Description"
          type="text"
          placeholder="Enter Description"
        />

        <Input
          label="Selectable"
          type="select"
          defaultValue="Y"
          options={yesNoOptions}
        />

        <Input
          label="Human Answer"
          type="select"
          defaultValue="Y"
          options={yesNoOptions}
        />

        <Input
          label="Sale"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="DNC"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="Customer Contact"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="Not Interested"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="Unworkable"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="Callback"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="Completed"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />

        <Input
          label="Answering Machine"
          type="select"
          defaultValue="N"
          options={yesNoOptions}
        />
        <div className="lg:col-span-2">
          <Input
            label="Category"
            type="select"
            defaultValue="undefined"
            options={[
              {
                label: "UNDEFINED - Default Category",
                value: "undefined",
              },
              {
                label: "Sales",
                value: "sales",
              },
              {
                label: "Support",
                value: "support",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button variant="gradient">
          ADD
        </Button>
      </div>
    </div>
  );
};

export default AddNewSystemStatus;