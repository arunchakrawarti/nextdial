"use client";
import React from "react";
import Button from "@/components/common/Button";
import SystemMetadata from "./SystemMetadata";
import AgentAndAdminSettings from "./AgentAndAdminSettings";
import SecurityAndSecurityPasswords from "./SecurityAndSecurityPasswords";
import SystemLabels from "./SystemLabels";
import WebphoneAndStorageSettings from "./WebphoneAndStorageSettings";
import QueueMetricsAndIntegrations from "./QueueMetricsAndIntegrations";

const SystemSetting = () => {
  return (
    <div className="w-full bg-white min-h-screen border-light rounded-xl">
      <div>
        <div className="mb-6 bg-white  rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="heading">
            Modify System Settings
          </h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          
          <SystemMetadata />
          
          <AgentAndAdminSettings />
          
          <SecurityAndSecurityPasswords />
          <SystemLabels/>

          <WebphoneAndStorageSettings/>
          <QueueMetricsAndIntegrations/>
          <div className="bg-white flex p-4   justify-end items-center gap-4">
        
            <Button
              variant="gradient"
            >
              SUBMIT SYSTEM CHANGES
            </Button>

          </div>
          <div className="p-4 text-primary">
            <a href="/report/admin-change" className="text-sm text-blue-600 hover:underline font-medium">
              Click here to see Admin changes to the system settings
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SystemSetting;