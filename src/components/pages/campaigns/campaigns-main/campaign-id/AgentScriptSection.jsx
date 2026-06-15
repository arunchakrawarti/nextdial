import Input from '@/components/common/Input'
import React from 'react'

const AgentScriptSection = () => {
  return (
    <div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
            Agent Search, Scripts & AMD Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  )
}

export default AgentScriptSection
