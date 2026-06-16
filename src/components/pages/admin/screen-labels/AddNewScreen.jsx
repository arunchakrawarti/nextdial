"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddNewScreen = () => {
  return (
    <section className="w-full px-3 sm:px-5 lg:px-6 py-4 sm:py-6">
      <div className="w-full bg-white border border-light rounded-2xl overflow-hidden shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-gray-200">
          <h2 className="heading font-lexend">
            Add a New Screen Label
          </h2>
        </div>
        <div className="w-full p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
              
                <Input
                  type="text"
                  label="Screen Label ID"
                  placeholder="Enter Conference"
                />
                <Input
                  type="select"
                  label="Screen Label Name"
                  placeholder="Enter the screen name"
                />

                <Input
                  type="select"
                  label="Admin User Group"
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
            <div className="w-full flex justify-center sm:justify-end mt-8 sm:mt-10">
              <Button
                variant="gradient"
              >
                Submit
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewScreen;