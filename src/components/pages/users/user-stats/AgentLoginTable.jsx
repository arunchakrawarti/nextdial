"use client";
import React from 'react';
import BasicTable from '@/components/common/BasicTable'; 
import Button from '@/components/common/Button';

const AgentTalkTimeReport = () => {
const columns = [
    {
      label: "Event",
      key: "event"
    },
    {
      label: "Date",
      key: "date",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Session Hours:Mm:Ss",
      key: "session",
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
      label: "Computer",
      key: "computer",
    },
    {
      label: "Phone Login",
      key: "phone login",
    },
    {
      label: "Phone Ip",
      key: "phone ip",
    },
    
  ];
const Data = [
  {
    event: "LOGIN",
    date: "2026-05-16 09:00:15",
    campaign: "Sales Campaign",
    group: "Agent",
    session: "02:15:40",
    server: "Server-01",
    phone: "1001",
    computer: "DESKTOP-101",
    "phone login": "PL-1001",
    "phone ip": "192.168.1.10",
  },

  {
    event: "LOGOUT",
    date: "2026-05-16 11:20:45",
    campaign: "Support Campaign",
    group: "Support",
    session: "01:40:12",
    server: "Server-02",
    phone: "1002",
    computer: "DESKTOP-102",
    "phone login": "PL-1002",
    "phone ip": "192.168.1.11",
  },

  {
    event: "LOGIN",
    date: "2026-05-16 12:05:10",
    campaign: "Marketing Campaign",
    group: "Marketing",
    session: "03:05:28",
    server: "Server-03",
    phone: "1003",
    computer: "DESKTOP-103",
    "phone login": "PL-1003",
    "phone ip": "192.168.1.12",
  },

  {
    event: "BREAK",
    date: "2026-05-16 01:15:20",
    campaign: "Sales Campaign",
    group: "Agent",
    session: "00:15:00",
    server: "Server-01",
    phone: "1004",
    computer: "DESKTOP-104",
    "phone login": "PL-1004",
    "phone ip": "192.168.1.13",
  },

  {
    event: "LOGOUT",
    date: "2026-05-16 05:45:55",
    campaign: "Support Campaign",
    group: "Support",
    session: "04:25:18",
    server: "Server-02",
    phone: "1005",
    computer: "DESKTOP-105",
    "phone login": "PL-1005",
    "phone ip": "192.168.1.14",
  },
];
  return (
    <div> 
      <div className="bg-white border-light rounded-2xl  overflow-hidden">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Agent Login and Logout Time
            </h2>
            
          </div>
          <Button 
            type="button"
            variant='success'
            icon="download-2-line" 
          >
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

export default AgentTalkTimeReport;