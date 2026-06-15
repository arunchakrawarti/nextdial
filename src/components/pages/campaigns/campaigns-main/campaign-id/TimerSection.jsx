import Input from '@/components/common/Input'
import React from 'react'

const TimerSection = () => {
  return (
    <div>
       <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 font-lexend pl-2">
            Timer & Scheduled Callbacks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default TimerSection
