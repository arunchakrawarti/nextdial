"use client";

import React, { useState } from "react";

const InboundGroupInfo = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="bg-white rounded-xl border-light p-6 mt-5">
      <div className="space-y-4 text-primary">
        <a href="/inbound/show-ingroup/report-ingroup" className="block hover:underline">
          Click here to see a report for this inbound group
        </a>

        <a href="#" className="block hover:underline">
          Click here to see agents logged in to this inbound group
        </a>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <span className="font-bold uppercase text-dark">
            DIDs Using This In-Group:
          </span>
          <span>-</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-bold uppercase text-dark">
            Call Menus Using This In-Group:
          </span>
          <span>-</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-bold uppercase text-dark">
            Campaigns Using This In-Group:
          </span>
          <span>-</span>
        </div>

        <div className="flex gap-4">
          <span className="font-bold uppercase text-dark">
            Campaigns Allowing This In-Group:
          </span>

          <a href="#" className="text-primary hover:underline">
            outbound
          </a>

          <span className="text-dark">outbound</span>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <button
          type="button"
          onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
          className="block text-primary font-semibold hover:underline"
        >
          DELETE THIS IN-GROUP
        </button>

        <a
          href="/report/admin-change"
          className="block text-primary font-semibold hover:underline"
        >
          Click here to see Admin changes to this In-Group
        </a>

        {showDeleteConfirm && (
          <div className="mt-6 pt-4 border-t border-dashed border-red-200 space-y-3">
            <h3 className="text-sm font-black uppercase text-dark">
              IN-GROUP DELETION CONFIRMATION: AGENTDIRECT
            </h3>

            <a
              href="/inbound/show-ingroup"
              className="text-primary hover:underline text-sm font-medium block"
            >
              Click here to delete in gropup Agentdirect
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboundGroupInfo;