"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";

const ModifyScreenColors = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] =
    useState(false);

  return (
    <div className="w-full bg-white border border-light rounded-2xl overflow-hidden mt-5">
      
      {/* Header */}
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend break-words">
          MODIFY SCREEN COLORS: basic_orange
        </h2>
      </div>

      {/* Main Section */}
      <div className="p-4 sm:p-6 lg:p-8">

        {/* Color ID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <Input
            label="Colors ID"
            type="text"
            defaultValue="basic_orange"
          />

          <Input
            label="Colors Name"
            type="text"
            defaultValue="basic orange"
          />

          <Input
            label="Active"
            type="select"
            defaultValue="Y"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
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
                label: "Support",
                value: "support",
              },
            ]}
          />

          <Input
            label="Web Logo"
            type="select"
            defaultValue="default_new"
            options={[
              {
                label: "default_new",
                value: "default_new",
              },
              {
                label: "logo_dark",
                value: "logo_dark",
              },
            ]}
          />

          <Input
            label="Menu Background"
            type="text"
            defaultValue="#804d00"
          />

          <Input
            label="Frame Background"
            type="text"
            defaultValue="#ffebcc"
          />

          <Input
            label="Standard Row 1 Background"
            type="text"
            defaultValue="#ffcc80"
          />

          <Input
            label="Standard Row 2 Background"
            type="text"
            defaultValue="#ffd699"
          />

          <Input
            label="Standard Row 3 Background"
            type="text"
            defaultValue="#ffcc80"
          />

          <Input
            label="Standard Row 4 Background"
            type="text"
            defaultValue="#ffd699"
          />

          <Input
            label="Standard Row 5 Background"
            type="text"
            defaultValue="#ffcc80"
          />

          <Input
            label="Alternate Row 1 Background"
            type="text"
            defaultValue="#bdffbd"
          />

          <Input
            label="Alternate Row 2 Background"
            type="text"
            defaultValue="#99ff99"
          />

          <Input
            label="Alternate Row 3 Background"
            type="text"
            defaultValue="#ccffcc"
          />

          <Input
            label="Button Color"
            type="text"
            defaultValue="#efefef"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button
            variant="gradient"
            className="w-full sm:w-auto px-10 py-3"
          >
            SUBMIT
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col items-start sm:items-center gap-4">

          {/* Delete Button */}
          <button
            type="button"
            onClick={() =>
              setShowDeleteConfirm(
                !showDeleteConfirm
              )
            }
            className="text-red-600 hover:text-red-700 hover:underline text-sm font-bold uppercase tracking-wide transition-colors"
          >
            DELETE THIS SCREEN COLOR
          </button>

          {showDeleteConfirm && (
  <div className="w-full border-light bg-white rounded-xl p-4 sm:p-5 space-y-3">

    <h1 className="text-sm sm:text-base font-bold uppercase text-black tracking-wide">
      SCREEN COLOR DELETION CONFIRMATION:
      basic_orange
    </h1>

    <Link href="/admin/screen-color">
    <p className="text-sm sm:text-base text-primary font-medium">
      Click here to delete screen color
      basic_orange
    </p>
    </Link>

  </div>
)}
          <Link href="/report/admin-change">
            <span className="text-primary hover:underline text-sm font-medium text-left sm:text-center inline-block cursor-pointer">
              Click here to see Admin changes to
              this screen color
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyScreenColors;