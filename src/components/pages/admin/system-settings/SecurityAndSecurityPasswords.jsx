"use client";
import React from "react";
import Input from "@/components/common/Input";

const SecurityAndSecurityPasswords = () => {
  return (
    <div className="w-full bg-white p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Input
          type="select"
          label="Allow Custom Dialplan Entries"
          defaultValue="1"
          options={[
            { label: "1 - Yes", value: "1" },
            { label: "0 - No", value: "0" },
          ]}
        />
        <Input type="text" label="PLLB Grouping Limit" defaultValue="100" />
        
        <Input
          type="select"
          label="Enable First Webform"
          defaultValue="1"
          options={[
            { label: "1 - Yes", value: "1" },
            { label: "0 - No", value: "0" },
          ]}
        />
        <Input
          type="select"
          label="Enable Second Webform"
          defaultValue="1"
          options={[
            { label: "1 - Yes", value: "1" },
            { label: "0 - No", value: "0" },
          ]}
        />
      </div>
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <Input type="text" label="Default Phone Registration Password" defaultValue="test1243" />
          </div>
          <div className="space-y-1">
            <Input type="text" label="Default Phone Login Password" defaultValue="test1234" />
          </div>
          <div className="space-y-1">
            <Input type="text" label="Default Server Password" defaultValue="test1234" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAndSecurityPasswords;