"use client";

import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const DncManagement = () => {
  return (
    <div className="space-y-5 mt-5">
      <div className="bg-white rounded-lg p-6 border-light">
        <h2 className="heading font-lexend mb-4">
          Add or Delete Numbers from the DNC List
        </h2>

        <form className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input
            label="List"
            type="select"
            options={["SYSTEM_INTERNAL - INTERNAL DNC LIST"]}
            placeholder="Select List"
          />

          <Input
            label="Add or Delete"
            type="select"
            options={["Add", "Delete"]}
            placeholder="Select Action"
          />

          <div className="xl:col-span-2">
            <Input
              label="Phone Numbers"
              type="textarea"
              rows={6}
              placeholder="One phone number per line"
            />
          </div>

          <div className="xl:col-span-2 flex justify-end">
            <Button variant="gradient" className="px-16">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg p-6 border-light">
        <h2 className="heading font-lexend mb-4">
          DNC Log Search
        </h2>

        <form className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="text"
            placeholder="Enter Phone Number"
          />

          <div />

          <div className="xl:col-span-2 flex justify-end">
            <Button variant="gradient" className="px-16">
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg p-6 border-light">
        <h2 className="heading font-lexend mb-4">
          Download Numbers in this List to a File
        </h2>

        <form className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input
            label="List"
            type="select"
            options={["SYSTEM_INTERNAL - INTERNAL DNC LIST"]}
            placeholder="Select List"
          />

          <div className="flex items-end">
            <Button variant="gradient" className="px-16">
              Download
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DncManagement;