"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button"

const UserDeleteTable = () => {
  const columns = [
    {
      label: "User Group",
      key: "ingroup",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Priority",
      key: "priority",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Admin Group",
      key: "admin group",
    },
    {
      label: "Time",
      key: "time",
    },
    {
      label: "Color",
      key: "color",
      render: (value) => (
        <div 
          className="w-8 h-8 rounded border border-gray-300 bg-white" 
          style={{ backgroundColor: value || '#fff' }}
        />
      ),
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button href="/inbound/show-ingroup/modify-group" variant="danger">
          Modify
        </Button>
      ),
    },
  ];

const data = [
  {
    ingroup: "SALES",
    name: "Sales In Group",
    priority: 1,
    active: "Y",
    adminGroup: "SALES",
    time: "09:00-18:00",
    color: "#d1ecf1",
  },
  {
    ingroup: "SUPPORT",
    name: "Customer Support",
    priority: 2,
    active: "Y",
    adminGroup: "SUPPORT",
    time: "24 HOURS",
    color: "#e3f2fd",
  },
  {
    ingroup: "MARKETING",
    name: "Marketing Team",
    priority: 3,
    active: "N",
    adminGroup: "MARKETING",
    time: "10:00-19:00",
    color: "#fff3cd",
  },
  {
    ingroup: "RETENTION",
    name: "Retention Group",
    priority: 4,
    active: "Y",
    adminGroup: "RETENTION",
    time: "08:00-17:00",
    color: "#d4edda",
  },
  {
    ingroup: "COLLECTION",
    name: "Collection Team",
    priority: 5,
    active: "Y",
    adminGroup: "COLLECTION",
    time: "09:30-18:30",
    color: "#f8d7da",
  },
  {
    ingroup: "NEW_USERS",
    name: "Welcome Calls",
    priority: 6,
    active: "Y",
    adminGroup: "NEW_USERS",
    time: "08:00-16:00",
    color: "#cce5ff",
  },
  {
    ingroup: "OUTBOUND",
    name: "Outbound Campaign",
    priority: 7,
    active: "Y",
    adminGroup: "OUTBOUND",
    time: "24 HOURS",
    color: "#e2e3e5",
  },
  {
    ingroup: "QUALITY",
    name: "Quality Assurance",
    priority: 8,
    active: "N",
    adminGroup: "QUALITY",
    time: "10:00-18:00",
    color: "#f5c6cb",
  },
  {
    ingroup: "APPOINTMENT",
    name: "Appointment Setting",
    priority: 9,
    active: "Y",
    adminGroup: "APPOINTMENT",
    time: "09:00-17:00",
    color: "#d1f1d1",
  },
  {
    ingroup: "VERIFICATION",
    name: "Account Verification",
    priority: 10,
    active: "Y",
    adminGroup: "VERIFICATION",
    time: "08:30-17:30",
    color: "#ffeeba",
  },
];

  return (
    <div className="w-full bg-white border-light rounded-xl ">
      <div className="mb-3">
        <h2 className="heading p-4">
          Inbound Group Listings:
        </h2>
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

export default UserDeleteTable;