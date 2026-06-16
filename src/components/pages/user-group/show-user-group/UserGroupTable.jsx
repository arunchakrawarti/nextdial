"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";

const UserGroupTable = () => {
  const columns = [
    {
      label: "Lead",
      key: "lead",
    },
    {
      label: "List",
      key: "list",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Entry Date",
      key: "entrydate",
    },
    {
      label: "CallBack Date",
      key: "Callbackdate",
    },
    {
      label: "User",
      key: "user",
    },
    {
      label: "Recipient",
      key: "recipient",
    },
    {
      label: "Status",
      key: "status",
    },
    {
      label: "Group",
      key: "group",
    },
  ];

  const data = [
    {
      lead: "10001",
      list: "LIST-01",
      campaign: "Sales Campaign",
      entrydate: "2026-06-04 10:30 AM",
      Callbackdate: "2026-06-05 02:00 PM",
      user: "Arun",
      recipient: "Rahul Sharma",
      status: "ACTIVE",
      group: "ADMIN",
    },
    {
      lead: "10002",
      list: "LIST-02",
      campaign: "Support Campaign",
      entrydate: "2026-06-03 09:15 AM",
      Callbackdate: "2026-06-06 11:00 AM",
      user: "Hemant",
      recipient: "Priya Singh",
      status: "PENDING",
      group: "AGENT",
    },
    {
      lead: "10003",
      list: "LIST-03",
      campaign: "Marketing Campaign",
      entrydate: "2026-06-02 01:45 PM",
      Callbackdate: "2026-06-07 04:30 PM",
      user: "Amit",
      recipient: "Rohit Verma",
      status: "COMPLETED",
      group: "TEAM",
    },
    {
      lead: "10004",
      list: "LIST-04",
      campaign: "Customer Care",
      entrydate: "2026-06-01 08:20 AM",
      Callbackdate: "2026-06-08 12:15 PM",
      user: "Neha",
      recipient: "Anjali Gupta",
      status: "ACTIVE",
      group: "SUPPORT",
    },
  ];

  return (
    <div>
      <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 flex items-start gap-4 border-b">
          <div>
            <h2 className="heading font-lexend">
              USER GROUP CALLBACK HOLD LISTINGS:
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <BasicTable columns={columns} data={data} wrapperClassName="" />
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-4 mt-5">
        <a
          href="/callback-holds"
          className="block text-primary hover:underline text-[0.95rem] font-medium transition-colors"
        >
          Remove LIVE Callbacks older than one month for this user group
        </a>
        <a
          href="/timeclock-status"
          className="block text-primary hover:underline text-[0.95rem] font-medium transition-colors"
        >
          Remove LIVE Callbacks older than one week for this user group
        </a>
      </div>
    </div>
  );
};

export default UserGroupTable;
