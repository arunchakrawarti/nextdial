"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const ManualOutbound = () => {

const columns = [
  {
    label: "Date/Time",
    key: "date/time",
  },
  {
    label: "Call Type",
    key: "call-type",
  },

  {
    label: "Server",
    key: "server",
  },
  {
    label: "Phone",
    key: "phone",
  },
  {
    label: "Dialed",
    key: "dialed",
  },
  {
    label: "Lead",
    key: "lead",
  },
  {
    label: "Callerid",
    key: "callerid",
  },
  {
    label: "Alias",
    key: "alias",
  },
  {
    label: "Preset",
    key: "preset",
  },
  {
    label: "C3HU",
    key: "C3hu",
  },
];


const Data = [
  {
    "date/time": "2026-05-16 09:00:15",
    "call-type": "Outbound",
    server: "SVR-01",
    phone: "+919876543210",
    dialed: "1800123456",
    lead: "LD1001",
    callerid: "CID1001",
    alias: "Sales Team",
    preset: "Default",
    C3hu: "Yes",
  },
  {
    "date/time": "2026-05-16 09:45:30",
    "call-type": "Manual",
    server: "SVR-02",
    phone: "+919876543211",
    dialed: "1800123457",
    lead: "LD1002",
    callerid: "CID1002",
    alias: "Support Team",
    preset: "Priority",
    C3hu: "No",
  },
  {
    "date/time": "2026-05-16 10:20:40",
    "call-type": "Outbound",
    server: "SVR-01",
    phone: "+919876543212",
    dialed: "1800123458",
    lead: "LD1003",
    callerid: "CID1003",
    alias: "Marketing",
    preset: "Default",
    C3hu: "Yes",
  },
  {
    "date/time": "2026-05-16 11:10:22",
    "call-type": "Manual",
    server: "SVR-03",
    phone: "+919876543213",
    dialed: "1800123459",
    lead: "LD1004",
    callerid: "CID1004",
    alias: "Customer Care",
    preset: "Express",
    C3hu: "No",
  },
  {
    "date/time": "2026-05-16 12:35:18",
    "call-type": "Outbound",
    server: "SVR-02",
    phone: "+919876543214",
    dialed: "1800123460",
    lead: "LD1005",
    callerid: "CID1005",
    alias: "Retention",
    preset: "Priority",
    C3hu: "Yes",
  },
  {
    "date/time": "2026-05-16 13:50:45",
    "call-type": "Manual",
    server: "SVR-01",
    phone: "+919876543215",
    dialed: "1800123461",
    lead: "LD1006",
    callerid: "CID1006",
    alias: "Sales Team",
    preset: "Default",
    C3hu: "No",
  },
  {
    "date/time": "2026-05-16 14:25:12",
    "call-type": "Outbound",
    server: "SVR-03",
    phone: "+919876543216",
    dialed: "1800123462",
    lead: "LD1007",
    callerid: "CID1007",
    alias: "Support Team",
    preset: "Express",
    C3hu: "Yes",
  },
  {
    "date/time": "2026-05-16 15:40:05",
    "call-type": "Manual",
    server: "SVR-02",
    phone: "+919876543217",
    dialed: "1800123463",
    lead: "LD1008",
    callerid: "CID1008",
    alias: "Marketing",
    preset: "Priority",
    C3hu: "No",
  },
  {
    "date/time": "2026-05-16 16:55:28",
    "call-type": "Outbound",
    server: "SVR-01",
    phone: "+919876543218",
    dialed: "1800123464",
    lead: "LD1009",
    callerid: "CID1009",
    alias: "Customer Care",
    preset: "Default",
    C3hu: "Yes",
  },
  {
    "date/time": "2026-05-16 18:10:50",
    "call-type": "Manual",
    server: "SVR-03",
    phone: "+919876543219",
    dialed: "1800123465",
    lead: "LD1010",
    callerid: "CID1010",
    alias: "Retention",
    preset: "Express",
    C3hu: "No",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="heading font-lexend">
              Manual Outbound Calls for this Time Period
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

export default ManualOutbound;
