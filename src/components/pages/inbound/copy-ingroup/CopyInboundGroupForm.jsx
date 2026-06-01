"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const CopyInboundGroupForm = () => {
  return (
    <div className="bg-white rounded-xl border-light p-6 mt-5">
      <h2 className="heading font-lexend mb-6">
        Copy Inbound Group
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div>
            <Input
              label="Group ID"
              type="text"
              placeholder="no spaces"
            />
          </div>

          <Input
            label="Group Name"
            type="text"
            placeholder="Enter group name"
          />

          <div className="lg:col-span-2">
            <Input
              label="Source Group ID"
              type="select"
              defaultValue="AGENTDIRECT"
              options={[
                {
                  label:
                    "AGENTDIRECT - Single Agent Direct Queue",
                  value: "AGENTDIRECT",
                },
                {
                  label: "SUPPORTEAM - Support Team",
                  value: "SUPPORTEAM",
                },
                {
                  label: "SALESGROUP - Sales Group",
                  value: "SALESGROUP",
                },
              ]}
            />
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex justify-end">
          <Button
            variant="gradient"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CopyInboundGroupForm;