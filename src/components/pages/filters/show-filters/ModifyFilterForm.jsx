"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const ModifyFilterForm = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-lg p-6 mt-5 border-light">
        <div className="mb-6">
          <h2 className="heading font-lexend mb-4">
            Modify A Filter
          </h2>
        </div>

        <div className="rounded-lg text-gray-500 mb-6">
          <span className="font-semibold text-gray-600">Filter ID:</span>{" "}
          DROP72HOUR
        </div>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
          <Input
            label="Filter Name"
            type="text"
            defaultValue="UK 72 hour Drop No Call"
          />

          <Input
            label="Filter Comments"
            type="text"
            defaultValue="Prevents dropped calls from being called within 72 hours"
          />

          <Input
            label="Admin User Group"
            type="select"
            defaultValue="agent"
            options={[
              { label: "AGENT", value: "agent" },
              { label: "ADMIN", value: "ADMIN" },
            ]}
          />

          <div></div>

          <div className="lg:col-span-2">
            <Input
              label="Filter SQL"
              type="textarea"
              rows={10}
              defaultValue={`(( (status='DROP') and (last_local_call_time < CONCAT(DATE_ADD(CURDATE(), INTERVAL -3 DAY),' ',CURTIME())) ) or (status != 'DROP') )`}
            />
          </div>

          <div className="lg:col-span-2 flex justify-end mt-4">
            <Button variant="gradient" className="px-20">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-8 pt-5 rounded-xl p-6 border-light space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 max-w-xs">
            <Input
              label="TEST ON CAMPAIGN:"
              type="select"
              defaultValue="outbound"
              options={[
                { label: "outbound - outbound", value: "outbound" },
                { label: "inbound - inbound", value: "inbound" },
              ]}
            />
          </div>

          <Button type="button" variant="gradient" className="mt-6 px-5 py-2.5">
            Submit
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-gray-900 tracking-wide">
            CAMPAIGNS USING THIS FILTER:
          </h3>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-gray-900 tracking-wide">
            USERS USING THIS FILTER:
          </h3>
        </div>

        <div className="space-y-3 pt-2">
          <div>
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
              className="text-primary hover:underline text-sm uppercase tracking-wide font-medium block"
            >
              DELETE THIS FILTER
            </button>
          </div>
          <div>
            <a
              href="/report/admin-change"
              className="text-primary hover:underline text-sm block"
            >
              Click here to see Admin changes to this filter
            </a>
          </div>
          {showDeleteConfirm && (
            <div className="mt-6 pt-4 border-t border-dashed border-red-200 space-y-2 custom-confirmation-wrapper">
              <h3 className="text-sm font-black uppercase text-gray-900 tracking-wide">
                FILTER DELETION CONFIRMATION: DROP72HOUR
              </h3>

              <div>
                <a
                  href="/filters"
                  className="text-primary hover:underline text-sm font-medium block"
                >
                  Click here to delete filter DROP72HOUR
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModifyFilterForm;
