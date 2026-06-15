import Input from "@/components/common/Input";
import React from "react";

const CallbacksUrlsSection = () => {
  return (
    <div>
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
          Callbacks, Custom URLs & Blind Monitor Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Timer Alt Seconds" placeholder="0" type="text" />
          <Input
            label="Agent Screen Clipboard Copy"
            type="select"
            options={["NONE"]}
          />
          <Input
            label="Group Alias Allowed"
            type="select"
            options={["N", "Y"]}
          />
          <Input label="CRM Popup Login" type="select" options={["N", "Y"]} />

          <Input
            label="CRM Popup Address"
            placeholder="Enter URL"
            type="text"
          />

          <Input label="Start Call URL" placeholder="Enter URL" type="text" />

          <Input label="Dispo Call URL" placeholder="Enter URL" type="text" />

          <Input
            label="No Agent Call URL"
            placeholder="Enter URL"
            type="text"
          />

          <Input label="Extension Append CID" placeholder="N" type="text" />
          <Input
            label="Blind Monitor Warning"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />

          <Input
            label="Blind Monitor Notice"
            placeholder="Someone is blind monitoring your session"
            type="text"
          />

          <Input
            label="Blind Monitor Filename"
            placeholder="audio chooser"
            type="text"
          />

          <Input label="Custom 1" placeholder="" type="text" />
          <Input label="Custom 2" placeholder="" type="text" />
          <Input label="Custom 3" placeholder="" type="text" />
          <Input label="Custom 4" placeholder="" type="text" />
          <Input label="Custom 5" placeholder="" type="text" />
          <Input
            label="Default Transfer Group"
            type="select"
            options={["---NONE---"]}
          />
          <Input
            label="Agent Transfer In-Group Validation"
            type="select"
            options={["N", "Y"]}
          />
          <Input
            label="Transfer In-Group Sort Order"
            type="select"
            options={["GROUP_ID_UP", "GROUP_ID_DOWN"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CallbacksUrlsSection;
