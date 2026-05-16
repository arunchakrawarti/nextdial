"use client";
import SearchBox from "@/components/atoms/SearchBox";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Search, Trash2 } from "lucide-react";
import Link from "next/link";

const UserTable = () => {
const columns = [
  {
    label: "User Id",
    key: "userId",
    render: (value) => (
      <Link
        href={`/users/${value}`}
        className="hover:underline text-primary"
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
        className="hover:underline text-dark"
      >
        {value}
      </Link>
    ),
  },
  {
    label: "Level",
    key: "level",
  },
  {
    label: "Group",
    key: "group",
  },
  {
    label: "Status",
    key: "status",
    render: (value) => (
      <Badge
        text={value}
        customStyle="capitalize"
      />
    ),
  },
  {
    label: "Action",
    key: "action",
    render: (_, row) => (
      <div className="flex items-center gap-[0.75rem]">
        <button
          className="w-[2rem] h-[2rem] rounded-lg bg-[#F5F2FF] flex items-center justify-center text-primary hover:opacity-80 transition"
        >
          <Pencil size={16} />
        </button>
        <button
          className="w-[2rem] h-[2rem] rounded-lg bg-[#FEF3F2] flex items-center justify-center text-[#F04438] hover:opacity-80 transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
];

const data = [
  {
    userId: "5001",
    fullName: "Manish Kumar",
    level: "1",
    group: "agent",
    status: "active",
  },

  {
    userId: "5002",
    fullName: "Rahul Sharma",
    level: "1",
    group: "agent",
    status: "inactive",
  },

  {
    userId: "5003",
    fullName: "Amit Verma",
    level: "2",
    group: "admin",
    status: "inactive",
  },

  {
    userId: "5004",
    fullName: "Rohit Singh",
    level: "1",
    group: "agent",
    status: "active",
  },

  {
    userId: "5005",
    fullName: "Sandeep Kumar",
    level: "3",
    group: "manager",
    status: "active",
  },
];

  return (
    <div className="bg-white rounded-xl border-light">

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
          wrapperClassName="border-none"
        />
      </div>
    </div>
  );
};

export default UserTable;
