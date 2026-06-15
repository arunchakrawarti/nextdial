"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const LeadFilterList = () => {
  const columns = [
    {
      label: "Filter ID",
      key: "filterId",
    },
    {
      label: "Filter Name",
      key: "filterName",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button variant="danger">
          Modify
        </Button>
      ),
    },
  ];

  const data = [
    {
      filterId: "DROP72HOUR",
      filterName: "UK 72 Hour Drop No Call",
      adminGroup: "AGENT",
    },
    {
      filterId: "ACTIVELEADS",
      filterName: "Active Leads Filter",
      adminGroup: "ADMIN",
    },
    {
      filterId: "SALESCALLS",
      filterName: "Sales Follow-up Leads",
      adminGroup: "SALES",
    },
    {
      filterId: "SUPPORTOPEN",
      filterName: "Open Support Tickets",
      adminGroup: "SUPPORT",
    },
    {
      filterId: "OUTBOUNDNEW",
      filterName: "New Outbound Leads",
      adminGroup: "OUTBOUND",
    },
  ];

  return (
    <div className="w-full mt-5 space-y-4">
      <div className="space-y-1">

        <h3 className="font-lexend font-semibold text-base text-gray-800">
          Lead Filter Listings
        </h3>
      </div>

      <div className="bg-white border-light rounded-xl overflow-hidden">
        <BasicTable
          columns={columns}
          data={data}
          pagination={true}
          total={data.length}
          pageSize={10}
        />
      </div>
    </div>
  );
};

export default LeadFilterList;