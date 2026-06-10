"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddConfTemplate = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">

      {/* Header */}
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend">
          Add New Conf Template
        </h2>
      </div>

      {/* Form */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">

        {/* Inputs */}
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

        {/* Admin Group */}
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

        {/* Textarea */}
        <div className="w-full">

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Template Contents
          </label>

          <textarea
            placeholder="Enter template contents here..."
            rows={10}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 
            text-sm text-gray-800 outline-none resize-none
            focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Submit Button */}
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