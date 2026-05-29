"use client";
import React from "react";
import Input from "@/components/common/Input";
import OverlayModal from "@/components/common/OverlayModal";
import Button from "@/components/common/Button";

export default function Reportoption({ isOpen, onClose }) {
  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      showCloseIcon={true}
      modalClass="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
    >
      <div className="p-6 font-lexend">
        <div className="mb-6 border-b border-gray-100 pb-4">
          <h2 className="heading font-lexend">
            Report Display Options
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Configure your real-time dashboard view options
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-[250px] overflow-x-auto p-2">
            <Input
              label="Select Campaigns"
              type="select"
              defaultValue="ALL-ACTIVE - outbound - outbound"
              options={[
                "ALL-ACTIVE - outbound - outbound",
                "CAMP_A - inbound - marketing",
              ]}
            />

            <Input
              label="Select User Groups"
              type="select"
              defaultValue="ALL-GROUPS - All user groups"
              options={[
                "ALL-GROUPS - All user groups",
                "ADMIN - VICIDIAL ADMINISTRATORS",
                "agent - agent",
              ]}
            />

            <Input
              label="Select In-Groups"
              type="select"
              defaultValue="ALL-INGROUPS -"
              options={[
                "ALL-INGROUPS -",
                "12345- Inbound_Testing",
                "AGENTDIRECT- Single Agent Direct Queue",
                "AGENTDIRECT_CHAT- Agent Direct Queue",
              ]}
            />

            <Input
              label="Screen Refresh Rate"
              type="select"
              defaultValue="40 seconds"
              options={["40 seconds", "30 seconds", "20 seconds", "10 seconds"]}
            />

            <Input
              label="Inbound"
              type="select"
              defaultValue="Yes"
              options={["Yes", "No"]}
            />

            <Input
              label="Monitor"
              type="select"
              defaultValue="NONE"
              options={["NONE", "LISTEN", "BARGE"]}
            />

            <Input label="Phone" type="text" placeholder="" />

            <Input
              label="Dialable Leads Alert"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Show Drop In-Group Row"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Inbound SLA Stats"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Show Cust. Phone Code"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Show Carrier Stats"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Agent Time Stats"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Agent Latency"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Parked Call Stats"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="In-Group Color Override"
              type="select"
              defaultValue="NO"
              options={["NO", "YES"]}
            />

            <Input
              label="Display As"
              type="select"
              defaultValue="HTML"
              options={["HTML", "TEXT"]}
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-6">
            <Button variant="gradient" onClick={onClose}>
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </OverlayModal>
  );
}
