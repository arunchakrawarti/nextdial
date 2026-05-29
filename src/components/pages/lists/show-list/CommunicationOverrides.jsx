"use client";
import React from "react";
import Input from "@/components/common/Input";

const CommunicationOverrides = () => {
  return (
    <div className="bg-white rounded-lg border-light overflow-hidden mt-5">
      <div className="px-4 py-2.5 border-b border-slate-200">
        <h3 className="text-xs font-bold text-dark uppercase tracking-wider">
          Communication Overrides
        </h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div className="space-y-6">
          <Input
            label="Agent Script Override:"
            type="select"
            options={["-", "Script One", "Script Two"]}
          />

          <div className="flex gap-4 items-end w-full">
            <div className="flex-1">
              <Input
                label="Inbound Drop Voicemail Override:"
                type="text"
              />
            </div>
          </div>

          <Input
            label="Campaign CID Override:"
            type="text"
          />

          <div className="md:col-span-1">
            <Input
              label="Answering Machine Message Override:"
              type="text"
            />
          </div>

          <Input
            label="Drop Inbound Group Override:"
            type="select"
            options={["---NONE---", "Group A", "Group B"]}
          />
        </div>
        <div className="space-y-6">
          <Input
            label="Inbound Script Override:"
            type="select"
            options={["-", "Script One", "Script Two"]}
          />

          <div className="flex gap-4 items-end w-full">
            <div className="flex-1">
              <Input
                label="Inbound After Hours Voicemail Override:"
                type="text"
              />
            </div>
          </div>

          <Input
            label="Campaign CID Group Override:"
            type="select"
            options={["---DISABLED---", "Enabled"]}
          />

          <Input
            label="Status Group Override:"
            type="select"
            options={["NONE", "Group 1", "Group 2"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunicationOverrides;