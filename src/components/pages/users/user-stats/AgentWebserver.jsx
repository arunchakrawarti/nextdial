"use client";
import React from 'react';
import BasicTable from '@/components/common/BasicTable'; 
import Button from '@/components/common/Button';

const AgentWebserver = () => {
const columns = [
    {
      label: "Date",
      key: "date"
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
      label: "Dialer Server",
      key: "dialer server",
    },
    {
      label: "Web Server",
      key: "web server",
    },
    {
      label: "Login Url",
      key: "login url",
    },
  ];

const Data = [
  {
    date: "2026-05-16 09:00:15",
    campaign: "Sales Campaign",
    group: "Agent",
    "dialer server": "Dialer-01",
    "web server": "Web-01",
    "login url": "https://sales.company.com/login",
  },

  {
    date: "2026-05-16 10:20:40",
    campaign: "Support Campaign",
    group: "Support",
    "dialer server": "Dialer-02",
    "web server": "Web-02",
    "login url": "https://support.company.com/login",
  },

  {
    date: "2026-05-16 11:45:22",
    campaign: "Marketing Campaign",
    group: "Marketing",
    "dialer server": "Dialer-03",
    "web server": "Web-03",
    "login url": "https://marketing.company.com/login",
  },

  {
    date: "2026-05-16 01:15:05",
    campaign: "Customer Care",
    group: "Customer Support",
    "dialer server": "Dialer-04",
    "web server": "Web-04",
    "login url": "https://care.company.com/login",
  },

  {
    date: "2026-05-16 03:30:50",
    campaign: "Technical Support",
    group: "Tech Team",
    "dialer server": "Dialer-05",
    "web server": "Web-05",
    "login url": "https://tech.company.com/login",
  },
];
  return (
    <div> 
      <div className="bg-white border-light rounded-2xl  overflow-hidden">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Agent Webserver and URL Logins
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

export default AgentWebserver;