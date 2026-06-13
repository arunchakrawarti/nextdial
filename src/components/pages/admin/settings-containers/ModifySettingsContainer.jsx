"use client";

import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ModifySettingsContainer = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen py-5">
      <div className="w-full border border-gray-300 bg-white overflow-hidden rounded-2xl">
        <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-white">
          <h2 className="text-base sm:text-lg md:text-xl text-dark lg:text-2xl font-semibold uppercase break-words">
            MODIFY SETTINGS CONTAINER:
            <span className="ml-2 text-primary">
              EXAMPLE_VID_PROMPT_SPECIAL
            </span>
          </h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Input
                label="Container ID"
                value="EXAMPLE_VID_PROMPT_SPECIAL"
                disabled
                className="w-full"
              />
              <Input
                label="Container Notes"
                defaultValue="Example Call Menu VID Special Container settings"
                className="w-full"
              />

          
              <Input
                type="select"
                label="Container Type"
                options={[
                  {
                    label: "CM_VIDPROMPT_SPECIAL",
                    value: "CM_VIDPROMPT_SPECIAL",
                  },
                  {
                    label: "AUDIO_CONTAINER",
                    value: "AUDIO_CONTAINER",
                  },
                  {
                    label: "TEXT_CONTAINER",
                    value: "TEXT_CONTAINER",
                  },
                ]}
                className="w-full"
              />

              {/* Admin User Group */}
              <Input
                type="select"
                label="Admin User Group"
                options={[
                  {
                    label: "---ALL---",
                    value: "ALL",
                  },
                  {
                    label: "ADMIN",
                    value: "ADMIN",
                  },
                  {
                    label: "SUPPORT",
                    value: "SUPPORT",
                  },
                  {
                    label: "SALES",
                    value: "SALES",
                  },
                ]}
                className="w-full"
              />
            </div>

            <div className="mt-5">
              <Input
                type="textarea"
                label="Container Entry"
                rows={16}
                defaultValue={`list_ingroup => 102,TEST_IN2
list_ingroup => 103,TEST_IN3
list_ingroup => 104,TEST_IN4
default_ingroup => TEST_IN5
not_found_action => new_lead
new_lead_ingroup => TEST_IN`}
                className="w-full"
              />
            </div>

    
            <div className="flex justify-center sm:justify-end mt-8">
              <Button variant="gradient" className="px-8 sm:px-10 py-2.5">
                SUBMIT
              </Button>
            </div>
          </div>
        </div>

  
        <div className="bg-white border-t border-gray-200 py-8 sm:py-10 px-4">
          <div className="flex flex-col items-center gap-5">
          
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
              className="text-primary text-base sm:text-lg md:text-xl font-bold hover:underline uppercase text-center"
            >
              DELETE SETTINGS CONTAINER
            </button>
            {showDeleteConfirm && (
              <div className="w-full max-w-2xl border border-gray-200 bg-gray-50 rounded-2xl p-5 text-center space-y-3">
                <h4 className="text-red-600 font-bold text-base sm:text-lg uppercase">
                  Confirm Delete
                </h4>

                <p className="text-primary text-sm sm:text-base">
                  Are you sure you want to delete this settings container?
                </p>

                <Link href="/admin/setting-container">
                  <button className="text-dark font-semibold hover:underline text-sm sm:text-base">
                    Click here to confirm delete
                  </button>
                </Link>
              </div>
            )}
            <Link href="/report/admin-change">
              <span className="text-primary font-semibold hover:underline cursor-pointer text-center text-sm sm:text-base">
                Click here to see Admin changes to this Settings Container
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifySettingsContainer;
