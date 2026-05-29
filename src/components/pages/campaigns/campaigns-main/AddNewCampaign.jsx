"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const AddNewCampaign = () => {
  return (
    <div className="bg-white rounded-lg p-6 border-light">
      <div className="mb-8">
        <h2 className="heading font-lexend">
          Add a New Campaign
        </h2>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-6">
          <Input
            label="Campaign ID"
            placeholder="Enter campaign ID"
            type="text"
          />

          <Input
            label="Campaign Name"
            placeholder="Enter campaign name"
            type="text"
          />

          <Input
            label="Campaign Description"
            placeholder="Enter campaign description"
            type="text"
          />

          <Input
            label="Admin User Group"
            type="select"
            options={[
              "All Admin User Groups",
              "Support",
              "Manager",
            ]}
          />

          <Input
            label="Active"
            type="select"
            options={["Y", "N"]}
          />

          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Input
                label="Park Music-on-Hold"
                placeholder="moh chooser"
                type="text"
              />
            </div>

            <Button variant="primary" className="h-12">
              MOH Chooser
            </Button>
          </div>

          <Input
            label="Web Form"
            placeholder="Enter web form"
            type="text"
          />

          <Input
            label="Allow Closers"
            type="select"
            options={["Y", "N"]}
          />
        </div>

        <div className="space-y-6">
          <Input
            label="Minimum Hopper Level"
            type="select"
            options={["1", "2", "3", "4", "5"]}
          />

          <Input
            label="Auto Dial Level"
            type="select"
            options={["0", "1", "2", "3", "4"]}
          />

          <Input
            label="Next Agent Call"
            type="select"
            options={["random", "oldest_call", "fewest_calls"]}
          />

          <Input
            label="Local Call Time"
            type="select"
            options={[
              "12pm-5pm - default 12pm to 5pm calling",
              "9am-9pm",
              "24 Hours",
            ]}
          />

          <Input
            label="Voicemail"
            placeholder="Enter voicemail"
            type="text"
          />

          <Input
            label="Script"
            type="select"
            options={["NONE", "Sales Script", "Support Script"]}
          />

          <Input
            label="Get Call Launch"
            type="select"
            options={["NONE", "Launch 1", "Launch 2"]}
          />
        </div>
        <div className="md:col-span-2 flex justify-center mt-6">
          <Button variant="gradient" className="px-10">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCampaign;