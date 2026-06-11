"use client";

import React from "react";
import Input from "@/components/common/Input";

export const ServerFormSection = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input label="Server ID" type="text" name="serverId" />
        <Input label="Server Description" type="text" name="serverDescription" />
        <Input label="Server IP Address" type="text" name="serverIp" />
        <Input 
          label="Active" 
          type="select" 
          name="active" 
          options={[{ label: "Y - Yes", value: "Y" }, { label: "N - No", value: "N" }]} 
        />
      </div>
      <div className="bg-white border border-light rounded-xl p-4 text-sm text-blue-800 flex flex-wrap gap-6 font-medium">
        <div><span className="font-bold">System Load:</span> - 100%</div>
        <div><span className="font-bold">Live Channels:</span> Agents: 0</div>
        <div><span className="font-bold">Disk Usage:</span> [Check]</div>
        <div><span className="font-bold">System Uptime:</span> [Online]</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input 
          label="Admin User Group" 
          type="select" 
          name="adminGroup" 
          options={[{ label: "---ALL---", value: "ALL" }, { label: "Admin", value: "admin" }]} 
        />
        <Input label="Asterisk Version" type="text" name="asteriskVersion" />
        <Input label="Max Trunks" type="text" name="maxTrunks" />
        <Input label="Max Calls per Second" type="text" name="maxCallsPerSecond" />
        <Input 
          label="Balance Dialing" 
          type="select" 
          name="balanceDialing" 
          options={[{ label: "Y - Yes", value: "Y" }, { label: "N - No", value: "N" }]} 
        />
        <Input label="Balance Rank" type="text" name="balanceRank" />
        <Input label="Balance Offlimits" type="text" name="balanceOfflimits" />
        <Input label="Telnet Host" type="text" name="telnetHost" />
        <Input label="Telnet Port" type="text" name="telnetPort" />
      </div>

      <hr className="border-gray-200" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input label="Manager User" type="text" name="managerUser" />
        <Input label="Manager Secret" type="text" name="managerSecret" />
        <Input label="Manager Update User" type="text" name="managerUpdateUser" />
        <Input label="Manager Listen User" type="text" name="managerListenUser" />
        <Input label="Manager Send User" type="text" name="managerSendUser" />
        
        <div className="relative">
          <Input label="Conf File Secret" type="text" name="confFileSecret" />
        </div>

        <Input 
          label="Local GMT" 
          type="select" 
          name="localGmt" 
          options={[{ label: "0.00 - GMT (Do NOT Adjust for DST)", value: "0" }]} 
        />
        <Input label="VMail Dump Exten" type="text" name="vmailDumpExten" />
        <Input label="VMail Dump Exten NI" type="text" name="vmailDumpExtenNi" />
        <Input label="auto dial extension" type="text" name="autoDialExtension" />
        <Input label="Default Context" type="text" name="defaultContext" />
        <Input 
          label="System Performance" 
          type="select" 
          name="systemPerformance" 
          options={[{ label: "Y - Yes", value: "Y" }, { label: "N - No", value: "N" }]} 
        />
        <Input 
          label="Server Logs" 
          type="select" 
          name="serverLogs" 
          options={[{ label: "Y - Yes", value: "Y" }, { label: "N - No", value: "N" }]} 
        />
        <Input 
          label="AGI Output" 
          type="select" 
          name="agiOutput" 
          options={[{ label: "FILE", value: "FILE" }, { label: "BOTH", value: "BOTH" }]} 
        />
        <Input 
          label="Carrier Logging Active" 
          type="select" 
          name="carrierLoggingActive" 
          options={[{ label: "Y - Yes", value: "Y" }, { label: "N - No", value: "N" }]} 
        />
        <Input 
          label="Gather Asterisk Output" 
          type="select" 
          name="gatherAsteriskOutput" 
          options={[{ label: "Y - Yes", value: "Y" }, { label: "N - No", value: "N" }]} 
        />
      </div>
    </div>
  );
};