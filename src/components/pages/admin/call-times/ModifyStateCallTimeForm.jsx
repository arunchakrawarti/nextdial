"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";

const ModifyStateCallTimeForm = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white border border-light rounded-2xl overflow-hidden mt-5">
      {/* Header */}
      <div className="px-4 sm:px-6 py-5 border-b border-light">
        <h2 className="heading font-lexend">Modify A State Call Time</h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr] gap-6 mb-6 items-end">
          <div>
            <label className="text-[16px] sm:text-[18px] font-medium text-dark">
              Call Time ID
            </label>
          </div>

          <div>
            <p className="text-[18px] sm:text-[20px] font-semibold text-dark">
              alabama
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <Input label="State Call Time State" type="text" defaultValue="AL" />

          <Input
            label="State Call Time Name"
            type="text"
            defaultValue="Alabama 8am-8pm and Sunday"
          />

          <Input
            label="State Call Time Comments"
            type="text"
            placeholder="Enter comments"
          />

          <Input
            label="Admin User Group"
            type="select"
            defaultValue="ALL"
            options={[
              {
                label: "---ALL---",
                value: "ALL",
              },
              {
                label: "Admin",
                value: "admin",
              },
              {
                label: "Agent",
                value: "agent",
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input label="Default Start" type="text" defaultValue="800" />

          <Input label="Default Stop" type="text" defaultValue="2000" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Input label="Sunday Start" type="text" defaultValue="2400" />

          <Input label="Sunday Stop" type="text" defaultValue="2400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Input label="Monday Start" type="text" defaultValue="0" />

          <Input label="Monday Stop" type="text" defaultValue="0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Input label="Tuesday Start" type="text" defaultValue="0" />

          <Input label="Tuesday Stop" type="text" defaultValue="0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Input label="Wednesday Start" type="text" defaultValue="0" />

          <Input label="Wednesday Stop" type="text" defaultValue="0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Input label="Thursday Start" type="text" defaultValue="0" />

          <Input label="Thursday Stop" type="text" defaultValue="0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <Input label="Friday Start" type="text" defaultValue="0" />

          <Input label="Friday Stop" type="text" defaultValue="0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Input label="Saturday Start" type="text" defaultValue="0" />

          <Input label="Saturday Stop" type="text" defaultValue="0" />
        </div>
        <div className="flex justify-center mb-14">
          <Button variant="gradient">SUBMIT</Button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr_auto] gap-6 items-end">
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-medium text-dark leading-8 font-lexend">
              Active Outbound Holiday Definitions for this Record:
            </h3>
          </div>

          <Input
            label="Add Outbound Holiday Rule"
            type="select"
            defaultValue=""
            options={[
              {
                label: "Select Holiday",
                value: "",
              },
              {
                label: "Christmas",
                value: "christmas",
              },
              {
                label: "New Year",
                value: "newyear",
              },
            ]}
          />

          <Button variant="gradient" className="w-full xl:w-auto">
            SUBMIT
          </Button>
        </div>
      </div>
      <div className="border-t border-light bg-white px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
            className="text-primary hover:underline text-[16px] sm:text-[18px] font-semibold uppercase text-left font-lexend"
          >
            DELETE THIS STATE CALL TIME DEFINITION
          </button>
          {showDeleteConfirm && (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 sm:p-5 space-y-3">
              <h3 className="text-[15px] sm:text-[17px] font-bold uppercase font-lexend text-red-700">
                STATE CALL TIME DELETION CONFIRMATION: alabama
              </h3>

              <Link href="/admin/call-times">
                <button className="text-primary hover:underline text-sm sm:text-base font-medium text-left font-lexend">
                  Click here to delete state call time alabama
                </button>
              </Link>
            </div>
          )}
          <Link href="/report/admin-change">
            <button className="text-primary hover:underline text-[16px] sm:text-[18px] text-left font-lexend">
              Click here to see Admin changes to this call time
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyStateCallTimeForm;
