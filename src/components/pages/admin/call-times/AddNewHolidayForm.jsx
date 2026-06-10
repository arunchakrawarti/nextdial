"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddNewHolidayForm = () => {
  return (
    <div className="w-full bg-white border border-light rounded-2xl overflow-hidden mt-5">

      <div className="px-4 sm:px-6 py-5 border-b border-light">
        <h2 className="heading uppercase">
          Add New State Call Time
        </h2>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
          <Input
            label="Holiday ID"
            type="text"
            placeholder="no spaces or punctuation"
          />
          <Input
            label="Holiday Name"
            type="text"
            placeholder="short description of the holiday"
          />
          <Input
            label="Holiday Comments"
            type="text"
            placeholder="Enter comments"
          />
          <Input
            label="Holiday Date"
            type="date"
            placeholder="Select date"
          />
          <Input
            label="Admin User Group"
            type="select"
            defaultValue="ALL"
            options={[
              {
                label: "All Admin User Groups",
                value: "ALL",
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
        </div>
        <div className="pt-8 text-center">
          <p className="text-[15px] sm:text-[17px] text-dark leading-7">
            Day and time options will appear once you have created the Holiday Definition
          </p>
        </div>
        <div className="flex justify-end pt-6">
          <Button
            variant="gradient"
            className="w-full sm:w-auto px-8"
          >
            SUBMIT
          </Button>
        </div>

      </div>
    </div>
  );
};

export default AddNewHolidayForm;