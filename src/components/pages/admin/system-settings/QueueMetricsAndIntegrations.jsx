"use client";
import React from "react";
import Input from "@/components/common/Input";

const QueueMetricsAndIntegrations = () => {
  return (
    <div className="w-full bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          type="select"
          label="Enable QueueMetrics Logging"
          defaultValue="0"
          options={[{ label: "0 - Disabled", value: "0" }, { label: "1 - Enabled", value: "1" }]}
        />
        <Input type="text" label="QueueMetrics Server IP" placeholder="192.168.0.X" />
        <Input type="text" label="QueueMetrics URL" placeholder="http://..." />
        <Input type="text" label="QueueMetrics Log ID" defaultValue="VIC" />
        <Input type="select" label="QueueMetrics Login-Out" defaultValue="STANDARD" options={[{ label: "STANDARD", value: "STANDARD" }]} />
        <Input type="select" label="QueueMetrics Socket Send" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
      </div>
      <div className="border-t border-gray-100 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            type="select"
            label="Enable Vtiger Integration"
            defaultValue="0"
            options={[{ label: "0 - No", value: "0" }, { label: "1 - Yes", value: "1" }]}
          />
          <Input type="text" label="Vtiger DB Server IP" placeholder="127.0.0.1" />
          <Input type="text" label="Vtiger DB Name" placeholder="vtiger" />
          <Input type="text" label="Vtiger URL" placeholder="https://crm.yourdomain.com" />
        </div>
      </div>
    </div>
  );
};

export default QueueMetricsAndIntegrations;