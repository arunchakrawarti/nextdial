"use client";
import React from 'react';
import BasicTable from '@/components/common/BasicTable'; 
import Button from '@/components/common/Button';

const TimeClockLogin = () => {
const columns = [
    {
      label: "Id",
      key: "id"
    },
    {
      label: "Event",
      key: "event",
    },
    {
      label: "Date",
      key: "date",
    },
    {
      label: "Ip Address",
      key: "ip address",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Hours:Mm:Ss",
      key: "hours",
    },
  ];
const Data = [
  {
    id: "1001",
    edit: "Edit",
    event: "LOGIN",
    date: "2026-05-16 09:00:15",
    "ip address": "192.168.1.10",
    group: "Agent",
    hours: "02:15:40",
  },

  {
    id: "1002",
    edit: "Edit",
    event: "LOGOUT",
    date: "2026-05-16 11:20:45",
    "ip address": "192.168.1.11",
    group: "Support",
    hours: "01:40:12",
  },

  {
    id: "1003",
    edit: "Edit",
    event: "LOGIN",
    date: "2026-05-16 12:05:10",
    "ip address": "192.168.1.12",
    group: "Marketing",
    hours: "03:05:28",
  },

  {
    id: "1004",
    edit: "Edit",
    event: "BREAK",
    date: "2026-05-16 01:15:20",
    "ip address": "192.168.1.13",
    group: "Agent",
    hours: "00:15:00",
  },

  {
    id: "1005",
    edit: "Edit",
    event: "LOGOUT",
    date: "2026-05-16 05:45:55",
    "ip address": "192.168.1.14",
    group: "Support",
    hours: "04:25:18",
  },
];
  return (
    <div> 
      <div className="bg-white border-light rounded-2xl  overflow-hidden">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Timeclock Login and Logout Time
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

export default TimeClockLogin;