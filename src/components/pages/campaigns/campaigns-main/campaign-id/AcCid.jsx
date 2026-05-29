"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { PlusCircle, Info } from "lucide-react";

const AcCid = () => {
  const columns = [
    {
      label: "Sno",
      key: "id",
    },
    {
      label: "Areacode",
      key: "areaCode",
    },
    {
      label: "Cid Number",
      key: "cidNumber",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Description",
      key: "active",
      render: (value) => (
        <div className="flex justify-center">
          <div
            className={`w-11 h-6 rounded-full relative ${
              value ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-[2px] w-5 h-5 rounded-full bg-white transition-all ${
                value ? "right-[2px]" : "left-[2px]"
              }`}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Calls",
      key: "calls",
    },
    {
      label: "Action",
      key: "delete",
      render: () => (
        <button className="flex justify-center w-full text-red-500 hover:text-red-700">
          <Trash2 size={18} />
        </button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      areaCode: "212",
      cidNumber: "1234567890",
      description: "New York CID",
      active: true,
      calls: 15,
    },
    {
      id: 2,
      areaCode: "310",
      cidNumber: "9876543210",
      description: "California CID",
      active: false,
      calls: 8,
    },
    {
      id: 3,
      areaCode: "646",
      cidNumber: "5551234567",
      description: "Support Campaign",
      active: true,
      calls: 22,
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-xl  border-light overflow-hidden">
        <div className="px-6 py-5 border-light">
          <h2 className="heading font-lexend">
            Areacode Cids For This Campaign
          </h2>
        </div>

        <div>
          <BasicTable columns={columns} data={data} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-light overflow-hidden">
        <div className="flex items-center gap-4 p-6 border-b border-light">
          <h2 className="heading font-lexend">
            Add New Areacode Cid
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-3">
              <Input label="AREACODE" placeholder="Enter areacode" />
            </div>

            <div className="col-span-12 md:col-span-4">
              <Input label="DESCRIPTION" placeholder="Enter description" />
            </div>

            <div className="col-span-12 md:col-span-3">
              <Input label="OUTBOUND CID" placeholder="Enter outbound CID" />
            </div>

            <div className="col-span-12 md:col-span-2">
              <Button variant="gradient">
                <PlusCircle size={18} />
                ADD
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-light bg-[#F8FAFC] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
              <Info size={14} className="text-primary" />
            </div>

            <Link
              href="/report/ac-cid-changes"
              className="text-primary text-[1rem] hover:underline"
            >
              Click here to see Admin changes to this campaign AC-CID
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcCid;
