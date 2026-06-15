"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddVicidialConference = () => {
  return (
    <div className="w-full bg-white mt-5">
      <div className="w-full border border-light rounded-2xl overflow-hidden bg-white shadow-sm">
        
        <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
          <h2 className="heading text-center sm:text-left">
           Add a New Vicidial Conference
          </h2>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        
              <div className="w-full">
                <Input
                  type="text"
                  label="Conference Number"
                  placeholder="Enter Conference"
                />
              </div>
              <div className="w-full">
                <Input
                  type="select"
                  label="Server IP"
                  defaultValue="192.168.0.203"
                  options={[
                    {
                      label: "192.168.0.203",
                      value: "192.168.0.203",
                    },
                    {
                      label: "192.168.0.204",
                      value: "192.168.0.204",
                    },
                  ]}
                />
              </div>

            </div>
            <div className="flex justify-center sm:justify-end pt-8">
              <Button
                variant="gradient"
                className="w-full sm:w-auto px-10 py-3 text-sm sm:text-base font-semibold uppercase"
              >
                Submit
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVicidialConference;