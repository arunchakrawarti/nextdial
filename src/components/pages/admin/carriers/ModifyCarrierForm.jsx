"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";

const ModifyCarrierForm = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white border border-light rounded-2xl overflow-hidden mt-5">
    
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend">
          Modify A Carrier Record: 3333
        </h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
    
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-white rounded-xl border border-gray-100 mb-6">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Carrier ID:
          </span>

          <p className="text-base font-bold text-gray-900">
            3333
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          <Input
            label="Carrier Name"
            type="text"
            defaultValue="3333"
          />

          <Input
            label="Carrier Description"
            type="text"
            defaultValue="3333"
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

          <Input
            label="Registration String"
            type="text"
            placeholder="Enter Registration String"
          />

          <Input
            label="Template ID"
            type="select"
            defaultValue="NONE"
            options={[
              { label: "--NONE--", value: "NONE" },
              { label: "SIP_generic", value: "SIP_generic" },
            ]}
          />

          <Input
            label="Protocol"
            type="select"
            defaultValue="SIP"
            options={[
              { label: "SIP", value: "SIP" },
              { label: "IAX2", value: "IAX2" },
            ]}
          />

          <Input
            label="Globals String"
            type="text"
            placeholder="Enter Globals String"
          />

          <Input
            label="Server IP"
            type="select"
            defaultValue="192.168.0.203"
            options={[
              {
                label: "192.168.0.203",
                value: "192.168.0.203",
              },
              {
                label: "192.168.0.204",
                value: "192.168.0.204",
              },
            ]}
          />

          <Input
            label="Active"
            type="select"
            defaultValue="Y"
            options={[
              { label: "Y", value: "Y" },
              { label: "N", value: "N" },
            ]}
          />
        </div>
        <div className="mt-6">
          <Input
            label="Account Entry"
            type="textarea"
            className="font-mono text-sm min-h-[220px]"
          />
        </div>
        <div className="mt-6">
          <Input
            label="Dialplan Entry"
            type="textarea"
            className="font-mono text-sm min-h-[150px]"
          />
        </div>
        <div className="flex justify-center pt-8">
          <Button
            variant="gradient"
            className="w-full sm:w-auto px-10 py-3"
          >
            SUBMIT
          </Button>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col items-start sm:items-center gap-4">
          
          <button
            type="button"
            onClick={() =>
              setShowDeleteConfirm(!showDeleteConfirm)
            }
            className="text-red-600 hover:text-red-700 hover:underline text-sm font-bold uppercase tracking-wide transition-colors"
          >
            DELETE THIS CARRIER
          </button>
          {showDeleteConfirm && (
            <div className="w-full  border-light bg-white rounded-xl p-4 sm:p-5 space-y-3">
              
              <h4 className="text-sm font-bold uppercase text-red-700 tracking-wide font-lexend">
                CARRIER DELETION CONFIRMATION: 3333
              </h4>

              <Link href="/admin/carriers">
                <span className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium inline-block cursor-pointer font-lexend">
                  Click here to delete carrier 3333
                </span>
              </Link>
            </div>
          )}
          <Link href="/report/admin-change">
            <span className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium text-left sm:text-center inline-block cursor-pointer font-lexend">
              Click here to see Admin changes to this carrier
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyCarrierForm;