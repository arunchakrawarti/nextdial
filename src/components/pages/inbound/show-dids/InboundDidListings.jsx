"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const InboundDidListings = () => {
  const columns = [
    {
      label: "Id",
      key: "id",
    },
    {
      label: "Did",
      key: "did",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Carrier",
      key: "carrier",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Admin group",
      key: "adminGroup",
    },
    {
      label: "Route",
      key: "route",
    },
    {
      label: "Rec",
      key: "rec",
    },
    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button variant="danger" href="/inbound/show-dids/modify-dids">
          MODIFY
        </Button>
      ),
    },
  ];

  const data = [
    {
      id: 3,
      did: "3490484931",
      description: "3490484931",
      carrier: "",
      active: "Y",
      adminGroup: "agent",
      route: "AGENT",
      rec: "Y",
    },
    {
      id: 1,
      did: "default",
      description: "3030030330",
      carrier: "3030030330",
      active: "Y",
      adminGroup: "agent",
      route: "AGENT",
      rec: "Y",
    },
  ];

  return (
    <div className="bg-white rounded-xl border-light mt-5 overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="heading font-lexend">Inbound DID Listings</h2>
      </div>
      <div className="bg-gradient-primary p-4 flex flex-col lg:flex-row lg:items-end gap-4">
        <div className="w-full lg:w-64">
          <Input
            label="Filter/Search DIDs"
            type="text"
            placeholder="Search DID..."
          />
        </div>

        <Button variant="gradient" className="lg:mb-[2px]">
          Filter DIDs
        </Button>
      </div>
      <BasicTable columns={columns} data={data} />
    </div>
  );
};

export default InboundDidListings;
