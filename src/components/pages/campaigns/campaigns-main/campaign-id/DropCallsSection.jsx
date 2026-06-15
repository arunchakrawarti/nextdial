import Input from '@/components/common/Input'
import React from 'react'


const DropCallsSection = () => {
  return (
    <div>
      <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 font-lexend pl-2">
            Drop Calls, Dispo & Dead Calls
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Drop Call Seconds" placeholder="5" type="text" />
            <Input label="Drop Action" type="select" options={["AUDIO", "VOICEMAIL"]} />
            <Input label="Safe Harbor Exten" placeholder="8307" type="text" />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Safe Harbor Audio" placeholder="buzz" type="text" />
              </div>
            </div>

            <Input label="Safe Harbor Audio Field" type="select" options={["DISABLED"]} />
            <Input label="Safe Harbor Call Menu" type="select" options={["---NONE---"]} />
            
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input label="Voicemail" placeholder="Enter voicemail" type="text" />
              </div>
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
    </div>
  )
}

export default DropCallsSection
