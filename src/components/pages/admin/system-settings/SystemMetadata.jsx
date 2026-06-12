"use client";
import React from "react";
import Input from "@/components/common/Input";

const SystemMetadata = () => {
  return (
    <div className="w-full bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" label="Version" defaultValue="2.14b0.5" disabled />
        <Input type="text" label="SVN Version" defaultValue="3972" disabled />
        <Input type="text" label="DB Schema Version" defaultValue="1738" disabled />
        <Input type="text" label="DB Schema Update Date" defaultValue="2026-03-27 16:18:34" disabled />
        <Input type="text" label="Password Encryption" defaultValue="DISABLED - S1 - C1" disabled />
        <Input type="text" label="Auto User-add Value" defaultValue="101" disabled />
        <Input type="text" label="Install Date" defaultValue="2026-03-24" disabled />
        <Input type="text" label="Phone Codes" defaultValue="1159 - 42760 - 0 - 0 - 0 - 0 - 0 - 0" disabled />
        <Input
          type="select"
          label="Use Non-Latin (UTF-8)"
          defaultValue="0"
          options={[
            { label: "0 - No", value: "0" },
            { label: "1 - Yes", value: "1" },
          ]}
        />
        <Input
          type="select"
          label="Enable Languages"
          defaultValue="0"
          options={[
            { label: "0 - Disabled", value: "0" },
            { label: "1 - Enabled", value: "1" },
          ]}
        />
        <Input
          type="select"
          label="Language Method"
          defaultValue="DISABLED"
          options={[
            { label: "DISABLED", value: "DISABLED" },
            { label: "WEB", value: "WEB" },
          ]}
        />
        <Input
          type="select"
          label="Webroot Writable"
          defaultValue="1"
          options={[
            { label: "1 - Yes", value: "1" },
            { label: "0 - No", value: "0" },
          ]}
        />
        <Input
          type="select"
          label="Agent Disable Display"
          defaultValue="ALL"
          options={[
            { label: "ALL", value: "ALL" },
            { label: "NONE", value: "NONE" },
          ]}
        />
        <Input
          type="select"
          label="Allowed SIP Stacks"
          defaultValue="SIP"
          options={[
            { label: "SIP", value: "SIP" },
            { label: "PJSIP", value: "PJSIP" },
          ]}
        />
      </div>
    </div>
  );
};

export default SystemMetadata;