"use client"; 
import BasicTable from '@/components/common/BasicTable';
import React from 'react';

const sampleData = [
  { lead: "221", list: "998", campaign: "outbound", entryDate: "2026-04-10 17:12:02", callbackDate: "2026-04-11 17:11:00", user: "5001", recipient: "USERONLY", status: "LIVE", group: "agent" },
  { lead: "209", list: "998", campaign: "outbound", entryDate: "2026-05-05 14:21:35", callbackDate: "2026-05-05 06:24:00", user: "5002", recipient: "USERONLY", status: "LIVE", group: "agent" },
  { lead: "182", list: "998", campaign: "outbound", entryDate: "2026-04-03 18:55:26", callbackDate: "2026-04-08 18:53:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "182", list: "998", campaign: "outbound", entryDate: "2026-04-03 18:55:28", callbackDate: "2026-04-08 18:53:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "182", list: "998", campaign: "outbound", entryDate: "2026-04-03 18:55:32", callbackDate: "2026-04-08 18:53:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "182", list: "998", campaign: "outbound", entryDate: "2026-04-03 18:56:15", callbackDate: "2026-04-08 18:53:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "183", list: "998", campaign: "outbound", entryDate: "2026-04-03 19:00:12", callbackDate: "2026-04-11 18:59:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "183", list: "998", campaign: "outbound", entryDate: "2026-04-03 19:01:46", callbackDate: "2026-04-11 18:59:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "183", list: "998", campaign: "outbound", entryDate: "2026-04-03 19:02:19", callbackDate: "2026-04-11 18:59:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "183", list: "998", campaign: "outbound", entryDate: "2026-04-03 19:02:20", callbackDate: "2026-04-11 18:59:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "183", list: "998", campaign: "outbound", entryDate: "2026-04-03 19:02:22", callbackDate: "2026-04-11 18:59:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
  { lead: "188", list: "998", campaign: "outbound", entryDate: "2026-04-06 10:34:12", callbackDate: "2026-04-17 10:34:00", user: "5002", recipient: "USERONLY", status: "ACTIVE", group: "agent" },
];

const ListCallbackTable = () => {
  const columns = [
    {
      key: 'lead',
      label: 'Lead',
    },
    {
      key: 'list',
      label: 'List',
    },
    {
      key: 'campaign',
      label: 'Campaign',
    },
    {
      key: 'entryDate',
      label: 'Entry Date',
    },
    {
      key: 'callbackDate',
      label: 'Callback Date',
    },
    {
      key: 'user',
      label: 'User',
    },
    {
      key: 'recipient',
      label: 'Recipient',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'group',
      label: 'Group',

    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 font-sans">
      <div className=" border-light rounded-lg">
        <h2 className="text-xl font-medium p-4 text-gray-800 tracking-wide font-lexend uppercase">
        List Callback Hold Listings <span className="font-semibold">998</span>
      </h2>
        <BasicTable
          columns={columns}
          data={sampleData}
          pagination={false}
          wrapperClassName="!rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2 pl-2">
        <a 
          href="/remove-month-old" 
          className="text-[15px] font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors w-fit"
        >
          Remove LIVE Callbacks older than one month for this list
        </a>
        <a 
          href="/remove-week-old" 
          className="text-[15px] font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors w-fit"
        >
          Remove LIVE Callbacks older than one week for this list
        </a>
      </div>
    </div>
  );
};

export default ListCallbackTable;