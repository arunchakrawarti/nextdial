"use client";
import React from "react";
import Input from "@/components/common/Input";
import CommunicationOverrides from "./CommunicationOverrides";
import WebOverride from "./WebOverride";
import MiscSettings from "./MiscSettings";
import ListSummaryDashboard from "./ListSummaryDashboard";
import ModifyListRecord from "./ModifyListRecord";
import ListActions from "./ListActions";

const ModufyInput = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border-light overflow-hidden shadow-sm">
        <div className="px-4 py-2.5 border-b border-slate-200">
          <h3 className="text-xs font-bold text-dark uppercase tracking-wider">
            Basic Information
          </h3>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="space-y-6">
            <Input
              label="List ID:"
              type="text"
              defaultValue="998"
            />

            <Input label="List Description:" placeholder="" type="text" />

            <Input label="Active:" type="select" options={["N", "Y"]} />

            <Input label="Reset Times:" placeholder="" type="text" />

            <Input
              label="Expiration Date:"
              type="date"
              defaultValue="2099-12-31"
            />

            <Input label="Audit Comments:" type="select" options={["N", "Y"]} />

            <Input
              label="List Last Call Date:"
              type="text"
              defaultValue="2026-04-23 13:59:34"
            />
          </div>
          <div className="space-y-6">
            <Input
              label="List Name:"
              placeholder=""
              type="text"
              defaultValue="Default Manual list"
            />

            <Input
              label="Campaign:"
              type="select"
              options={["TESTCAMP", "CAMPAIGN_A", "CAMPAIGN_B"]}
            />

            <Input
              label="Reset Lead-Called-Status for this list:"
              type="select"
              options={["N", "Y"]}
            />

            <div className="flex gap-4 items-end w-full">
              <div className="flex-1">
                <Input
                  label="Daily Reset Limit:"
                  type="text"
                  defaultValue="-1"
                />
              </div>
              <span className="text-sm italic text-slate-500 pb-3 font-normal whitespace-nowrap">
                Resets Today: 0
              </span>
            </div>

            <Input
              label="Local Call Time:"
              type="select"
              options={["Campaign - Use Campaign Settings", "Local Time Only"]}
            />

            <Input
              label="List Change Date:"
              type="text"
              defaultValue="2026-05-27 15:12:02"
              disabled
              className="bg-slate-50 cursor-not-allowed font-medium text-slate-600"
            />
          </div>
        </div>
      </div>

      <CommunicationOverrides />
      <WebOverride />
      <MiscSettings />
      <ListSummaryDashboard/>
      <ModifyListRecord/>
      <ListActions/>
    </div>
  );
};

export default ModufyInput;
