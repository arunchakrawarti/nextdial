"use client";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";

export const ServerFormSection2 = () => {
  const [trunkInput, setTrunkInput] = useState("");

const carrierColumns = [
  {
    title: "CARRIER ID",
    dataIndex: "carrierId",
    key: "carrierId",
    render: (text) => (
      <span className="text-blue-600 underline cursor-pointer">
        {text}
      </span>
    ),
  },
  { title: "NAME", dataIndex: "name", key: "name" },
  { title: "REGISTRATION", dataIndex: "registration", key: "registration" },
  { title: "ACTIVE", dataIndex: "active", key: "active" },
];

  const carrierData = [
    { carrierId: "SIPExample", name: "SIP Example", registration: "", active: "N" },
    { carrierId: "PJSIPExample", name: "PJSIP Example", registration: "", active: "N" },
    { carrierId: "PJSIPWIZExample", name: "PJSIP_WIZ Example", registration: "", active: "N" },
  ];

  return (
    <div className="space-y-8">
      {/* इमेज 3 के फ़ील्ड्स */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input label="Conf Qualify" type="select" name="confQualify" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Recording Web Link" type="select" name="recordingWebLink" options={[{ label: "SERVER_IP", value: "SERVER_IP" }]} />
        <Input label="Alternate Recording Server IP" type="text" name="altRecordingServerIp" />
        <Input label="External Server IP" type="text" name="externalServerIp" />
        <Input label="Web Socket URL" type="text" name="webSocketUrl" />
        <Input label="External Web Socket URL" type="text" name="externalWebSocketUrl" />
        <Input label="Active Twin Server IP" type="text" name="activeTwinServerIp" />
        <Input label="Conferencing Engine" type="select" name="conferencingEngine" options={[{ label: "CONFBRIDGE", value: "CONFBRIDGE" }]} />
        <Input label="Conf Update Interval" type="text" name="confUpdateInterval" />
        <Input label="Active Asterisk Server" type="select" name="activeAsteriskServer" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Auto-Restart Asterisk" type="select" name="autoRestartAsterisk" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Temp No-Restart Asterisk" type="select" name="tempNoRestartAsterisk" options={[{ label: "N - No", value: "N" }]} />
        <Input label="Asterisk Restart URL" type="text" name="asteriskRestartUrl" />
        <Input label="Active Agent Server" type="select" name="activeAgentServer" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Generate conf files" type="select" name="generateConfFiles" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Rebuild conf files" type="select" name="rebuildConfFiles" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Rebuild Music On Hold" type="select" name="rebuildMusicOnHold" options={[{ label: "Y - Yes", value: "Y" }]} />
      </div>

      <hr className="border-gray-200" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input label="Sounds Update" type="select" name="soundsUpdate" options={[{ label: "Y - Yes", value: "Y" }]} />
        <Input label="Recording Limit" type="text" name="recordingLimit" />
      </div>

      <div className="w-full">
        <Input 
          label="Custom Dialplan Entry" 
          type="textarea" 
          className="font-mono text-sm min-h-[180px] w-full" 
        />
      </div>
      <div className="flex justify-center pt-2">
        <Button type="submit" variant="gradient" className="px-14 py-3 font-bold text-sm tracking-wide">
          SUBMIT
        </Button>
      </div>

      <hr className="border-gray-200" />
      <div className="space-y-6">
        <div className="bg-white p-4 border border-gray-200 rounded-xl space-y-3">
          <h3 className="font-bold text-gray-800 uppercase text-xs">Trunks For This Server:</h3>
          <div className="grid grid-cols-4 gap-2 text-xs font-bold text-gray-400 uppercase pb-2 border-b">
            <div>Campaign</div><div>Trunks</div><div>Restriction</div><div>Delete</div>
          </div>
          
          <div className="pt-3 space-y-3">
            <h4 className="text-xs font-bold uppercase text-gray-700">Add New Server Trunk Record</h4>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <label>Trunks: <input type="text" value={trunkInput} onChange={(e) => setTrunkInput(e.target.value)} className="border p-1 w-20 rounded" /></label>
              <label>Campaign: <select className="border p-1 rounded"><option>testcamp - testcamp</option></select></label>
              <label>Restriction: <select className="border p-1 rounded"><option>MAXIMUM_LIMIT</option></select></label>
              <Button type="button" variant="gradient" className="px-3 py-1 text-xs font-bold">ADD</Button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-light overflow-hidden shadow-sm">
          <div className="p-3 border-b border-gray-200 bg-gray-50 text-center font-bold text-xs uppercase text-gray-700">
            Carriers Within This Server
          </div>
          <BasicTable columns={carrierColumns} data={carrierData} pagination={false} />
        </div>
        <div className="bg-white p-4 border border-light rounded-xl text-center text-xs font-bold text-gray-600 space-y-2">
          <p>This server has <span className="text-red-500">0 active carriers</span> and <span className="text-gray-500">3 inactive carriers</span></p>
          <p>This server has 0 active phones and 0 inactive phones</p>
          <p>This server has 0 active conferences</p>
          <p>This server has 0 active agent confbridges</p>
        </div>
      </div>
    </div>
  );
};