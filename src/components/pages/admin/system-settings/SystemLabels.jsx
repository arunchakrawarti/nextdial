"use client";
import React from "react";
import Input from "@/components/common/Input";

const SystemLabels = () => {
  return (
    <div className="w-full bg-white p-4">
      <div className="space-y-6">
        <div className="w-full">
          <Input
            label="Custom Dialplan Entry"
            type="textarea"
            placeholder="Enter custom dialplan extensions here..."
            className="w-full min-h-[120px] p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="select"
            label="Reload Dialplan On Servers"
            defaultValue="0"
            options={[
              { label: "0 - No", value: "0" },
              { label: "1 - Yes", value: "1" },
            ]}
          />
          <Input
            type="select"
            label="Hide Label in Call Logs"
            defaultValue="Y"
            options={[
              { label: "Y - Yes", value: "Y" },
              { label: "N - No", value: "N" },
            ]}
          />
        </div>

        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
            Field Custom Labels
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Input type="text" label="Label Title" placeholder="Title" />
            <Input
              type="text"
              label="Label First Name"
              placeholder="First Name"
            />
            <Input
              type="text"
              label="Label Middle Initial"
              placeholder="Middle Initial"
            />
            <Input
              type="text"
              label="Label Last Name"
              placeholder="Last Name"
            />
            <Input type="text" label="Label Address1" placeholder="Address 1" />
            <Input type="text" label="Label Address2" placeholder="Address 2" />
            <Input type="text" label="Label Address3" placeholder="Address 3" />
            <Input type="text" label="Label City" placeholder="City" />
            <Input type="text" label="Label State" placeholder="State" />
            <Input type="text" label="Label Province" placeholder="Province" />
            <Input
              type="text"
              label="Label Postal Code"
              placeholder="Postal Code"
            />
            <Input
              type="text"
              label="Label Vendor Lead Code"
              placeholder="Vendor Lead Code"
            />
            <Input
              type="text"
              label="Label Phone Number"
              placeholder="Phone Number"
            />
            <Input type="text" label="Label Email" placeholder="Email" />
            <Input type="text" label="Label Lead ID" placeholder="Lead ID" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemLabels;
