"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button"

const ShowFilterTable = () => {
  const columns = [
    {
      label: "Filter Id",
      key: "filterId",
    },
    {
      label: "Filter Name",
      key: "filter-name",
    },
    {
      label: "Admin Group",
      key: "admin-group",
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button href="/filters/modify-filter" variant="danger">
          Modify
        </Button>
      ),
    },
  ];

const data = [
  {
    id: 1,
    filterId: "FILTER001",
    "filter-name": "Active Leads Filter",
    "admin-group": "---ALL---",
  },
  {
    id: 2,
    filterId: "FILTER002",
    "filter-name": "Sales Campaign Leads",
    "admin-group": "SALES",
  },
  {
    id: 3,
    filterId: "FILTER003",
    "filter-name": "Support Follow-up Filter",
    "admin-group": "SUPPORT",
  },
  {
    id: 4,
    filterId: "FILTER004",
    "filter-name": "Quality Check Leads",
    "admin-group": "QUALITY",
  },
  {
    id: 5,
    filterId: "FILTER005",
    "filter-name": "Appointment Scheduled",
    "admin-group": "APPOINTMENT",
  },
  {
    id: 6,
    filterId: "FILTER006",
    "filter-name": "Collection Pending",
    "admin-group": "COLLECTION",
  },
  {
    id: 7,
    filterId: "FILTER007",
    "filter-name": "New User Leads",
    "admin-group": "NEW_USERS",
  },
  {
    id: 8,
    filterId: "FILTER008",
    "filter-name": "Retention Customers",
    "admin-group": "RETENTION",
  },
  {
    id: 9,
    filterId: "FILTER009",
    "filter-name": "Verification Pending",
    "admin-group": "VERIFICATION",
  },
  {
    id: 10,
    filterId: "FILTER010",
    "filter-name": "Outbound Campaign Leads",
    "admin-group": "OUTBOUND",
  },
];

  return (
    <div className="w-full bg-white border-light rounded-xl ">
      <div className="mb-3">
        <h2 className="heading font-lexend p-4">
         Lead Filters Listings
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

export default ShowFilterTable;