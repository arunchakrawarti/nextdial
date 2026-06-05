"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const DeleteUsergroupTable = () => {
  const columns = [
    {
      label: "User Group",
      key: "userGroup",
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
      label: "Force Time",
      key: "forceTime",
    },
  ];

  const data = [
    {
      userGroup: "SALES",
      groupName: "Sales Team",
      users: 25,
      active: "Y",
      second: "N",
      forceTime: "09:00-18:00",
    },
    {
      userGroup: "SUPPORT",
      groupName: "Customer Support",
      users: 40,
      active: "Y",
      second: "Y",
      forceTime: "24 HOURS",
    },
    {
      userGroup: "MARKETING",
      groupName: "Marketing Team",
      users: 18,
      active: "N",
      second: "N",
      forceTime: "10:00-19:00",
    },
    {
      userGroup: "RETENTION",
      groupName: "Retention Group",
      users: 12,
      active: "Y",
      second: "Y",
      forceTime: "08:00-17:00",
    },
    {
      userGroup: "COLLECTION",
      groupName: "Collection Team",
      users: 20,
      active: "Y",
      second: "N",
      forceTime: "09:30-18:30",
    },
    {
      userGroup: "OUTBOUND",
      groupName: "Outbound Campaign",
      users: 35,
      active: "Y",
      second: "Y",
      forceTime: "24 HOURS",
    },
    {
      userGroup: "QUALITY",
      groupName: "Quality Assurance",
      users: 10,
      active: "N",
      second: "N",
      forceTime: "10:00-18:00",
    },
    {
      userGroup: "APPOINTMENT",
      groupName: "Appointment Setting",
      users: 15,
      active: "Y",
      second: "Y",
      forceTime: "09:00-17:00",
    },
  ];

  return (
    <div className="w-full bg-white border-light rounded-xl">
      
      <div className="mb-3 p-4">
        <h2 className="heading">
          User Groups
        </h2>

        <p className="text-md text-gray-600 mt-1">
          Manage and view user groups in the system.
        </p>
      </div>

      <div className="rounded-xl overflow-hidden border-light">
        <BasicTable
          columns={columns}
          data={data}
          wrapperClassName=""
        />
      </div>
    </div>
  );
};

export default DeleteUsergroupTable;