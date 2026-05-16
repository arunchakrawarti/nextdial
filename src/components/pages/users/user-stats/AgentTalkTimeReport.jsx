"use client";
import React from 'react';
import BasicTable from '@/components/common/BasicTable'; 
import Button from '@/components/common/Button';

const AgentTalkTimeReport = () => {
  
 
  const columns = [
    {
      label: "Status",
      key: "status"
    },
    {
      label: "Count",
      key: "count",
    },
    {
      label: "Hours:Mm:Ss",
      key: "time",
    }
  ];
  const Data = [
    { status: "TOTAL CALLS", count: 24, time: "02:15:40" },
    { status: "ANSWERED CALLS", count: 18, time: "01:50:12" },
    { status: "MISSED CALLS", count: 6, time: "00:00:00" },
    { status: "ON HOLD CALLS", count: 2, time: "00:04:15" },
    { status: "TRANSFERED CALLS", count: 3, time: "00:10:22" }
  ];

  return (
    <div> 
      <div className="bg-white border-light rounded-2xl  overflow-hidden">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Agent Talk Time and Status
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