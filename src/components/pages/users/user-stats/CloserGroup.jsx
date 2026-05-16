"use client";
import React from 'react';
import BasicTable from '@/components/common/BasicTable'; 
import Button from '@/components/common/Button';

const CloserGroup = () => {
const columns = [
    {
      label: "Date/Time",
      key: "date-time"
    },
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Blend",
      key: "blend",
    },
    {
      label: "Groups",
      key: "groups",
    },
    {
      label: "Manager",
      key: "manager",
    },
  ];
const Data = [
  {
    "date-time": "2026-05-16 09:00:15",
    campaign: "Sales Campaign",
    blend: "Inbound",
    groups: "Closer Team A",
    manager: "Robert Allen",
  },

  {
    "date-time": "2026-05-16 10:20:40",
    campaign: "Support Campaign",
    blend: "Outbound",
    groups: "Closer Team B",
    manager: "Manish Kumar",
  },

  {
    "date-time": "2026-05-16 11:45:22",
    campaign: "Marketing Campaign",
    blend: "Blended",
    groups: "Marketing Closers",
    manager: "Rahul Sharma",
  },

  {
    "date-time": "2026-05-16 01:15:05",
    campaign: "Customer Care",
    blend: "Inbound",
    groups: "Care Team",
    manager: "Amit Verma",
  },

  {
    "date-time": "2026-05-16 03:30:50",
    campaign: "Technical Support",
    blend: "Outbound",
    groups: "Tech Closers",
    manager: "Sandeep Kumar",
  },
];
  return (
    <div> 
      <div className="bg-white border-light rounded-2xl  overflow-hidden">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Closer In-Group Selection Logs
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

export default CloserGroup;