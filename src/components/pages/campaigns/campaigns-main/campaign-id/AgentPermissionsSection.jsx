import Input from '@/components/common/Input'
import React from 'react'

const AgentPermissionsSection = () => {
  return (
    <div>
       <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2 font-lexend">
            Agent Pause, DNC & Permissions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default AgentPermissionsSection
