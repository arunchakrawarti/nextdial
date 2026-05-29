"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const AgentLead = () => {
  const columns = [
    {
      label: "Date/Time",
      key: "date/time",
    },
    {
      label: "From Lead Id",
      key: "from-lead-id",
    },
    {
      label: "To Lead Id",
      key: "to-lead-id",
    },
    {
      label: "Call Id",
      key: "call-id",
    },
    {
      label: "Uniqueid",
      key: "uniqueid",
    },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
  ];

const Data = [
  {
    "date/time": "2026-05-16 09:00:15",
    "from-lead-id": "LD1001",
    "to-lead-id": "LD2001",
    "call-id": "CALL001",
    uniqueid: "UID20260516001",
    phone: "+919876543210",
    campaign: "Sales Campaign",
  },
  {
    "date/time": "2026-05-16 09:25:40",
    "from-lead-id": "LD1002",
    "to-lead-id": "LD2002",
    "call-id": "CALL002",
    uniqueid: "UID20260516002",
    phone: "+919876543211",
    campaign: "Support Campaign",
  },
  {
    "date/time": "2026-05-16 10:10:22",
    "from-lead-id": "LD1003",
    "to-lead-id": "LD2003",
    "call-id": "CALL003",
    uniqueid: "UID20260516003",
    phone: "+919876543212",
    campaign: "Marketing Campaign",
  },
  {
    "date/time": "2026-05-16 10:55:48",
    "from-lead-id": "LD1004",
    "to-lead-id": "LD2004",
    "call-id": "CALL004",
    uniqueid: "UID20260516004",
    phone: "+919876543213",
    campaign: "Customer Care",
  },
  {
    "date/time": "2026-05-16 11:40:12",
    "from-lead-id": "LD1005",
    "to-lead-id": "LD2005",
    "call-id": "CALL005",
    uniqueid: "UID20260516005",
    phone: "+919876543214",
    campaign: "Technical Support",
  },
  {
    "date/time": "2026-05-16 12:15:30",
    "from-lead-id": "LD1006",
    "to-lead-id": "LD2006",
    "call-id": "CALL006",
    uniqueid: "UID20260516006",
    phone: "+919876543215",
    campaign: "Retention Campaign",
  },
  {
    "date/time": "2026-05-16 13:05:50",
    "from-lead-id": "LD1007",
    "to-lead-id": "LD2007",
    "call-id": "CALL007",
    uniqueid: "UID20260516007",
    phone: "+919876543216",
    campaign: "Lead Generation",
  },
  {
    "date/time": "2026-05-16 14:20:18",
    "from-lead-id": "LD1008",
    "to-lead-id": "LD2008",
    "call-id": "CALL008",
    uniqueid: "UID20260516008",
    phone: "+919876543217",
    campaign: "Email Campaign",
  },
  {
    "date/time": "2026-05-16 15:35:42",
    "from-lead-id": "LD1009",
    "to-lead-id": "LD2009",
    "call-id": "CALL009",
    uniqueid: "UID20260516009",
    phone: "+919876543218",
    campaign: "Follow Up Campaign",
  },
  {
    "date/time": "2026-05-16 16:50:05",
    "from-lead-id": "LD1010",
    "to-lead-id": "LD2010",
    "call-id": "CALL010",
    uniqueid: "UID20260516010",
    phone: "+919876543219",
    campaign: "Outbound Campaign",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="heading font-lexend">
             Agent Lead Switches for this Time Period
            </h2>
          </div>
          <Button type="button" variant="success" icon="download-2-line">
            Download
          </Button>
        </div>
        <div className="  overflow-hidden">
          <BasicTable
            columns={columns}
            data={Data}
            pagination={true}
            total={Data.length}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentLead;
