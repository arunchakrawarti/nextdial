"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button"

const ShowScriptsTable = () => {
  const columns = [
    {
      label: "Scripts Id",
      key: "scriptId",
    },
    {
      label: "Scripts Name",
      key: "scriptName",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
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
        <Button  variant="danger">
          Modify
        </Button>
      ),
    },
  ];

const data = [
  {
    id: 1,
    scriptId: "CALLNOTES",
    scriptName: "Call Notes and Appointment Setting",
    active: "Y",
    adminGroup: "---ALL---",
    color: "#ffffff",
  },
  {
    id: 2,
    scriptId: "SALES001",
    scriptName: "Sales Follow Up Script",
    active: "Y",
    adminGroup: "SALES",
    color: "#f8f9fa",
  },
  {
    id: 3,
    scriptId: "SUPPORT01",
    scriptName: "Customer Support Script",
    active: "N",
    adminGroup: "SUPPORT",
    color: "#e3f2fd",
  },
  {
    id: 4,
    scriptId: "SURVEY001",
    scriptName: "Customer Feedback Survey",
    active: "Y",
    adminGroup: "QUALITY",
    color: "#fff3cd",
  },
  {
    id: 5,
    scriptId: "APPOINT01",
    scriptName: "Appointment Confirmation",
    active: "Y",
    adminGroup: "APPOINTMENT",
    color: "#d4edda",
  },
  {
    id: 6,
    scriptId: "COLLECT01",
    scriptName: "Collection Reminder Script",
    active: "N",
    adminGroup: "COLLECTION",
    color: "#f8d7da",
  },
  {
    id: 7,
    scriptId: "WELCOME01",
    scriptName: "Welcome Call Script",
    active: "Y",
    adminGroup: "NEW_USERS",
    color: "#cce5ff",
  },
  {
    id: 8,
    scriptId: "RETENTION1",
    scriptName: "Customer Retention Script",
    active: "Y",
    adminGroup: "RETENTION",
    color: "#e2e3e5",
  },
  {
    id: 9,
    scriptId: "VERIFY001",
    scriptName: "Account Verification Script",
    active: "N",
    adminGroup: "VERIFICATION",
    color: "#f5c6cb",
  },
  {
    id: 10,
    scriptId: "OUTBOUND01",
    scriptName: "Outbound Campaign Script",
    active: "Y",
    adminGroup: "OUTBOUND",
    color: "#d1ecf1",
  },
];

  return (
    <div className="w-full bg-white border-light rounded-xl ">
      <div className="mb-3">
        <h2 className="heading p-4">
          Scripts Listings
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

export default ShowScriptsTable;