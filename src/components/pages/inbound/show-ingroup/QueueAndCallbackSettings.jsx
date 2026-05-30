"use client";
import React from "react";
import Input from "@/components/common/Input";

const QueueAndCallbackSettings = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 border-t pt-6">
      <Input
        label="Call Time:"
        type="select"
        defaultValue="24hours"
        options={[{ label: "24hours - default 24 hours calling", value: "24hours" }]}
      />

      <Input label="Action Transfer CID:" type="text" defaultValue="CUSTOMER" />
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input
          label="After Hours Action:"
          type="select"
          defaultValue="MESSAGE"
          options={[{ label: "MESSAGE", value: "MESSAGE" }]}
        />
        <Input
          label="After Hours Lead Reset:"
          type="select"
          defaultValue="N"
          options={[
            { label: "Y", value: "Y" },
            { label: "N", value: "N" },
          ]}
        />
        <Input label="After Hours Message Filename:" type="text" defaultValue="vm-goodbye" />
        <Input label="After Hours Extension:" type="text" defaultValue="8300" />
        <Input label="After Hours Voicemail:" type="text" />
        <Input
          label="After Hours Transfer Group:"
          type="select"
          defaultValue="---NONE---"
          options={[{ label: "---NONE---", value: "---NONE---" }]}
        />
        <Input
          label="After Hours Call Menu:"
          type="select"
          defaultValue=""
          options={[{ label: "", value: "" }]}
        />
      </div>

      <Input
        label="No Agents No Queueing:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />
      <Input
        label="No Agent No Queue Action:"
        type="select"
        defaultValue="MESSAGE"
        options={[{ label: "MESSAGE", value: "MESSAGE" }]}
      />
      <Input label="No Agent No Queue Delay:" type="text" defaultValue="0" />
      <Input
        label="No Agent No Queue Lead Reset:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />

      <Input label="Audio File:" type="text" defaultValue="nbdy-avail-to-take-call|vm-goodbye" />
      <Input
        label="In-Queue No Agents Check:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />
      <Input
        label="In-Queue No Agents Pause Exceptions:"
        type="select"
        defaultValue="DISABLED"
        options={[{ label: "DISABLED", value: "DISABLED" }]}
      />

      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input
          label="Areacode Filter:"
          type="select"
          defaultValue="DISABLED"
          options={[{ label: "DISABLED", value: "DISABLED" }]}
        />
        <Input label="Areacode Filter Seconds:" type="text" defaultValue="10" />
        <Input
          label="Areacode Filter Action:"
          type="select"
          defaultValue="MESSAGE"
          options={[{ label: "MESSAGE", value: "MESSAGE" }]}
        />
        <Input label="Audio File (Filter):" type="text" defaultValue="nbdy-avail-to-take-call|vm-goodbye" />
      </div>

      {/* Max Calls Section */}
      <div className="lg:col-span-2  grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input
          label="Max Calls Method:"
          type="select"
          defaultValue="DISABLED"
          options={[{ label: "DISABLED", value: "DISABLED" }]}
        />
        <Input label="Max Calls Count:" type="text" defaultValue="0" />
        <Input
          label="Max Calls Action:"
          type="select"
          defaultValue="NO_AGENT_NO_QUEUE"
          options={[{ label: "NO_AGENT_NO_QUEUE", value: "NO_AGENT_NO_QUEUE" }]}
        />
      </div>

      <Input label="Welcome Message Filename:" type="text" defaultValue="---NONE---" />
      <Input
        label="Play Welcome Message:"
        type="select"
        defaultValue="ALWAYS"
        options={[{ label: "ALWAYS", value: "ALWAYS" }]}
      />
      <Input label="Music On Hold Context:" type="text" defaultValue="default" />
      <Input label="On Hold Prompt Filename:" type="text" defaultValue="generic_hold" />
      <Input label="On Hold Prompt Interval:" type="text" defaultValue="60" />
      <Input
        label="On Hold Prompt No Block:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />
      <Input label="On Hold Prompt Seconds:" type="text" defaultValue="9" />

      <Input
        label="Play Place in Line:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />
      <Input label="Place in Line Caller Number:" type="text" />
      <Input label="Place in Line You Are Next Filename:" type="text" />

      <Input
        label="Play Estimated Hold Time:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />
      <Input label="Calculate Estimated Hold Seconds:" type="text" defaultValue="0" />
      <Input label="Estimated Hold Time Minimum Filename:" type="text" />
      <Input
        label="Estimated Hold Time Minimum Prompt No Block:"
        type="select"
        defaultValue="N"
        options={[
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ]}
      />
      <Input label="Estimated Hold Time Minimum Prompt Seconds:" type="text" defaultValue="10" />
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input label="Wait Time Option:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
        <Input label="Wait Time Second Option:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
        <Input label="Wait Time Third Option:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
        <Input label="Wait Time Option Seconds:" type="text" defaultValue="120" />
        <Input label="Wait Time Option Lead Reset:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
        <Input label="Wait Time Option Extension:" type="text" defaultValue="8300" />
        <Input label="Wait Time Option Callmenu:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
        <Input label="Wait Time Option Voicemail:" type="text" />
        <Input label="Wait Time Option Transfer In-Group:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
        <Input label="Wait Time Option Press Filename:" type="text" defaultValue="to-be-called-back|digits/1" />
        <Input label="Wait Time Option Press No Block:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
        <Input label="Wait Time Option Press Filename Seconds:" type="text" defaultValue="10" />
        <Input label="Wait Time Option After Press Filename:" type="text" defaultValue="vm-hangup" />
        <Input label="Wait Time Option Callback List ID:" type="text" defaultValue="999" />
      </div>

      <Input label="Wait Hold Option Priority:" type="select" defaultValue="WAIT" options={[{ label: "WAIT", value: "WAIT" }]} />
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input label="Estimated Hold Time Option:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
        <Input label="Hold Time Second Option:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
        <Input label="Hold Time Third Option:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
        <Input label="Hold Time Option Seconds:" type="text" defaultValue="360" />
        <Input label="Hold Time Option Lead Reset:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
        <Input label="Hold Time Option Minimum:" type="text" defaultValue="0" />
        <Input label="Hold Time Option Extension:" type="text" defaultValue="8300" />
        <Input label="Hold Time Option Callmenu:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
        <Input label="Hold Time Option Voicemail:" type="text" />
        <Input label="Hold Time Option Transfer In-Group:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
        <Input label="Hold Time Option Press Filename:" type="text" defaultValue="to-be-called-back|digits/1" />
        <Input label="Hold Time Option Press No Block:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
        <Input label="Hold Time Option Press Filename Seconds:" type="text" defaultValue="10" />
        <Input label="Hold Time Option After Press Filename:" type="text" defaultValue="vm-hangup" />
        <Input label="Hold Time Option Callback List ID:" type="text" defaultValue="999" />
      </div>

      <Input label="Callback Queue Expire Hours:" type="text" defaultValue="96" />
      <Input label="Callback Queue Call Time:" type="select" defaultValue="24hours" options={[{ label: "24hours - default 24 hours calling", value: "24hours" }]} />
      <Input label="Callback Queue Dial Filter:" type="select" defaultValue="NONE" options={[{ label: "NONE", value: "NONE" }]} />
      
      <Input label="CID Callback Number Validation:" type="select" defaultValue="NO" options={[{ label: "NO", value: "NO" }]} />
      <Input label="CID Callback Number Invalid Filter Phone Group:" type="select" options={[]} />
      <Input label="CID Callback Number Length:" type="text" defaultValue="10" />
      
      <Input label="CID Callback Number Valid Filename:" type="text" />
      <Input label="CID Callback Number Confirmed Filename:" type="text" />
      <Input label="CID Callback Number Enter Filename:" type="text" />
      <Input label="CID Callback Number You Entered Filename:" type="text" />
      <Input label="CID Callback Number Confirm Filename:" type="text" />
      <Input label="CID Callback Number Invalid Filename:" type="text" />
      <Input label="CID Callback Number Reenter Filename:" type="text" />
      <Input label="CID Callback Number Error Filename:" type="text" />

      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input label="Closing Time Action:" type="select" defaultValue="DISABLED" options={[{ label: "DISABLED", value: "DISABLED" }]} />
        <Input label="Closing Time Now Trigger:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
        <Input label="Closing Time Press Filename:" type="text" />
        <Input label="Closing Time End Filename:" type="text" />
        <Input label="Closing Time Option Lead Reset:" type="select" defaultValue="N" options={[{ label: "N", value: "N" }]} />
        <Input label="Closing Time Option Extension:" type="text" defaultValue="8300" />
        <Input label="Closing Time Option Callmenu:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
        <Input label="Closing Time Option Voicemail:" type="text" />
        <Input label="Closing Time Option Transfer In-Group:" type="select" defaultValue="---NONE---" options={[{ label: "---NONE---", value: "---NONE---" }]} />
        <Input label="Closing Time Option Callback List ID:" type="text" defaultValue="999" />
      </div>
    </div>
  );
};

export default QueueAndCallbackSettings;