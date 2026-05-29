"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const LeadSearches = () => {

const columns = [
  {
    label: "Date/Time",
    key: "date/time",
  },
  {
    label: "Type",
    key: "type",
  },

  {
    label: "Results",
    key: "results",
  },
  {
    label: "Sec",
    key: "sec",
  },
  {
    label: "Query",
    key: "query",
  },
];


const Data = [
  {
    "date/time": "2026-05-16 09:00:15",
    type: "Phone Search",
    results: 12,
    sec: 2.1,
    query: "+919876543210",
  },
  {
    "date/time": "2026-05-16 09:25:40",
    type: "Lead Search",
    results: 5,
    sec: 1.8,
    query: "LD1001",
  },
  {
    "date/time": "2026-05-16 10:10:22",
    type: "Name Search",
    results: 18,
    sec: 3.2,
    query: "Rahul Sharma",
  },
  {
    "date/time": "2026-05-16 10:55:48",
    type: "Email Search",
    results: 3,
    sec: 1.4,
    query: "rahul@example.com",
  },
  {
    "date/time": "2026-05-16 11:40:12",
    type: "Phone Search",
    results: 9,
    sec: 2.7,
    query: "+919812345678",
  },
  {
    "date/time": "2026-05-16 12:15:30",
    type: "Lead Search",
    results: 7,
    sec: 1.9,
    query: "LD1005",
  },
  {
    "date/time": "2026-05-16 13:05:50",
    type: "Name Search",
    results: 15,
    sec: 2.8,
    query: "Anjali Verma",
  },
  {
    "date/time": "2026-05-16 14:20:18",
    type: "Email Search",
    results: 4,
    sec: 1.6,
    query: "anjali@example.com",
  },
  {
    "date/time": "2026-05-16 15:35:42",
    type: "Phone Search",
    results: 11,
    sec: 2.3,
    query: "+919900112233",
  },
  {
    "date/time": "2026-05-16 16:50:05",
    type: "Lead Search",
    results: 6,
    sec: 1.7,
    query: "LD1010",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="heading font-lexend">
              Lead Searches for this Time Period
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

export default LeadSearches;
