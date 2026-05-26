"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

const ServerInfoTable = () => {
  const columns = [
    {
      label: "Station",
      key: "station",
    },
    {
      label: "User Show Id Info",
      key: "user-show-id-info",
    },
     {
      label: "User Group",
      key: "user-group",
    },
    {
      label: "Session Id",
      key: "session-id",
    },
    {
      label: "Status",
      key: "Status",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },
    {
      label: "Server Ip",
      key: "server-ip",
    },
    {
      label: "Call Server Ip",
      key: "call-server-ip",
    },
    {
      label: "Mm:Ss",
      key: "mm/ss",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Calls",
      key: "calls",
    },
    {
      label: "Inb Calls",
      key: "inb-calls",
    },
    {
      label: "Hold",
      key: "hold",
    },
    {
      label: "In-Group",
      key: "in-group",
    },
  ];
const Data = [
  {
    station: "8600051",
    "user-show-id-info": "Agent001 - Rahul",
    "user-group": "Sales",
    "session-id": "SID1001",
    Status: "INCALL",
    "server-ip": "192.168.10.1",
    "call-server-ip": "10.0.0.1",
    "mm/ss": "05:24",
    campaign: "Sales Campaign",
    calls: 45,
    "inb-calls": 30,
    hold: "00:45",
    "in-group": "Y",
  },
  {
    station: "8600052",
    "user-show-id-info": "Agent002 - Amit",
    "user-group": "Support",
    "session-id": "SID1002",
    Status: "READY",
    "server-ip": "192.168.10.2",
    "call-server-ip": "10.0.0.2",
    "mm/ss": "02:15",
    campaign: "Support Campaign",
    calls: 38,
    "inb-calls": 25,
    hold: "00:20",
    "in-group": "Y",
  },
  {
    station: "8600053",
    "user-show-id-info": "Agent003 - Priya",
    "user-group": "Marketing",
    "session-id": "SID1003",
    Status: "PAUSED",
    "server-ip": "192.168.10.3",
    "call-server-ip": "10.0.0.3",
    "mm/ss": "01:10",
    campaign: "Marketing Campaign",
    calls: 27,
    "inb-calls": 18,
    hold: "03:15",
    "in-group": "N",
  },
  {
    station: "8600054",
    "user-show-id-info": "Agent004 - Neha",
    "user-group": "Sales",
    "session-id": "SID1004",
    Status: "INCALL",
    "server-ip": "192.168.10.4",
    "call-server-ip": "10.0.0.4",
    "mm/ss": "08:42",
    campaign: "Sales Campaign",
    calls: 52,
    "inb-calls": 40,
    hold: "00:30",
    "in-group": "Y",
  },
  {
    station: "8600055",
    "user-show-id-info": "Agent005 - Arjun",
    "user-group": "Customer Care",
    "session-id": "SID1005",
    Status: "READY",
    "server-ip": "192.168.10.5",
    "call-server-ip": "10.0.0.5",
    "mm/ss": "00:55",
    campaign: "Customer Care",
    calls: 21,
    "inb-calls": 15,
    hold: "00:10",
    "in-group": "Y",
  },
  {
    station: "8600056",
    "user-show-id-info": "Agent006 - Vikas",
    "user-group": "Technical",
    "session-id": "SID1006",
    Status: "INCALL",
    "server-ip": "192.168.10.6",
    "call-server-ip": "10.0.0.6",
    "mm/ss": "04:35",
    campaign: "Technical Support",
    calls: 33,
    "inb-calls": 28,
    hold: "00:25",
    "in-group": "N",
  },
  {
    station: "8600057",
    "user-show-id-info": "Agent007 - Pooja",
    "user-group": "Marketing",
    "session-id": "SID1007",
    Status: "READY",
    "server-ip": "192.168.10.7",
    "call-server-ip": "10.0.0.7",
    "mm/ss": "03:12",
    campaign: "Marketing Campaign",
    calls: 29,
    "inb-calls": 22,
    hold: "00:18",
    "in-group": "Y",
  },
  {
    station: "8600058",
    "user-show-id-info": "Agent008 - Karan",
    "user-group": "Sales",
    "session-id": "SID1008",
    Status: "PAUSED",
    "server-ip": "192.168.10.8",
    "call-server-ip": "10.0.0.8",
    "mm/ss": "00:40",
    campaign: "Sales Campaign",
    calls: 41,
    "inb-calls": 35,
    hold: "02:45",
    "in-group": "Y",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden mt-5">
        <div className="p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Agents Time On Calls Campaign
            </h2>
          </div>
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

export default ServerInfoTable;
