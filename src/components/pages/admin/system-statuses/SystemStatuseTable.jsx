"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import AddNewSystemStatus from "./AddNewSystemStatus";

const SystemStatuseTable = () => {
  const campaignColumns = [
    {
      label: "STATUS",
      key: "status",
    },
    {
      label: "DESCRIPTION",
      key: "description",
      render: (_, row) => (
        <div className="min-w-[220px]">
          <Input type="text" defaultValue={row.description} />
        </div>
      ),
    },
    {
      label: "CATEGORY",
      key: "category",
      render: (_, row) => (
        <div className="min-w-[280px]">
          <Input
            type="select"
            defaultValue="undefined"
            options={[
              {
                label: "UNDEFINED - Default Category",
                value: "undefined",
              },
              {
                label: "Sales",
                value: "sales",
              },
              {
                label: "Support",
                value: "support",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "AGENT SELECTABLE",
      key: "agentSelectable",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "HUMAN ANSWER",
      key: "humanAnswer",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "SALE",
      key: "sale",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "DNC",
      key: "dnc",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "CUSTOMER CONTACT",
      key: "customerContact",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "NOT INTERESTED",
      key: "notInterested",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "UNWORKABLE",
      key: "unworkable",
      render: (_, row) => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue={row.unworkable}
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "SCHEDULED CALLBACK",
      key: "scheduledCallback",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "COMPLETED",
      key: "completed",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "ANSWERING MACHINE",
      key: "answeringMachine",
      render: () => (
        <div className="w-[80px]">
          <Input
            type="select"
            defaultValue="N"
            options={[
              {
                label: "Y",
                value: "Y",
              },
              {
                label: "N",
                value: "N",
              },
            ]}
          />
        </div>
      ),
    },
    {
      label: "MIN SEC",
      key: "minSec",
      render: (_, row) => (
        <div className="w-[90px]">
          <Input type="text" defaultValue={row.minSec} />
        </div>
      ),
    },
    {
      label: "MAX SEC",
      key: "maxSec",
      render: (_, row) => (
        <div className="w-[90px]">
          <Input type="text" defaultValue={row.maxSec} />
        </div>
      ),
    },
    {
      label: "MODIFY",
      key: "modify",
      render: () => (
        <div className="w-[120px]">
          <Button variant="gradient">
            Modify
          </Button>
        </div>
      ),
    },
    {
      label: "DELETE",
      key: "delete",
      render: () => (
        <div className="w-[120px]">
          <Button className="!bg-red-600 hover:!bg-red-700 text-white px-4 py-2 rounded-lg">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const campaignData = [
    {
      status: "AB",
      description: "Busy Auto",
      category: "UNDEFINED",
      unworkable: "N",
      minSec: "0",
      maxSec: "0",
    },
    {
      status: "ADAIR",
      description: "Dead Air Auto",
      category: "UNDEFINED",
      unworkable: "N",
      minSec: "0",
      maxSec: "0",
    },
    {
      status: "ADC",
      description: "Disconnected Number Auto",
      category: "UNDEFINED",
      unworkable: "Y",
      minSec: "0",
      maxSec: "0",
    },
    {
      status: "ADCT",
      description: "Disconnected Number Tel",
      category: "UNDEFINED",
      unworkable: "N",
      minSec: "0",
      maxSec: "0",
    },
  ];

  return (
    <div>
        <div className="bg-white rounded-xl border border-light mt-5 overflow-hidden">
    
      <div className="p-4 border-b border-light">
        <h2 className="heading font-lexend">
          System Status Deleted
        </h2>
      </div>
      <div className="overflow-x-auto">
        <BasicTable
          columns={campaignColumns}
          data={campaignData}
          pagination={false}
        />
      </div>
    </div>
      <AddNewSystemStatus/>
    </div>
  );
};

export default SystemStatuseTable;