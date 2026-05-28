"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const Survey = () => {
  return (
    <div className="bg-white rounded-lg p-6 border-light w-full mt-5">
      <div className="mb-6">
        <h2 className="font-bold text-dark text-2xl font-lexend tracking-wide uppercase">
          Survey Settings for This Campaign
        </h2>
        <p className="text-gray-600 font-lexend text-md mt-1">
          Configure all survey behavior and audio files
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    
        <Input 
          label="Survey First Audio File" 
          type="text" 
          defaultValue="US_pol_survey_hello" 
        />
        <Input 
          label="Survey DTMF Digits" 
          type="text" 
          defaultValue="1238" 
        />
        <Input 
          label="Survey Not Interested Digit" 
          type="text" 
          defaultValue="8" 
        />
        <Input 
          label="Survey Wait Seconds" 
          type="text" 
          defaultValue="10" 
        />
        <Input 
          label="Survey Opt-in Audio File" 
          type="text" 
          defaultValue="US_pol_survey_transfer" 
        />
        <Input 
          label="Survey Not Interested Audio File" 
          type="text" 
          defaultValue="US_thanks_no_contact" 
        />
        <Input 
          label="Survey Method" 
          type="select" 
          options={["AGENT_XFER"]} 
          defaultValue="AGENT_XFER" 
        />
        <Input 
          label="Survey No-Response Action" 
          type="select" 
          options={["OPTIN"]} 
          defaultValue="OPTIN" 
        />
        <Input 
          label="Survey Not Interested Status" 
          type="select" 
          options={["NI - Not Interested"]} 
          defaultValue="NI - Not Interested" 
        />
        <Input 
          label="Survey Third Digit" 
          type="text" 
          defaultValue="" 
        />
        <Input 
          label="Survey Third Audio File" 
          type="text" 
          defaultValue="US_thanks_no_contact" 
        />
        <Input 
          label="Survey Third Status" 
          type="text" 
          defaultValue="NI" 
        />
        <Input 
          label="Survey Third Extension" 
          type="text" 
          defaultValue="8300" 
        />
        <Input 
          label="Survey Fourth Digit" 
          type="text" 
          defaultValue="" 
        />
        <Input 
          label="Survey Fourth Audio File" 
          type="text" 
          defaultValue="US_thanks_no_contact" 
        />
        <Input 
          label="Survey Fourth Status" 
          type="text" 
          defaultValue="NI" 
        />
        <Input 
          label="Survey Fourth Extension" 
          type="text" 
          defaultValue="8300" 
        />
        <Input 
          label="Survey Response Digit Map" 
          type="text" 
          defaultValue="1-DEMOCRAT|2-REPUBLICAN|3-INDEP" 
        />
        <Input 
          label="Survey Survey Xfer Extension" 
          type="text" 
          defaultValue="8300" 
        />
        <Input 
          label="Survey Campaign Recording Directory" 
          type="text" 
          defaultValue="/home/survey" 
        />
        <Input 
          label="Voicemail" 
          type="select" 
          options={["Select voicemail"]} 
          defaultValue="Select voicemail" 
        />
        <Input 
          label="Survey Call Menu" 
          type="text" 
          defaultValue="" 
        />

        <Input 
          label="Survey Recording" 
          type="select" 
          options={["Y", "N"]} 
          defaultValue="N" 
        />
        <div className="hidden md:block"></div>

      </form>

      <div className="flex mt-8 justify-end">
        <Button 
          variant="gradient" 
          className="px-10"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Survey;