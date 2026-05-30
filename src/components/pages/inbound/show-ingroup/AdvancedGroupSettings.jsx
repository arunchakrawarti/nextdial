"use client";
import React from "react";
import Input from "@/components/common/Input";

const AdvancedGroupSettings = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 border-t pt-6">
      <Input label="Agent Screen Search List Restrict:" type="text" />
      <Input label="Agent Alert Filename:" type="text" defaultValue="ding" />
      <Input label="Agent Alert Delay:" type="text" defaultValue="1000" />
      <div className="lg:col-span-2  grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input label="Second Agent Alert Trigger:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
        <Input label="Second Agent Alert Trigger Seconds:" type="text" defaultValue="600" />
        <Input label="Second Agent Alert Filename:" type="text" />
        <Input label="Second Agent Alert Delay:" type="text" defaultValue="1000" />
        <Input label="Second Agent Alert Container:" type="select" defaultValue="---DISABLED---" options={[{ label: "---DISABLED---", value: "---DISABLED---" }]} />
        <Input label="Second Agent Alert Only:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      </div>

      {/* Third Agent Alert Block */}
      <div className="lg:col-span-2  grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <Input label="Third Agent Alert Trigger:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
        <Input label="Third Agent Alert Trigger Seconds:" type="text" defaultValue="600" />
        <Input label="Third Agent Alert Filename:" type="text" />
        <Input label="Third Agent Alert Delay:" type="text" defaultValue="1000" />
        <Input label="Third Agent Alert Container:" type="select" defaultValue="---DISABLED---" options={[{ label: "---DISABLED---", value: "---DISABLED---" }]} />
        <Input label="Third Agent Alert Only:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      </div>

      <Input label="Default Transfer Group:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
      <Input label="Default Group Alias:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
      <Input label="Transfer Talk Minimum:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="Transfer Talk Minimum Seconds:" type="text" defaultValue="0" />

      <Input label="Dial In-Group CID:" type="text" />
      <Input label="Hold Recall Transfer In-Group:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
      <Input label="No Delay Call Route:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
      
      <Input label="In-Group Recording Override:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="In-Group Recording Filename:" type="text" defaultValue="NONE" />
      <Input label="Routing Initiated Recording:" type="select" defaultValue="Y" options={[{ label: "Y", value: "Y" }]} />

      <Input label="Stats Percent of Calls Answered Within X seconds 1:" type="text" defaultValue="20" />
      <Input label="Stats Percent of Calls Answered Within X seconds 2:" type="text" defaultValue="30" />

      {/* URLs Component Sets */}
      <div className="lg:col-span-2 grid grid-cols-1 gap-4">
        <Input label="Enter In-Group URL:" type="text" className="w-full" />
        <Input label="Start Call URL:" type="text" className="w-full" />
        <Input label="Dispo Call URL:" type="text" className="w-full" />
        <Input label="No Agent Call URL:" type="text" className="w-full" />
        <Input label="Waiting Call URL On:" type="text" className="w-full" />
        <Input label="Waiting Call URL Off:" type="text" className="w-full" />
        <Input label="Add Lead URL:" type="text" className="w-full" />
      </div>

      <Input label="Add Lead Timezone:" type="select" defaultValue="SERVER" options={[{ label: "SERVER", value: "SERVER" }]} />

      <Input label="Extension Append CID:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }, { label: "Y", value: "Y" }]} />
      <Input label="Uniqueid Status Display:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="Uniqueid Status Prefix:" type="text" />
      <Input label="State Descriptions Banner:" type="select" defaultValue="---DISABLED---" options={[{ label: "---DISABLED---", value: "---DISABLED---" }]} />
    
      <Input label="Populate Lead In-Group:" type="select" defaultValue="ENABLED" options={[{ label: "ENABLED", value: "ENABLED" }]} />
      <Input label="Populate Lead Province:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="Populate Lead Owner:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="Populate Lead State Areacode:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="Populate Lead Source:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
      <Input label="Populate Lead Vendor:" type="text" defaultValue="INBOUND_NUMBER" />
      <Input label="Populate Lead Comments:" type="text" defaultValue="CALLERID_NAME" />
      <div className="lg:col-span-2  grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input label="After Call Survey:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
        <Input label="After Call Survey Accept Filename:" type="text" />
        <Input label="After Call Survey Accept Digit:" type="select" options={[]} />
        <Input label="After Call Question Filename:" type="text" />
        <Input label="After Call End Call Menu:" type="select" options={[]} />
      </div>

      <Input label="Custom 1:" type="text" />
      <Input label="Custom 2:" type="text" />
      <Input label="Custom 3:" type="text" />
      <Input label="Custom 4:" type="text" />
      <Input label="Custom 5:" type="text" />
    </div>
  );
};

export default AdvancedGroupSettings;