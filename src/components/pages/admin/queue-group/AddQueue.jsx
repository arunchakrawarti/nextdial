"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddQueue = () => {
  return (
    <div className="w-full border-light rounded-md overflow-hidden mt-5 bg-white">
        
      <div className="px-4 py-4">
        <h2 className="heading">
         ADD NEW QUEUE GROUP
        </h2>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Input
            label="Queue Group ID"
            type="text"
            placeholder="Enter group ID"
          />

          <Input
            label="Queue Group Name"
            type="text"
            placeholder="Enter group name"
          />

          <Input
            label="Active"
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
          <Button
            variant="gradient"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddQueue;