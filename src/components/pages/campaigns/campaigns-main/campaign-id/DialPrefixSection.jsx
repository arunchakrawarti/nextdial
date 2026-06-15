import Input from '@/components/common/Input'
import React from 'react'

const DialPrefixSection = () => {
  return (
    <div>
      <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Dial Prefix, Call Time & Extensions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default DialPrefixSection
