"use client";
import React from "react";
import Input from "@/components/common/Input";

const WebphoneAndStorageSettings = () => {
  return (
    <div className="w-full bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-4">
        <Input type="select" label="Admin Screen Colors" defaultValue="default" options={[{ label: "default", value: "default" }]} />
        <Input type="select" label="Agent Screen Colors" defaultValue="default" options={[{ label: "default", value: "default" }]} />
        <Input type="select" label="Agent Chat Screen Colors" defaultValue="default" options={[{ label: "default", value: "default" }]} />
        <Input type="text" label="Default Codecs" placeholder="ulaw, alaw" />
        <Input type="text" label="Webphone URL" defaultValue="https://phone.viciphone.com/v3.0/viciphone.php" />
        <Input type="text" label="Webphone System Key" placeholder="Enter System Key" />
        <Input type="select" label="Default Webphone" defaultValue="0" options={[{ label: "0 - No", value: "0" }, { label: "1 - Yes", value: "1" }]} />
      </div>
      <div className="mt-6 border-t border-gray-100 pt-4">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Alternative Log Database</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input type="text" label="Alt-Log DB Server" placeholder="localhost" />
          <Input type="text" label="Alt-Log DB Name" placeholder="asterisk" />
          <Input type="text" label="Alt-Log DB Login" placeholder="cron" />
          <Input type="password" label="Alt-Log DB Password" placeholder="••••••••" />
        </div>
      </div>
    </div>
  );
};

export default WebphoneAndStorageSettings;