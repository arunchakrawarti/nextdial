import Input from '@/components/common/Input'
import React from 'react'

const TransferSection = () => {
  return (
    <div>
      <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Transfer & 3-Way Call Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default TransferSection
