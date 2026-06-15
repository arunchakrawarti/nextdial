import Input from '@/components/common/Input'
import React from 'react'

const QueueManualDialSection = () => {
  return (
    <div>
       <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 font-lexend pl-2">
            Queue Display & Manual Dial Customizations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default QueueManualDialSection
