"use client";
import React from "react";
import Link from "next/link";

const UserAction = ({ userId = "1002" }) => {
  return (
    <div className="p-2">
      <div className="space-y-3.5">
    
        <div>
          <Link 
            href={`/admin/users/delete/${userId}`}
            className="text-red-600 hover:text-red-700 font-lexend font-bold text-sm tracking-wide uppercase hover:underline inline-flex items-center gap-1.5"
          >
            DELETE THIS USER
          </Link>
        </div>
        <div className="flex flex-col gap-3 pl-1 font-lexend text-[13.5px] text-primary font-medium">
          <Link href={`/admin/users/time-sheet/${userId}`} className="hover:underline flex items-center gap-2 hover:text-blue-700">
             Click here for user time sheet
          </Link>
          <Link href={`/admin/users/status/${userId}`} className="hover:underline flex items-center gap-2 hover:text-blue-700">
             Click here for user status
          </Link>
          <Link href={`/admin/users/stats/${userId}`} className="hover:underline flex items-center gap-2 hover:text-blue-700">
             Click here for user stats
          </Link>
          <Link href={`/admin/users/multi-day-report/${userId}`} className="hover:underline flex items-center gap-2 hover:text-blue-700">
             Click here for user multiple day status detail report
          </Link>
          <Link href={`/admin/users/callback-holds/${userId}`} className="hover:underline flex items-center gap-2 hover:text-blue-700">
             Click here for user CallBack Holds
          </Link>
          <Link href={`/admin/users/audit-logs/${userId}`} className="hover:underline flex items-center gap-2 hover:text-blue-700">
             Click here to see Admin changes to this record
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UserAction;