"use client";
import React from "react";
import Input from "@/components/common/Input";

const BasicGroupInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
      <div className="flex flex-col justify-center">
        <label className="text-sm font-medium text-gray-700 mb-1">Group ID:</label>
        <span className="font-bold text-gray-900 py-2 px-1">AGENTDIRECT</span>
      </div>

      <Input
        label="Group Name:"
        type="text"
        defaultValue="Single Agent Direct Queue"
      />

      <Input
        label="Group Color (color chooser):"
        type="text"
        defaultValue="white"
      />

      <Input
        label="Active:"
        type="select"
        defaultValue="Y"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />

      <Input
        label="In-Group Calldate:"
        type="text"
        defaultValue="2026-04-10 13:03:20"
        disabled
      />

      <Input
        label="Admin User Group:"
        type="select"
        defaultValue="---ALL---"
        options={[{ label: "---ALL---", value: "---ALL---" }]}
      />

      <Input
        label="Park Music-on-Hold:"
        type="text"
        placeholder="moh chooser"
      />

      <Input label="Web Form:" type="text" />
      <Input label="Web Form Two:" type="text" />

      <Input
        label="Next Agent Call:"
        type="select"
        defaultValue="longest_wait_time"
        options={[{ label: "longest_wait_time", value: "longest_wait_time" }]}
      />
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input
          label="Queue Priority:"
          type="select"
          defaultValue="99"
          options={[{ label: "99 - Higher", value: "99" }]}
        />
        <Input label="On-Hook Ring Time:" type="text" defaultValue="15" />
      </div>

      <Input
        label="On-Hook CID:"
        type="select"
        defaultValue="CUSTOMER_PHONE_RINGAGENT"
        options={[{ label: "CUSTOMER_PHONE_RINGAGENT", value: "CUSTOMER_PHONE_RINGAGENT" }]}
      />

      <Input label="On-Hook CID Number:" type="text" />

      <Input
        label="Fronter Display:"
        type="select"
        defaultValue="Y"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />

      <Input
        label="Script:"
        type="select"
        defaultValue="-"
        options={[{ label: "-", value: "-" }]}
      />

      <Input
        label="Ignore List Script Override:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />

      <Input
        label="Status Group Override:"
        type="select"
        defaultValue="NONE"
        options={[{ label: "NONE", value: "NONE" }]}
      />

      <Input
        label="Get Call Launch:"
        type="select"
        defaultValue="NONE"
        options={[{ label: "NONE", value: "NONE" }]}
      />

      <Input label="Transfer-Conf DTMF 1:" type="text" />
      <Input label="Transfer-Conf Number 1:" type="text" />
      <Input label="Transfer-Conf DTMF 2:" type="text" />
      <Input label="Transfer-Conf Number 2:" type="text" />
      <Input label="Transfer-Conf Number 3:" type="text" />
      <Input label="Transfer-Conf Number 4:" type="text" />
      <Input label="Transfer-Conf Number 5:" type="text" />

      <Input
        label="Timer Action:"
        type="select"
        defaultValue="NONE"
        options={[{ label: "NONE", value: "NONE" }]}
      />

      <Input label="Timer Action Message:" type="text" />
      <Input label="Timer Action Seconds:" type="text" defaultValue="-1" />
      <Input label="Timer Action Destination:" type="text" />
      <div className="lg:col-span-2  rounded-md grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <Input label="Drop Call Seconds:" type="text" defaultValue="360" />
        <Input
          label="Drop Seconds Override Container:"
          type="select"
          defaultValue="DISABLED"
          options={[{ label: "DISABLED", value: "DISABLED" }]}
        />
        <Input
          label="Drop Action:"
          type="select"
          defaultValue="MESSAGE"
          options={[{ label: "MESSAGE", value: "MESSAGE" }]}
        />
        <Input
          label="Drop Lead Reset:"
          type="select"
          defaultValue="N"
          options={[
            { label: "Y", value: "Y" },
            { label: "N", value: "N" },
          ]}
        />
        <Input label="Drop Exten:" type="text" defaultValue="8307" />
        <Input label="Voicemail:" type="text" placeholder="voicemail chooser" />
        <Input
          label="Drop Transfer Group:"
          type="select"
          defaultValue="---NONE---"
          options={[{ label: "---NONE---", value: "---NONE---" }]}
        />
        <Input
          label="Drop Call Menu:"
          type="select"
          defaultValue=""
          options={[{ label: "", value: "" }]}
        />
      </div>
    </div>
  );
};

export default BasicGroupInfo;