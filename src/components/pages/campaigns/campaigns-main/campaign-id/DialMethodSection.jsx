import Input from '@/components/common/Input'
import React from 'react'

const DialMethodSection = () => {
  return (
    <div>
      <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 font-lexend pl-2">
            Dial Method & Auto Dial Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default DialMethodSection
