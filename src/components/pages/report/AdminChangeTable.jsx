"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const AdminChangeTable = () => {
  const columns = [
    {
      label: "Id",
      key: "id",
    },
    {
      label: "Date Time",
      key: "date-time",
    },
    {
      label: "User",
      key: "user",
    },
    {
      label: "Ip",
      key: "ip",
    },
    {
      label: "Section",
      key: "section",
    },
    {
      label: "Type",
      key: "type",
    },
    {
      label: "Record Id",
      key: "record-id",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Goto",
      key: "goto",
      render: () => <Button href="/filters/modify-filter" variant="danger">GOTO</Button>,
    },
  ];
  const Data = [
    {
      id: 1001,
      "date-time": "2026-05-30 09:15:22",
      user: "admin",
      ip: "192.168.1.101",
      section: "Scripts",
      type: "ADD",
      "record-id": "CALLNOTES",
      group: "ADMIN",
      description: "Created new script CALLNOTES",
    },
    {
      id: 1002,
      "date-time": "2026-05-30 09:30:10",
      user: "john",
      ip: "192.168.1.102",
      section: "Filters",
      type: "MODIFY",
      "record-id": "DROP72HOUR",
      group: "SALES",
      description: "Updated filter SQL conditions",
    },
    {
      id: 1003,
      "date-time": "2026-05-30 10:05:45",
      user: "manager",
      ip: "192.168.1.103",
      section: "Campaigns",
      type: "ADD",
      "record-id": "CMP001",
      group: "OUTBOUND",
      description: "Created new outbound campaign",
    },
    {
      id: 1004,
      "date-time": "2026-05-30 10:20:33",
      user: "admin",
      ip: "192.168.1.104",
      section: "Users",
      type: "MODIFY",
      "record-id": "USR1001",
      group: "SUPPORT",
      description: "Updated user permissions",
    },
    {
      id: 1005,
      "date-time": "2026-05-30 10:42:17",
      user: "supervisor",
      ip: "192.168.1.105",
      section: "Lists",
      type: "DELETE",
      "record-id": "LIST500",
      group: "MARKETING",
      description: "Deleted inactive lead list",
    },
    {
      id: 1006,
      "date-time": "2026-05-30 11:15:28",
      user: "admin",
      ip: "192.168.1.106",
      section: "Scripts",
      type: "MODIFY",
      "record-id": "WELCOME01",
      group: "NEW_USERS",
      description: "Modified welcome script content",
    },
    {
      id: 1007,
      "date-time": "2026-05-30 11:48:50",
      user: "rahul",
      ip: "192.168.1.107",
      section: "Filters",
      type: "ADD",
      "record-id": "ACTIVELEADS",
      group: "SALES",
      description: "Added active leads filter",
    },
    {
      id: 1008,
      "date-time": "2026-05-30 12:10:11",
      user: "amit",
      ip: "192.168.1.108",
      section: "Campaigns",
      type: "MODIFY",
      "record-id": "CMP002",
      group: "SUPPORT",
      description: "Updated campaign settings",
    },
    {
      id: 1009,
      "date-time": "2026-05-30 12:35:42",
      user: "neha",
      ip: "192.168.1.109",
      section: "Users",
      type: "ADD",
      "record-id": "USR1020",
      group: "ADMIN",
      description: "Created new user account",
    },
    {
      id: 1010,
      "date-time": "2026-05-30 13:00:00",
      user: "vikas",
      ip: "192.168.1.110",
      section: "Lists",
      type: "MODIFY",
      "record-id": "LIST700",
      group: "COLLECTION",
      description: "Updated lead distribution settings",
    },
  ];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden mt-5">
        <div className="p-4">
          <div>
            <h2 className="heading font-lexend">
              Admin Change Log: Section Records - Filters - DROP72HOUR
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

export default AdminChangeTable;
