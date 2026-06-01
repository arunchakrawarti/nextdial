"use client";

import React from "react";

const DidUsageInfo = () => {
  return (
    <div className="bg-white rounded-xl border-light p-6 mt-5">
      <div className="space-y-6">
        <div>
          <h3 className="font-bold uppercase text-dark">
            Call Menus Using This DID:
          </h3>
        </div>

        <div>
          <h3 className="font-bold uppercase text-dark">
            Campaigns Using This DID:
          </h3>
        </div>

        <div>
          <h3 className="font-bold uppercase text-dark">
            Campaign AC-CIDs Using This DID:
          </h3>
        </div>

        <div>
          <h3 className="font-bold uppercase text-dark">
            CID Groups Using This DID:
          </h3>
        </div>

        <div>
          <h3 className="font-bold uppercase text-dark">
            In-Groups Using This DID:
          </h3>
        </div>

        <div>
          <h3 className="font-bold uppercase text-dark">
            Lists Using This DID:
          </h3>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <a
          href="#"
          className="block text-primary hover:underline"
        >
          Click here to see a traffic report for this DID
        </a>

        <a
          href="#"
          className="block text-primary hover:underline"
        >
          Click here to see a list of recordings and calls for this DID
        </a>
      </div>

      <div className="mt-10 space-y-6">
        <a
          href="#"
          className="block text-primary uppercase hover:underline"
        >
          Delete This DID
        </a>

        <a
          href="#"
          className="block text-primary hover:underline"
        >
          Click here to see Admin changes to this DID
        </a>
      </div>
    </div>
  );
};

export default DidUsageInfo;