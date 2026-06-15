import Input from '@/components/common/Input'
import React from 'react'

const LeadHopperSection = () => {
  return (
    <div>
      <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 font-lexend pl-2">
            Lead & Hopper Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default LeadHopperSection
