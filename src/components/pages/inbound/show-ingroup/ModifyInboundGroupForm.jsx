"use client";
import React from "react";
import BasicGroupInfo from "./BasicGroupInfo";
import QueueAndCallbackSettings from "./QueueAndCallbackSettings";
import AdvancedGroupSettings from "./AdvancedGroupSettings";
import Button from "@/components/common/Button"
import AgentRanksTable from "./AgentRanksTable";
import InboundGroupInfo from "./InboundGroupInfo";


const ModifyInboundGroupForm = () => {
  return (
    <div>
      <div className="bg-white rounded-lg p-6 mt-5 border border-gray-200">
      <div className="mb-6 border-b pb-4">
        <h2 className="heading font-lexend text-xl font-bold text-gray-800">
          MODIFY A GROUPS RECORD: AGENTDIRECT
        </h2>
      </div>

      <form className="space-y-8">
        <BasicGroupInfo />
        <QueueAndCallbackSettings />
        <AdvancedGroupSettings />
        <div className="flex justify-end mt-6 border-t pt-6">
          <Button variant="gradient" className="px-24 py-3 text-base">
            Submit
          </Button>
        </div>
      </form>
    </div>
      <AgentRanksTable/>
      <InboundGroupInfo/>
    </div>
  );
};

export default ModifyInboundGroupForm;