"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil } from "lucide-react";
import Badge from "@/components/common/Badge";

const ShowUserTable = () => {
  const columns = [
    {
      label: "User Group",
      key: "userGroup",
      render: (value) => (
        <Badge text={value} customStyle="capitalize px-4 py-2 text-sm" />
      ),
    },
    {
      label: "Group Name",
      key: "groupName",
    },
    {
      label: "Users",
      key: "users",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "2nd",
      key: "second",
    },
    {
      label: "Force Timeclock",
      key: "forceTimeclock",
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button href="/user-group/show-user-group/modify-user" className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800">
          <Pencil size={16} />
          Modify
        </Button>
      ),
    },
  ];

  const data = [
    {
      userGroup: "ADMIN",
      groupName: "VICIDIAL ADMINISTRATORS",
      users: 4,
      active: 2,
      second: 0,
      forceTimeclock: "N",
    },
    {
      userGroup: "agent",
      groupName: "agent",
      users: 20,
      active: 19,
      second: 0,
      forceTimeclock: "N",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="p-6 flex items-start gap-4 border-b">
        <div>
          <h2 className="text-3xl font-bold text-dark">User Groups</h2>
          <p className="text-gray-500 mt-1">
            Manage and view user groups in the system.
          </p>
        </div>
      </div>

      <BasicTable columns={columns} data={data} wrapperClassName="" />
    </div>
  );
};

export default ShowUserTable;
