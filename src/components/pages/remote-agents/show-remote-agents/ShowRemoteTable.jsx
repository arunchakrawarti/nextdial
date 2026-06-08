"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const ShowRemoteTable = () => {

  const columns = [
    {
      label: "User",
      key: "user",
    },
    {
      label: "Lines",
      key: "lines",
    },
    {
      label: "Server",
      key: "server",
    },
    {
      label: "Conf-Exten",
      key: "confExten",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Status",
      key: "status",
    },
    {
      label: "Campaign",
      key: "campaign",
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
      user: "john01",
      lines: "2",
      server: "Server-1",
      confExten: "860001",
      group: "SALES",
      status: "ACTIVE",
      campaign: "Outbound Sales",
    },
    {
      user: "emma22",
      lines: "1",
      server: "Server-2",
      confExten: "860002",
      group: "SUPPORT",
      status: "PAUSED",
      campaign: "Customer Support",
    },
    {
      user: "alex90",
      lines: "3",
      server: "Server-1",
      confExten: "860003",
      group: "MARKETING",
      status: "ACTIVE",
      campaign: "Marketing Leads",
    },
    {
      user: "rohit55",
      lines: "2",
      server: "Server-3",
      confExten: "860004",
      group: "RETENTION",
      status: "DISPO",
      campaign: "Retention Campaign",
    },
    {
      user: "sophia88",
      lines: "4",
      server: "Server-2",
      confExten: "860005",
      group: "COLLECTION",
      status: "ACTIVE",
      campaign: "Collection Calls",
    },
    {
      user: "mike77",
      lines: "1",
      server: "Server-4",
      confExten: "860006",
      group: "OUTBOUND",
      status: "READY",
      campaign: "Outbound Campaign",
    },
    {
      user: "raj44",
      lines: "2",
      server: "Server-1",
      confExten: "860007",
      group: "QUALITY",
      status: "ACTIVE",
      campaign: "QA Monitoring",
    },
    {
      user: "nancy11",
      lines: "3",
      server: "Server-5",
      confExten: "860008",
      group: "APPOINTMENT",
      status: "PAUSED",
      campaign: "Appointment Setup",
    },
  ];

  return (
    <div className="w-full bg-white border-light rounded-xl">
      <div className="mb-3 p-4">
        <h2 className="heading">
          REMOTE AGENTS LISTINGS:
        </h2>
      </div>

      {/* Table */}
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

export default ShowRemoteTable;