"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddScreenColor = () => {
  return (
    <div className="w-full mt-5">
      <div className="w-full bg-white border border-light rounded-2xl overflow-hidden shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-light">
          <h2 className="heading text-lg sm:text-xl lg:text-2xl font-lexend">
            Add New Screen Color
          </h2>
        </div>
        <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">

            <div className="w-full">
              <Input
                label="Screen Color ID"
                type="text"
                placeholder="Enter Screen Color ID"
              />
            </div>

            <div className="w-full">
              <Input
                label="Screen Colors Name"
                type="text"
                placeholder="Enter Screen Colors Name"
              />
            </div>

            <div className="w-full">
              <Input
                label="Admin User Group"
                type="select"
                placeholder="Select Admin User Group"
                options={[
                  {
                    label: "Admin Team A",
                    value: "admin-a",
                  },
                  {
                    label: "Admin Team B",
                    value: "admin-b",
                  },
                  {
                    label: "Support Team",
                    value: "support-team",
                  },
                  {
                    label: "Operations Team",
                    value: "operations-team",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-8">

            <Button variant="gradient">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScreenColor;