"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const Recordings = () => {

const columns = [
  {
    label: "Lead",
    key: "lead",
  },
  {
    label: "Date/Time",
    key: "date/time",
  },

  {
    label: "Seconds",
    key: "seconds",
  },
  {
    label: "Recid",
    key: "recid",
  },
  {
    label: "Filename",
    key: "filename",
  },
  {
    label: "Location",
    key: "location",
  },
];

const Data = [
  {
    lead: "LD1001",
    "date/time": "2026-05-16 09:00:15",
    seconds: "345",
    recid: "REC001",
    filename: "call_recording_001.mp3",
    location: "Delhi",
  },
  {
    lead: "LD1002",
    "date/time": "2026-05-16 10:20:40",
    seconds: "192",
    recid: "REC002",
    filename: "call_recording_002.mp3",
    location: "Mumbai",
  },
  {
    lead: "LD1003",
    "date/time": "2026-05-16 11:45:22",
    seconds: "385",
    recid: "REC003",
    filename: "call_recording_003.mp3",
    location: "Bangalore",
  },
  {
    lead: "LD1004",
    "date/time": "2026-05-16 13:15:05",
    seconds: "245",
    recid: "REC004",
    filename: "call_recording_004.mp3",
    location: "Chennai",
  },
  {
    lead: "LD1005",
    "date/time": "2026-05-16 15:30:50",
    seconds: "510",
    recid: "REC005",
    filename: "call_recording_005.mp3",
    location: "Hyderabad",
  },
  {
    lead: "LD1006",
    "date/time": "2026-05-16 16:05:30",
    seconds: "278",
    recid: "REC006",
    filename: "call_recording_006.mp3",
    location: "Pune",
  },
  {
    lead: "LD1007",
    "date/time": "2026-05-16 17:12:45",
    seconds: "430",
    recid: "REC007",
    filename: "call_recording_007.mp3",
    location: "Kolkata",
  },
  {
    lead: "LD1008",
    "date/time": "2026-05-16 18:25:18",
    seconds: "165",
    recid: "REC008",
    filename: "call_recording_008.mp3",
    location: "Jaipur",
  },
  {
    lead: "LD1009",
    "date/time": "2026-05-16 19:40:02",
    seconds: "390",
    recid: "REC009",
    filename: "call_recording_009.mp3",
    location: "Lucknow",
  },
  {
    lead: "LD1010",
    "date/time": "2026-05-16 20:55:11",
    seconds: "225",
    recid: "REC010",
    filename: "call_recording_010.mp3",
    location: "Ahmedabad",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="heading font-lexend">
              Recordings for this Time Period
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

export default Recordings;
