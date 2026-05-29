"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

const PhoneTable = () => {
  const columns = [
    {
      label: "Station",
      key: "station",
    },
    {
      label: "Phone",
      key: "phone",
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
    phone: "9876543210",
    "user-show-id-info": "Agent001 - Rahul",
    "user-group": "Sales Team",
    "session-id": "SID1001",
    Status: "INCALL",
    "mm/ss": "05:24",
    campaign: "Sales Campaign",
    calls: 45,
    "inb-calls": 30,
    hold: "00:45",
    "in-group": "Y",
  },
  {
    station: "8600052",
    phone: "9876543211",
    "user-show-id-info": "Agent002 - Amit",
    "user-group": "Support Team",
    "session-id": "SID1002",
    Status: "READY",
    "mm/ss": "02:15",
    campaign: "Support Campaign",
    calls: 38,
    "inb-calls": 25,
    hold: "00:20",
    "in-group": "Y",
  },
  {
    station: "8600053",
    phone: "9876543212",
    "user-show-id-info": "Agent003 - Priya",
    "user-group": "Marketing Team",
    "session-id": "SID1003",
    Status: "PAUSED",
    "mm/ss": "01:10",
    campaign: "Marketing Campaign",
    calls: 27,
    "inb-calls": 18,
    hold: "03:15",
    "in-group": "N",
  },
  {
    station: "8600054",
    phone: "9876543213",
    "user-show-id-info": "Agent004 - Neha",
    "user-group": "Sales Team",
    "session-id": "SID1004",
    Status: "INCALL",
    "mm/ss": "08:42",
    campaign: "Sales Campaign",
    calls: 52,
    "inb-calls": 40,
    hold: "00:30",
    "in-group": "Y",
  },
  {
    station: "8600055",
    phone: "9876543214",
    "user-show-id-info": "Agent005 - Arjun",
    "user-group": "Customer Care",
    "session-id": "SID1005",
    Status: "READY",
    "mm/ss": "00:55",
    campaign: "Customer Care",
    calls: 21,
    "inb-calls": 15,
    hold: "00:10",
    "in-group": "Y",
  },
  {
    station: "8600056",
    phone: "9876543215",
    "user-show-id-info": "Agent006 - Vikas",
    "user-group": "Tech Support",
    "session-id": "SID1006",
    Status: "INCALL",
    "mm/ss": "04:35",
    campaign: "Technical Support",
    calls: 33,
    "inb-calls": 28,
    hold: "00:25",
    "in-group": "N",
  },
  {
    station: "8600057",
    phone: "9876543216",
    "user-show-id-info": "Agent007 - Pooja",
    "user-group": "Marketing Team",
    "session-id": "SID1007",
    Status: "READY",
    "mm/ss": "03:12",
    campaign: "Marketing Campaign",
    calls: 29,
    "inb-calls": 22,
    hold: "00:18",
    "in-group": "Y",
  },
  {
    station: "8600058",
    phone: "9876543217",
    "user-show-id-info": "Agent008 - Karan",
    "user-group": "Sales Team",
    "session-id": "SID1008",
    Status: "PAUSED",
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
            <h2 className="heading font-lexend">
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

export default PhoneTable;
