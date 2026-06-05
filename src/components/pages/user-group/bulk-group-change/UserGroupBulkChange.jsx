"use client";

import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const UserGroupBulkChange = () => {
  return (
    <div className="w-full bg-white rounded-xl border-light overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6 border-b border-gray-200">
        <h2 className="heading uppercase text-[20px] sm:text-[24px] md:text-[28px]">
          USER GROUP BULK CHANGE
        </h2>
      </div>
      <div className="p-4 sm:p-5 md:p-6">

        <h3 className="heading mb-6">
          Change Users in this group
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Input
            label="Change Users in this group"
            type="select"
            placeholder="Select Group"
            options={[
              { label: "SALES", value: "sales" },
              { label: "SUPPORT", value: "support" },
              { label: "MARKETING", value: "marketing" },
              { label: "OUTBOUND", value: "outbound" },
              { label: "RETENTION", value: "retention" },
            ]}
          />
          <Input
            label="To this group"
            type="select"
            placeholder="Select Group"
            options={[
              { label: "SALES", value: "sales" },
              { label: "SUPPORT", value: "support" },
              { label: "MARKETING", value: "marketing" },
              { label: "OUTBOUND", value: "outbound" },
              { label: "RETENTION", value: "retention" },
            ]}
          />

        </div>
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
          <Button
            variant="gradient"
            className="w-full sm:w-auto min-w-[140px]"
          >
            SUBMIT
          </Button>
        </div>
      </div>

  
      <div className="border-t border-gray-200"></div>

    
      <div className="p-4 sm:p-5 md:p-6">

        <h3 className="text-lg sm:text-xl font-semibold text-dark mb-6">
          Change ALL non-Admin Users to this group
        </h3>
        <div className="w-full">
          <Input
            label="Select Group"
            type="select"
            placeholder="Select Group"
            options={[
              { label: "SALES", value: "sales" },
              { label: "SUPPORT", value: "support" },
              { label: "MARKETING", value: "marketing" },
              { label: "OUTBOUND", value: "outbound" },
              { label: "RETENTION", value: "retention" },
            ]}
          />
        </div>
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
          <Button
            variant="gradient"
            className="w-full sm:w-auto min-w-[140px]"
          >
            SUBMIT
          </Button>
        </div>

      </div>
    </div>
  );
};

export default UserGroupBulkChange;