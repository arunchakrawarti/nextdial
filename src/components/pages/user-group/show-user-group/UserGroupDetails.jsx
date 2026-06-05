"use client";
import BasicTable from "@/components/common/BasicTable";
import React, { useState } from "react";

export default function UserGroupDetails() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const columns = [
    { label: "User", key: "user" },
    { label: "Full Name", key: "fullName" },
    { label: "Level", key: "level" },
    { label: "Active", key: "active" },
    { label: "User Group", key: "userGroup" },
  ];

  const tableData = [];

  return (
    <div className="w-full space-y-6">
    
      <div className="bg-white rounded-2xl shadow-sm border-light mt-5 overflow-hidden">
        
        <div className="px-6 py-5 flex items-center gap-3 border-b border-gray-50">
          <h2 className="font-lexend heading">
            Users Within This Secondary User Group
          </h2>
        </div>

        <BasicTable
          columns={columns}
          data={tableData}
          pagination={false}
        />
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-4">

        <a
          href="/user-group/show-user-group/usergroup-hold"
          className="block text-primary hover:underline text-[0.95rem] font-medium transition-colors"
        >
          Click here to see all CallBack Holds in this user group
        </a>

        <a
          href="/user-group/show-user-group/time-clockstatus"
          className="block text-primary hover:underline text-[0.95rem] font-medium transition-colors"
        >
          Click here to see the Timeclock Status for this user group
        </a>
        <button
          type="button"
          onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
          className="block text-primary hover:underline text-[0.95rem] font-bold tracking-wide uppercase transition-colors"
        >
          DELETE THIS USER GROUP
        </button>
        {showDeleteConfirm && (
          <div className="mt-6 pt-4 border-t border-dashed border-red-200 space-y-3">
            
            <h3 className="text-sm font-black uppercase text-dark">
              USER GROUP DELETION CONFIRMATION: agent
            </h3>

            <a
              href="/user-group/show-user-group/usergroup-delete"
              className="text-primary hover:underline text-sm font-medium block"
            >
              Click here to delete user group agent
            </a>

          </div>
        )}

      </div>
    </div>
  );
}