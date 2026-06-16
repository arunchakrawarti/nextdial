"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddExtensionGroupEntry = () => {
  return (
    <div className="w-full bg-white rounded-xl border-light overflow-hidden">
      <div className="p-4">
        <h2 className="heading font-lexend">
          Add Extension Group Entry
        </h2>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <Input
              label="Extension Group"
              type="text"
              placeholder="Enter Extension Group"
            />
          </div>
          <div>
            <Input
              label="Extension"
              type="text"
              placeholder="Enter Extension"
            />
          </div>
          <div>
            <Input
              label="Rank"
              type="select"
              placeholder="Select Rank"
              options={[
                { label: "0", value: "0" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
              ]}
            />
          </div>
          <div>
            <Input
              label="Campaigns Groups"
              type="text"
              placeholder="Enter Campaign Groups"
            />
          </div>

        </div>
        <div className="flex justify-center sm:justify-end mt-8">
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

export default AddExtensionGroupEntry;