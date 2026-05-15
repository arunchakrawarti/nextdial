"use client";

import SearchBox from "@/components/atoms/SearchBox";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Search, UserRoundPlus } from "lucide-react";
import Link from "next/link";

const UserTable = () => {
  const columns = [
    {
    label: "User Id",
    key: "userId",
    render: (value) => (
      <Link
        href={`/users/${value}`}
        className=" hover:underline"
      >
        {value}
      </Link>
    ),
  },

  {
    label: "Full Name",
    key: "fullName",
    render: (value) => (
      <Link
        href={`/users/profile/${value}`}
        className=" hover:underline"
      >
        {value}
      </Link>
    ),
  },

  {
    label: "Level",
    key: "level",
    render: (value) => (
      <Link
        href={`/users/level/${value}`}
        className=" hover:underline"
      >
        {value}
      </Link>
    ),
  },

  {
    label: "Group",
    key: "group",
    render: (value) => (
      <Link
        href={`/users/group/${value}`}
        className=" hover:underline"
      >
        {value}
      </Link>
    ),
  },

  {
    label: "Active",
    key: "active",
    render: (value) => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <i className="ri-check-line text-white text-sm"></i>
        </div>

        <span className="font-lexend font-medium text-[16px] text-dark">
          {value}
        </span>
      </div>
    ),
  },

    {
      label: "Modify",
      key: "modify",
      render: () => (
        <Button
          variant="danger"
          icon="pencil-line"
          className="rounded-xl whitespace-nowrap"
        >
          Modify
        </Button>
      ),
    },

    {
      label: "Stats",
      key: "stats",
      render: () => (
        <Button
          variant="secondary"
          icon="bar-chart-line"
          className="rounded-xl"
        >
          Stats
        </Button>
      ),
    },

    {
      label: "Status",
      key: "status",
      render: () => (
        <Button variant="green">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
          Status
        </Button>
      ),
    },

    {
      label: "Time",
      key: "time",
      render: () => (
        <Button variant="white" icon="time-line">
          Time
        </Button>
      ),
    },
  ];

  const data = [
    {
      userId: "5001",
      fullName: "5001",
      level: "1",
      group: "agent",
      active: "Y",
    },

    {
      userId: "5002",
      fullName: "5002",
      level: "1",
      group: "agent",
      active: "Y",
    },

    {
      userId: "5003",
      fullName: "5003",
      level: "1",
      group: "agent",
      active: "Y",
    },

    {
      userId: "5004",
      fullName: "5004",
      level: "1",
      group: "agent",
      active: "Y",
    },

    {
      userId: "5005",
      fullName: "5005",
      level: "1",
      group: "agent",
      active: "Y",
    },

    {
      userId: "6666",
      fullName: "Admin",
      level: "9",
      group: "ADMIN",
      active: "Y",
    },

    {
      userId: "man123",
      fullName: "manish",
      level: "1",
      group: "agent",
      active: "Y",
    },

    {
      userId: "manish",
      fullName: "Manish kumar",
      level: "9",
      group: "ADMIN",
      active: "Y",
    },
  ];

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200">

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <h2 className="font-lexend font-semibold text-[20px] sm:text-[20px] lg:text-[24px]  text-dark">
              User Listings
            </h2>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto">
          <SearchBox
            name="search"
            iconLeft={Search}
            placeholder="Search users..."
            className="w-full sm:w-[320px]"
          />

          <Button variant="success" icon="filter-3-line">
            Filters
          </Button>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <BasicTable
          columns={columns}
          data={data}
          pagination={true}
          pageSize={10}
          total={data.length}
        />
      </div>
    </div>
  );
};

export default UserTable;
