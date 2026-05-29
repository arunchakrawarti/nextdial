"use client";
import React from "react";
import Input from "@/components/common/Input";

const WebOverride = () => {
  return (
    <div className="bg-white rounded-lg border-light overflow-hidden mt-5">
      <div className="px-4 py-2.5 border-b border-slate-200">
        <h3 className="text-xs font-bold text-dark uppercase tracking-wider">
          Web Override
        </h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div className="space-y-6">
          <Input
            label="Web Form:"
            type="text"
          />

          <Input
            label="No Agent Call URL:"
            type="text"
          />

          <div className="flex gap-4 items-end w-full">
            <div className="flex-1">
              <Input
                label="Auto Alt Threshold Override:"
                type="text"
                defaultValue="-1"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Input
            label="Web Form Two:"
            type="text"
          />

          <Input
            label="API New Lead URL:"
            type="text"
          />

          <Input
            label="Dial Prefix Override:"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default WebOverride;