"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddSettingContainer = () => {
  return (
    <div className="w-full border-light rounded-md overflow-hidden mt-5 bg-white">
      <div className="px-4 py-4">
        <h2 className="heading font-lexend">Add New Settings Container </h2>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Input
            label="Container ID"
            type="text"
            placeholder="Enter container ID"
          />

          <Input
            label="Container Notes"
            type="text"
            placeholder="Enter container notes"
          />

          <Input
            label="Container Type"
            type="select"
            defaultValue="Y"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />

          <Input
            label="Admin User Group"
            type="select"
            defaultValue=""
            options={[
              {
                label: "All Admin User Groups",
                value: "",
              },
              {
                label: "Admin",
                value: "admin",
              },
              {
                label: "Manager",
                value: "manager",
              },
            ]}
          />
        </div>
        <div className="flex justify-end pt-8">
          <Button variant="gradient">SUBMIT</Button>
        </div>
      </div>
    </div>
  );
};

export default AddSettingContainer;
