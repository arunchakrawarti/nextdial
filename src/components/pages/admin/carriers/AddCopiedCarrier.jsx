"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddCopiedCarrier = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">
    
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend">
          Add Copied Carrier
        </h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <Input
            label="Carrier ID"
            type="text"
            placeholder="Enter Carrier ID"
          />

          <Input
            label="Carrier Name"
            type="text"
            placeholder="Enter Carrier Name"
          />

          <Input
            label="Server IP"
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
              {
                label: "Support",
                value: "support",
              },
            ]}
          />

          <Input
            label="Source Carrier"
            type="select"
            defaultValue=""
            options={[
              {
                label: "-- Select Template --",
                value: "",
              },
              {
                label: "SIP Generic",
                value: "sip_generic",
              },
              {
                label: "IAX Template",
                value: "iax_template",
              },
              {
                label: "Cloud PBX",
                value: "cloud_pbx",
              },
            ]}
          />
        </div>
        <div className="flex justify-center sm:justify-end pt-8">
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

export default AddCopiedCarrier;