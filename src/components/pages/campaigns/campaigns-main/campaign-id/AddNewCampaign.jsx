"use client";
import React from "react";
import Button from "@/components/common/Button";
import IdentitySection from "./IdentitySection";
import LeadHopperSection from "./LeadHopperSection";
import DialMethodSection from "./DialMethodSection";
import DialPrefixSection from "./DialPrefixSection";
import RecordingsSection from "./RecordingsSection";
import AgentScriptSection from "./AgentScriptSection";
import TransferSection from "./TransferSection";
import TimerSection from "./TimerSection";
import DropCallsSection from "./DropCallsSection";
import AgentPermissionsSection from "./AgentPermissionsSection";
import QueueManualDialSection from "./QueueManualDialSection";
import CallbacksUrlsSection from "./CallbacksUrlsSection";

const AddNewCampaign = () => {
  return (
    <div className="bg-white rounded-lg p-6 border border-light">
      <div className="border-b pb-4">
        <h2 className="heading font-lexend">
          Add a New Campaign (Complete Settings)
        </h2>
      </div>
      <form className="space-y-10">
        <IdentitySection />
        <LeadHopperSection />
        <DialMethodSection />
        <DialPrefixSection />
        <RecordingsSection />
        <AgentScriptSection />
        <TransferSection />
        <TimerSection />
        <DropCallsSection />
        <AgentPermissionsSection />
        <QueueManualDialSection />
        <CallbacksUrlsSection />
        <div className="md:col-span-3 flex justify-end">
          <Button variant="gradient" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCampaign;
