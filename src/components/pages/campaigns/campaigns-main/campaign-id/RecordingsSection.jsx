import Input from "@/components/common/Input";
import React from "react";

const RecordingsSection = () => {
  return (
    <div>
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 font-lexend border-blue-500 pl-2">
          Campaign Recordings & Comments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Campaign Rec exten" placeholder="8309" type="text" />
          <Input
            label="Campaign Recording"
            type="select"
            options={["ALLFORCE", "ONDEMAND", "NEVER"]}
          />

          <Input
            label="Campaign Rec Filename"
            placeholder="FULLDATE_CUSTPHONE"
            type="text"
          />
          <Input label="Recording Delay" placeholder="0" type="text" />
          <Input
            label="Routing Initiated Recording"
            type="select"
            options={["Y", "N"]}
          />
          <Input
            label="Call Notes Per Call"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />
          <Input
            label="Per Call Notes Required"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />
          <Input
            label="Comments All Tabs"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />
          <Input
            label="Comments Dispo Screen"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />
          <Input
            label="Comments Callback Screen"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />
          <Input
            label="QC Comments History"
            type="select"
            options={["CLICK", "ALWAYS"]}
          />
          <Input
            label="Hide Call Log Info"
            type="select"
            options={["N", "Y"]}
          />
          <Input label="Call Log View Days" placeholder="0" type="text" />
        </div>
      </div>
    </div>
  );
};

export default RecordingsSection;
