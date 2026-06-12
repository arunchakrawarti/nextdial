"use client";
import React from "react";
import Input from "@/components/common/Input";

const AgentAndAdminSettings = () => {
  return (
    <div className="w-full bg-white p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" label="Timeclock End Of Day" defaultValue="0000" />
        
        <Input
          type="select"
          label="Default Local GMT"
          defaultValue="-5.00"
          options={[
            { label: "-5.00 (Do NOT Adjust for DST)", value: "-5.00" },
            { label: "+5.30 (India Standard Time)", value: "+5.30" },
          ]}
        />

        <Input
          type="select"
          label="Default Voicemail Zone"
          defaultValue="india"
          options={[
            { label: "india", value: "india" },
            { label: "usa", value: "usa" },
          ]}
        />
        <Input
          type="select"
          label="Agent Screen Header Date Format"
          defaultValue="MS_DASH_24HR"
          options={[{ label: "MS_DASH_24HR 2008-06-24 23:59:59", value: "MS_DASH_24HR" }]}
        />
        
        <Input
          type="select"
          label="Agent Screen Customer Date Format"
          defaultValue="AL_TEXT_AMPM"
          options={[{ label: "AL_TEXT_AMPM OCT 24 2008 11:59:59 PM", value: "AL_TEXT_AMPM" }]}
        />

        <Input
          type="select"
          label="Agent Screen Customer Phone Format"
          defaultValue="US_PARN"
          options={[{ label: "US_PARN (000)000-0000", value: "US_PARN" }]}
        />
        <Input type="text" label="Admin Home URL" defaultValue="../vicidial/welcome.php" />
        <Input type="text" label="Admin Web Directory" defaultValue="vicidialnew" />
        <Input type="text" label="Agent Screen Script" defaultValue="vicidial.php" />
        <Input type="text" label="Sounds Web Server" defaultValue="192.168.0.203" />
        <Input type="text" label="Sounds Web Directory" defaultValue="PzikYsj0rHteKzhDWDs65VPJ1FPpjlfe" />
        <div className="w-full">
          <Input
            type="select"
            label="Active Voicemail Server"
            defaultValue="192.168.0.203"
            options={[{ label: "192.168.0.203", value: "192.168.0.203" }]}
          />
        </div>

        <Input
          type="select"
          label="Auto Dial Limit"
          defaultValue="4"
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ]}
        />
        
        <Input type="text" label="Max FILL Calls per Second" defaultValue="10" />
      </div>
    </div>
  );
};

export default AgentAndAdminSettings;