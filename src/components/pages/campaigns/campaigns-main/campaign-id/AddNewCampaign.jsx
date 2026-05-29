"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const AddNewCampaign = () => {
  return (
    <div className="bg-white rounded-lg p-6 border border-light max-w-7xl mx-auto my-6">
      <div className="mb-8 border-b pb-4">
        <h2 className="heading font-lexend">
          Add a New Campaign (Complete Settings)
        </h2>
      </div>

      <form  className="space-y-10">
        
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Campaign Identity & Basic Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Campaign ID" placeholder="outbound" type="text" />
            <Input label="Campaign Name" placeholder="outbound" type="text" />
            <Input label="Campaign Description" placeholder="outbound" type="text" />
            <Input label="Campaign Change Date" placeholder="2026-05-28 11:40:18" type="text" disabled />
            <Input label="Campaign Login Date" placeholder="2026-05-20 13:37:15" type="text" disabled />
            <Input label="Campaign Call Date" placeholder="2026-04-23 14:00:02" type="text" disabled />
            <Input label="Active" type="select" options={["Y", "N"]} />
            <Input label="Admin User Group" type="select" options={["agent", "Support", "Manager"]} />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Park Music-on-Hold" placeholder="Enter moh chooser" type="text" />
              </div>
              <Button variant="primary" type="button" className="h-11 px-3 text-xs whitespace-nowrap">moh chooser</Button>
            </div>

            <div className="md:col-span-2">
              <Input label="Web Form" placeholder="Enter Web Form URL" type="text" />
            </div>
            <div className="md:col-span-2">
              <Input label="Web Form Two" placeholder="Enter Web Form Two URL" type="text" />
            </div>
            <Input label="Web Form Target" placeholder="vdcwebform" type="text" />
            
            <Input label="Allow Closers" type="select" options={["N", "Y"]} />
            <Input label="Allow Inbound and Blended" type="select" options={["N", "Y"]} />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Add A Dial Status to Call" type="select" options={["- NONE -", "BUSY", "DISCONNECT"]} />
              </div>
              <Button variant="primary" type="button" className="h-11 px-4">ADD</Button>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Lead & Hopper Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="List Order" type="select" options={["DOWN", "UP", "RANDOM"]} />
            <Input label="List Order Randomize" type="select" options={["N", "Y"]} />
            <Input label="List Order Secondary" type="select" options={["LEAD_ASCEND", "LEAD_DESCEND"]} />
            <Input label="List Mix" type="select" options={["DISABLED - DISABLED"]} />
            <Input label="Lead Filter" type="select" options={["NONE -"]} />
            <Input label="Drop Lockout Time" placeholder="0" type="text" />
            <Input label="Call Count Limit" placeholder="0" type="text" />
            <Input label="Call Count Target" placeholder="3" type="text" />
            <Input label="Call Count Limit Manual Restrict" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Minimum Hopper Level" type="select" options={["50", "10", "20", "100", "200", "500"]} />
            <Input label="Automatic Hopper Level" type="select" options={["N", "Y"]} />
            <Input label="Automatic Hopper Multiplier" type="select" options={["1", "2", "3"]} />
            <Input label="Auto Trim Hopper" type="select" options={["N", "Y"]} />
            <Input label="Hopper VLC Dup Check" type="select" options={["N", "Y"]} />
            <Input label="Manual Dial Hopper Check" type="select" options={["N", "Y"]} />
            <Input label="Force Reset of Hopper" type="select" options={["N", "Y"]} />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Dial Method & Auto Dial Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Dial Method" type="select" options={["RATIO", "MANUAL", "ADAPT_HARD", "ADAPT_TAPERED"]} />
            <Input label="Auto Dial Level" type="select" options={["1", "0", "2", "3", "4"]} />
            <Input label="Auto Dial Level Threshold" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Available Only Tally" type="select" options={["N", "Y"]} />
            <Input label="Available Only Tally Threshold" type="select" options={["DISABLED"]} />
            <Input label="Agent In-Call Tally Seconds Threshold" placeholder="0" type="text" />
            <Input label="Drop Percentage Limit" type="select" options={["3%", "1%", "2%", "5%"]} />
            <Input label="Maximum Adapt Dial Level" placeholder="3.0" type="text" />
            <Input label="Latest Server Time" placeholder="2100" type="text" />
            <Input label="Adapt Percent-Max Percentage" type="select" options={["50%", "100%"]} />
            <Input label="Adapt Intensity Modifier" type="select" options={["0 - Balanced", "1 - Aggressive"]} />
            <Input label="Dial Level Difference Target" type="select" options={["0 --- 0 Balanced"]} />
            <Input label="Dial Level Difference Target Method" type="select" options={["ADAPT_CALC_ONLY"]} />
            <Input label="Concurrent Transfers" type="select" options={["AUTO", "1", "2"]} />
            <Input label="Queue Priority" type="select" options={["50 - Higher", "99 - Highest", "0 - Lowest"]} />
            <Input label="Multiple Campaign Drop Rate Group" type="select" options={["DISABLED"]} />
            <Input label="Inbound Queue No Dial" type="select" options={["DISABLED"]} />
            <Input label="Inbound No-Agents No-Dial" type="select" options={["---DISABLED---"]} />
            <Input label="Inbound No-Agents No-Dial Threshold" placeholder="0" type="text" />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Dial Prefix, Call Time & Extensions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Auto Alt-Number Dialing" type="select" options={["NONE", "ALT_ONLY"]} />
            <Input label="Auto Alt-Number Dialing Threshold" placeholder="0" type="text" />
            <Input label="Next Agent Call" type="select" options={["random", "oldest_call"]} />
            <Input label="Local Call Time" type="select" options={["24hours - default 24 hours calling"]} />
            <Input label="Dial Timeout" placeholder="60" type="text" />
            <Input label="Dial Timeout Lead Container" type="select" options={["DISABLED"]} />
            <Input label="Dial Prefix" placeholder="51" type="text" />
            <Input label="Manual Dial Prefix" placeholder="51" type="text" />
            <Input label="Omit Phone Code" type="select" options={["Y", "N"]} />
            <Input label="Campaign CallerID" placeholder="0000000000" type="text" />
            <Input label="Custom CallerID" type="select" options={["N", "Y"]} />
            <Input label="CID Group" type="select" options={["---DISABLED---"]} />
            <Input label="CID Group Failover" type="select" options={["---DISABLED---"]} />
            <Input label="Routing Extension" placeholder="8368" type="text" />
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Campaign Recordings & Comments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Campaign Rec exten" placeholder="8309" type="text" />
            <Input label="Campaign Recording" type="select" options={["ALLFORCE", "ONDEMAND", "NEVER"]} />
            <div className="md:col-span-2">
              <Input label="Campaign Rec Filename" placeholder="FULLDATE_CUSTPHONE" type="text" />
            </div>
            <Input label="Recording Delay" placeholder="0" type="text" />
            <Input label="Routing Initiated Recording" type="select" options={["Y", "N"]} />
            <Input label="Call Notes Per Call" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Per Call Notes Required" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Comments All Tabs" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Comments Dispo Screen" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Comments Callback Screen" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="QC Comments History" type="select" options={["CLICK", "ALWAYS"]} />
            <Input label="Hide Call Log Info" type="select" options={["N", "Y"]} />
            <Input label="Call Log View Days" placeholder="0" type="text" />
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Agent Search, Scripts & AMD Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Agent Lead Search" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Agent Lead Search Method" type="select" options={["CAMPLISTS_ALL"]} />
            <Input label="Agent Search In-Group List Restrict" type="select" options={["DISABLED"]} />
            <Input label="Script" type="select" options={["-", "Sales Script", "Support Script"]} />
            <Input label="Clear Script" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="User Group Script Override" type="select" options={["DISABLED"]} />
            <Input label="Script Tab Frame Location" type="select" options={["DEFAULT"]} />
            <Input label="Script Tab Height Override" placeholder="0" type="text" />
            <Input label="Clear Form Tab" type="select" options={["ACKNOWLEDGE"]} />
            <Input label="Get Call Launch" type="select" options={["NONE"]} />
            <Input label="Show Confetti" type="select" options={["DISABLED"]} />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Answering Machine Message" placeholder="vm-goodbye" type="text" />
              </div>
              <Button variant="primary" type="button" className="h-11 px-3 text-xs whitespace-nowrap">audio chooser</Button>
            </div>

            <Input label="Voicemail Message Daily Limit" placeholder="0" type="text" />
            <Input label="WaitForSilence Options" placeholder="" type="text" />
            <Input label="Manual VM Status Updates" type="select" options={["ENABLED", "DISABLED"]} />
            <Input label="AM Message Wildcards" type="select" options={["N", "Y"]} />
            <Input label="AMD Type" type="select" options={["AMD", "CPD"]} />
            <Input label="AMD send to Action" type="select" options={["N", "Y"]} />
            <Input label="AMD Agent Route Options" type="select" options={["DISABLED"]} />
            <Input label="CPD AMD Action" type="select" options={["DISABLED"]} />
            <Input label="CPD Unknown Action" type="select" options={["DISABLED"]} />
            <Input label="AMD Inbound Group" type="select" options={["---NONE---"]} />
            <Input label="AMD Call Menu" type="select" options={["---NONE---"]} />
            <Input label="VM Message Group" type="select" options={["---NONE---"]} />
            <Input label="Leave VM No Dispo" type="select" options={["DISABLED"]} />
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Transfer & 3-Way Call Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Transfer-Conf DTMF 1" placeholder="" type="text" />
            <Input label="Transfer-Conf Number 1" placeholder="" type="text" />
            <Input label="Transfer-Conf DTMF 2" placeholder="" type="text" />
            <Input label="Transfer-Conf Number 2" placeholder="" type="text" />
            <Input label="Transfer-Conf Number 3" placeholder="" type="text" />
            <Input label="Transfer-Conf Number 4" placeholder="" type="text" />
            <Input label="Transfer-Conf Number 5" placeholder="" type="text" />
            <Input label="Enable Transfer Presets" type="select" options={["DISABLED", "ENABLED"]} />
            <Input label="Hide Transfer Number to Dial" type="select" options={["DISABLED"]} />
            <Input label="PrePopulate Transfer Preset" type="select" options={["N", "Y"]} />
            <Input label="Quick Transfer Button" type="select" options={["N", "Y"]} />
            <Input label="Transfer-Conf Button Launch" type="select" options={["NONE"]} />
            <Input label="Transfer No Dispo" type="select" options={["DISABLED"]} />
            <Input label="Custom 3-Way Button Transfer" type="select" options={["DISABLED"]} />
            <Input label="3-Way Call Outbound CallerID" type="select" options={["CAMPAIGN"]} />
            <Input label="3-Way Call Dial Prefix" placeholder="" type="text" />
            <Input label="3-Way Volume Buttons" type="select" options={["ENABLED", "DISABLED"]} />
            <Input label="Customer 3-Way Hangup Logging" type="select" options={["ENABLED", "DISABLED"]} />
            <Input label="Customer 3-Way Hangup Seconds" placeholder="5" type="text" />
            <Input label="Customer 3-Way Hangup Action" type="select" options={["NONE"]} />
            <Input label="3-Way Recording Stop" type="select" options={["N", "Y"]} />
            <Input label="3-Way Recording Stop Exception" type="select" options={["DISABLED"]} />
            <Input label="Leave 3-Way Start Recording" type="select" options={["DISABLED"]} />
            <Input label="Leave 3-Way Start Recording Exception" type="select" options={["DISABLED"]} />
            <Input label="Leave 3-Way Stop Recording" type="select" options={["DISABLED"]} />
            <Input label="Hangup Xfer Recording Start" type="select" options={["N", "Y"]} />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Timer & Scheduled Callbacks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Park Call IVR" type="select" options={["DISABLED"]} />
            <Input label="Park Call IVR AGI" placeholder="" type="text" />
            <Input label="Timer Action" type="select" options={["NONE"]} />
            <Input label="Timer Action Message" placeholder="" type="text" />
            <Input label="Timer Action Seconds" placeholder="1" type="text" />
            <Input label="Timer Action Destination" placeholder="" type="text" />
            <Input label="Scheduled Callbacks" type="select" options={["N", "Y"]} />
            <Input label="Scheduled Callbacks Alert" type="select" options={["NONE"]} />
            <Input label="Send Callbacks Email" type="select" options={["N", "Y"]} />
            <Input label="Scheduled Callbacks Count" type="select" options={["ALL_ACTIVE"]} />
            <Input label="Scheduled Callbacks Days Limit" placeholder="0" type="text" />
            <Input label="Scheduled Callbacks Hours Block" placeholder="0" type="text" />
            <Input label="Scheduled Callbacks Calltime Block" type="select" options={["DISABLED"]} />
            <Input label="Scheduled Callbacks Active Limit" placeholder="0" type="text" />
            <Input label="Scheduled Callbacks Active Limit Override" type="select" options={["N", "Y"]} />
            <Input label="Scheduled Callbacks Display Days" placeholder="0" type="text" />
            <Input label="Anyone Callbacks DNC Filter" type="select" options={["DISABLED"]} />
            <Input label="My Callbacks Checkbox Default" type="select" options={["UNCHECKED", "CHECKED"]} />
            <Input label="Show Previous Callback" type="select" options={["ENABLED", "DISABLED"]} />
            <Input label="Scheduled Callbacks Useronly Move Minutes" placeholder="0" type="text" />
            <Input label="Next-Dial My Callbacks" type="select" options={["DISABLED"]} />
            <Input label="Scheduled Callbacks Force Dial" type="select" options={["N", "Y"]} />
            <Input label="Scheduled Callbacks Local Timezones" type="select" options={["---DISABLED---"]} />
            <Input label="Scheduled Callbacks Auto Reschedule" type="select" options={["DISABLED"]} />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Drop Calls, Dispo & Dead Calls
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Drop Call Seconds" placeholder="5" type="text" />
            <Input label="Drop Action" type="select" options={["AUDIO", "VOICEMAIL"]} />
            <Input label="Safe Harbor Exten" placeholder="8307" type="text" />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Safe Harbor Audio" placeholder="buzz" type="text" />
              </div>
              <Button variant="primary" type="button" className="h-11 px-3 text-xs whitespace-nowrap">audio chooser</Button>
            </div>

            <Input label="Safe Harbor Audio Field" type="select" options={["DISABLED"]} />
            <Input label="Safe Harbor Call Menu" type="select" options={["---NONE---"]} />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Voicemail" placeholder="Enter voicemail" type="text" />
              </div>
              <Button variant="primary" type="button" className="h-11 px-3 text-xs whitespace-nowrap">voicemail chooser</Button>
            </div>

            <Input label="Drop Transfer Group" type="select" options={["---NONE---"]} />
            <Input label="Agent Call Hangup Route" type="select" options={["HANGUP"]} />
            <Input label="Agent Hangup In-Group Override" type="select" options={["N", "Y"]} />
            <Input label="Show Hangup Again Link" type="select" options={["ENABLED", "DISABLED"]} />
            <Input label="Disable Dispo Screen" type="select" options={["DISPO_ENABLED"]} />
            <Input label="Disable Dispo Status" placeholder="" type="text" />
            <Input label="Script on top of Dispo" type="select" options={["N", "Y"]} />
            <Input label="Wrap Up Seconds" placeholder="0" type="text" />
            <Input label="Wrap Up Message" placeholder="Wrapup Call" type="text" />
            <Input label="Wrap Up Bypass" type="select" options={["ENABLED", "DISABLED"]} />
            <Input label="Wrap Up After Hotkey" type="select" options={["DISABLED"]} />
            <Input label="Dead Call Trigger Action" type="select" options={["DISABLED"]} />
            <Input label="Dead Call Trigger Seconds" placeholder="0" type="text" />
            <Input label="Dead Call Trigger Repeat" type="select" options={["NO", "YES"]} />
            <Input label="Dead Call Trigger Audio" placeholder="audio chooser" type="text" />
            <Input label="Dead Call Trigger URL" placeholder="" type="text" />
            <Input label="Dead Call Max Seconds" placeholder="0" type="text" />
            <Input label="Dead Call Max Status" placeholder="DCMX" type="text" />
            <Input label="Dead Call to Dispo Only" type="select" options={["DISABLED"]} />
            <Input label="Dead Call Stop Recording" type="select" options={["DISABLED"]} />
            <Input label="Dispo Call Max Seconds" placeholder="0" type="text" />
            <Input label="Dispo Call Max Status" placeholder="DISMX" type="text" />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Agent Pause, DNC & Permissions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Agent Pause Max Seconds" placeholder="0" type="text" />
            <Input label="Agent Pause Max Status" placeholder="PAUSMX" type="text" />
            <Input label="Agent Pause Max Exceptions" type="select" options={["No Pause Codes Lists Found"]} />
            <Input label="Pause Max URL" placeholder="" type="text" />
            <Input label="Agent Ready Max Seconds Logout" placeholder="0" type="text" />
            <Input label="Inbound Manual Dial Agent Forced Ready Seconds" placeholder="0" type="text" />
            <Input label="InMan Agent Forced Ready Override Container" type="select" options={["DISABLED"]} />
            <Input label="Customer Gone Warning Seconds" placeholder="30" type="text" />
            <Input label="Use Internal DNC List" type="select" options={["Y", "N"]} />
            <Input label="Use Campaign DNC List" type="select" options={["N", "Y"]} />
            <Input label="Other Campaign DNC" placeholder="" type="text" />
            <Input label="Agent Pause Codes Active" type="select" options={["N", "Y"]} />
            <Input label="Auto Pause Pre-Call Work" type="select" options={["N", "Y"]} />
            <Input label="Auto Resume Pre-Call Work" type="select" options={["N", "Y"]} />
            <Input label="Auto Pause Pre-Call Code" placeholder="PRECAL" type="text" />
            <Input label="Campaign Stats Refresh" type="select" options={["N", "Y"]} />
            <Input label="Real-Time Agent Time Stats" type="select" options={["CALLS_WAIT_CUST_ACW_PAUSE"]} />
            <Input label="Disable Alter Customer Data" type="select" options={["N", "Y"]} />
            <Input label="Disable Alter Customer Phone" type="select" options={["Y", "N"]} />
            <Input label="Allow No-Hopper-Leads Logins" type="select" options={["Y", "N"]} />
            <Input label="No Hopper Dialing" type="select" options={["N", "Y"]} />
            <Input label="Owner Only Dialing" type="select" options={["NONE"]} />
            <Input label="Owner Populate" type="select" options={["DISABLED"]} />
            <Input label="Agent Display Dialable Leads" type="select" options={["N", "Y"]} />
            <Input label="Agent Screen Labels" type="select" options={["--SYSTEM-SETTINGS--"]} />
            <Input label="Allow Required Fields" type="select" options={["N", "Y"]} />
            <Input label="Status Display Fields" type="select" options={["CALLID"]} />
            <Input label="Status Display In-Group" type="select" options={["ENABLED"]} />
            <Input label="State Descriptions Banner" type="select" options={["---DISABLED---"]} />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Queue Display & Manual Dial Customizations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Agent Display Fields" placeholder="" type="text" />
            <Input label="Agent Screen Time Display" type="select" options={["DISABLED"]} />
            <Input label="Agent Display Queue Count" type="select" options={["Y", "N"]} />
            <Input label="Calls In Queue Count Display 1" type="select" options={["---DISABLED---"]} />
            <Input label="Calls In Queue Count Display 2" type="select" options={["---DISABLED---"]} />
            <Input label="Agent View Calls in Queue" type="select" options={["NONE"]} />
            <Input label="View Calls in Queue Launch" type="select" options={["MANUAL"]} />
            <Input label="Calls in Queue Extra Column 1" type="select" options={["DISABLED"]} />
            <Input label="Calls in Queue Extra Column 2" type="select" options={["DISABLED"]} />
            <Input label="Agent Grab Calls in Queue" type="select" options={["N", "Y"]} />
            <Input label="Agent Call Re-Queue Button" type="select" options={["N", "Y"]} />
            <Input label="Agent Pause After Each Call" type="select" options={["N", "Y"]} />
            <Input label="Agent Pause After Next Call Link" type="select" options={["DISABLED"]} />
            <Input label="Manual Dial Override" type="select" options={["ALLOW_ALL"]} />
            <Input label="Manual Dial Override Field" type="select" options={["ENABLED"]} />
            <Input label="Manual Dial List ID" placeholder="998" type="text" />
            <Input label="Manual Dial Filter" type="select" options={["DNC_ONLY"]} />
            <Input label="Manual Preview Dial" type="select" options={["PREVIEW_AND_SKIP"]} />
            <Input label="Manual Dial Search Checkbox" type="select" options={["SELECTED"]} />
            <Input label="Manual Dial Search Filter" type="select" options={["NONE"]} />
            <Input label="Manual Dial by Lead ID" type="select" options={["N", "Y"]} />
            <Input label="Manual Call Time Check" type="select" options={["DISABLED"]} />
            <Input label="Manual Dial API" type="select" options={["STANDARD"]} />
            <Input label="Manual Dial CID" type="select" options={["CAMPAIGN"]} />
            <Input label="Manual Dial Timeout" placeholder="in seconds" type="text" />
            <Input label="Manual Minimum Attempt Seconds" placeholder="0" type="text" />
            <Input label="Manual Minimum Answer Seconds" placeholder="0" type="text" />
            <Input label="Phone Post Time Difference Alert" type="select" options={["DISABLED"]} />
            <Input label="In-Group Manual Dial" type="select" options={["DISABLED"]} />
            <Input label="In-Group Manual Dial Select" type="select" options={["CAMPAIGN_SELECTED"]} />
            <Input label="Manual Alt Num Dialing" type="select" options={["Y", "N"]} />
          </div>
        </div>

        <hr className="border-gray-100" />
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Callbacks, Custom URLs & Blind Monitor Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Timer Alt Seconds" placeholder="0" type="text" />
            <Input label="Agent Screen Clipboard Copy" type="select" options={["NONE"]} />
            <Input label="Group Alias Allowed" type="select" options={["N", "Y"]} />
            <Input label="CRM Popup Login" type="select" options={["N", "Y"]} />
            <div className="md:col-span-3">
              <Input label="CRM Popup Address" placeholder="Enter URL" type="text" />
            </div>
            <div className="md:col-span-3">
              <Input label="Start Call URL" placeholder="Enter URL" type="text" />
            </div>
            <div className="md:col-span-3">
              <Input label="Dispo Call URL" placeholder="Enter URL" type="text" />
            </div>
            <div className="md:col-span-3">
              <Input label="No Agent Call URL" placeholder="Enter URL" type="text" />
            </div>
            <Input label="Extension Append CID" placeholder="N" type="text" />
            <Input label="Blind Monitor Warning" type="select" options={["DISABLED", "ENABLED"]} />
            <div className="md:col-span-2">
              <Input label="Blind Monitor Notice" placeholder="Someone is blind monitoring your session" type="text" />
            </div>
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Blind Monitor Filename" placeholder="audio chooser" type="text" />
              </div>
              <Button variant="primary" type="button" className="h-11 px-3 text-xs whitespace-nowrap">audio chooser</Button>
            </div>

            <Input label="Custom 1" placeholder="" type="text" />
            <Input label="Custom 2" placeholder="" type="text" />
            <Input label="Custom 3" placeholder="" type="text" />
            <Input label="Custom 4" placeholder="" type="text" />
            <Input label="Custom 5" placeholder="" type="text" />
            <Input label="Default Transfer Group" type="select" options={["---NONE---"]} />
            <Input label="Agent Transfer In-Group Validation" type="select" options={["N", "Y"]} />
            <Input label="Transfer In-Group Sort Order" type="select" options={["GROUP_ID_UP", "GROUP_ID_DOWN"]} />
          </div>
        </div>
        <div className="md:col-span-3 flex justify-end">
          <Button variant="gradient" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCampaign;