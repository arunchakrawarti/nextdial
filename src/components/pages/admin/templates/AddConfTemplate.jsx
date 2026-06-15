"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddConfTemplate = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend">Add New Conf Template</h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input
            label="Template ID"
            type="text"
            placeholder="Enter Template ID"
          />

          <Input
            label="Template Name"
            type="text"
            placeholder="Enter Template Name"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                label: "Agent",
                value: "agent",
              },
            ]}
          />

          <div />
        </div>
        <div className="w-full">
          <Input
            label="Template Contents"
            type="textarea"
            placeholder="Enter template contents here..."
            rows={10}
          />
        </div>
        <div className="flex justify-center sm:justify-end pt-2">
          <Button
            variant="gradient"
            className="w-full sm:w-auto px-10 sm:px-14 py-3 text-base font-semibold uppercase tracking-wider"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddConfTemplate;
