"use client";
import BasicTable from '@/components/common/BasicTable';
import React from 'react';
const logData = [
  {
    id: "393",
    dateTime: "2026-05-27 15:12:02",
    user: "6666",
    ip: "10.10.10.5",
    section: "LISTS",
    type: "MODIFY",
    recordId: "998",
    group: "---ALL---",
    description: "ADMIN MODIFY LIST",
    goto: "GOTO"
  },
  {
    id: "174",
    dateTime: "2026-03-31 14:38:24",
    user: "6666",
    ip: "192.168.0.3",
    section: "LISTS",
    type: "CLEAR",
    recordId: "998",
    group: "---ALL---",
    description: "ADMIN CLEARED LIST",
    goto: "GOTO"
  }
];

const AdminChangeLogTable = () => {
  const columns = [
    {
      key: 'id',
      label: 'Id',
    },
    {
      key: 'dateTime',
      label: 'Date Time',
    },
    {
      key: 'user',
      label: 'User',
    },
    {
      key: 'ip',
      label: 'Ip',
    },
    {
      key: 'section',
      label: 'Section',
    },
    {
      key: 'type',
      label: 'Type',
    },
    {
      key: 'recordId',
      label: 'Record Id',
    },
    {
      key: 'group',
      label: 'Group',
    },
    {
      key: 'description',
      label: 'Description',
    },
    {
      key: 'goto',
      label: 'Goto',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 font-sans">
      <h2 className="text-xl font-medium text-dark tracking-wide uppercase">
        Admin Change Log: Section Records - LISTS - <span className="font-semibold">998</span>
      </h2>
      <div className=" border-light rounded-lg">
        <BasicTable
          columns={columns}
          data={logData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default AdminChangeLogTable;