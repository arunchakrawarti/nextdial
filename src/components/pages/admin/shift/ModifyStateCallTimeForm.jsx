"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import Link from "next/link";
import Input from "@/components/common/Input";

const ModifyStateCallTimeForm = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-gray-50">
        <h2 className="heading uppercase">
          Modify A State Call Time
        </h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-[15px] sm:text-[17px] font-semibold text-dark">
            Call Time ID:
          </span>

          <p className="text-[18px] sm:text-[20px] font-bold text-dark">
            alabama
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <Input
            label="State Call Time State"
            type="text"
            defaultValue="AL"
          />

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
              { label: "---ALL---", value: "ALL" },
              { label: "Admin", value: "admin" },
              { label: "Agent", value: "agent" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Default Start"
            type="text"
            defaultValue="800"
          />

          <Input
            label="Default Stop"
            type="text"
            defaultValue="2000"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Sunday Start"
            type="text"
            defaultValue="2400"
          />

          <Input
            label="Sunday Stop"
            type="text"
            defaultValue="2400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Monday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Monday Stop"
            type="text"
            defaultValue="0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Tuesday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Tuesday Stop"
            type="text"
            defaultValue="0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Wednesday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Wednesday Stop"
            type="text"
            defaultValue="0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Thursday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Thursday Stop"
            type="text"
            defaultValue="0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Friday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Friday Stop"
            type="text"
            defaultValue="0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Saturday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Saturday Stop"
            type="text"
            defaultValue="0"
          />
        </div>
        <div className="flex justify-end pt-4">
          <Button variant="gradient">
            SUBMIT
          </Button>
        </div>
        <h1 className="text-dark font-lexend">User Groups Using This Shift</h1>
      </div>
      <div className="border-t border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() =>
              setShowDeleteConfirm(!showDeleteConfirm)
            }
            className="text-red-600 hover:underline text-left text-[15px] sm:text-[16px] font-bold uppercase"
          >
            DELETE THIS STATE CALL TIME DEFINITION
          </button>
          {showDeleteConfirm && (
            <div className="border border-red-200 bg-red-50 rounded-xl p-4 space-y-3">

              <h3 className="text-[14px] sm:text-[15px] font-bold uppercase text-red-700">
                SHIFT DELETION CONFIRMATION: 24HRMIDNIGHT
              </h3>

              <Link href="/admin/shift">
                <span className="text-blue-600 hover:underline text-[14px] sm:text-[15px] cursor-pointer">
                  Click here to delete shift 24HRMIDNIGHT
                </span>
              </Link>
            </div>
          )}
          <Link href="/report/admin-change">
            <span className="text-blue-600 hover:underline text-[15px] sm:text-[16px] cursor-pointer">
              Click here to see Admin changes to this shift
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyStateCallTimeForm;