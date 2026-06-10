"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";
import Link from "next/link";

const ModifyTemplate = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] =
    useState(false);

  const phoneColumns = [
    { label: "Extension", key: "extension" },
    { label: "Name", key: "name" },
    { label: "Server", key: "server" },
    { label: "Active", key: "active" },
  ];

  const carrierColumns = [
    { label: "Carrier", key: "carrier" },
    { label: "Name", key: "name" },
    { label: "Server", key: "server" },
    { label: "Active", key: "active" },
  ];

  const phoneData = [
    {
      extension: "1001",
      name: "Support Phone",
      server: "Server-01",
      active: "Y",
    },
    {
      extension: "1002",
      name: "Sales Phone",
      server: "Server-02",
      active: "Y",
    },
  ];

  const carrierData = [
    {
      carrier: "Carrier-01",
      name: "Twilio Carrier",
      server: "Server-A",
      active: "Y",
    },
    {
      carrier: "Carrier-02",
      name: "SIP Carrier",
      server: "Server-B",
      active: "N",
    },
  ];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mt-5">

      {/* Header */}
      <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
        <h2 className="heading font-lexend">
          Modify A Conf Template Record:
          SIP_generic
        </h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border border-gray-200 rounded-xl p-4 bg-white">

          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Template ID:
          </span>

          <p className="text-base font-bold text-gray-900 break-all">
            SIP_generic
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Input
            label="Template Name"
            type="text"
            defaultValue="SIP phone generic"
          />

          <Input
            label="Admin User Group"
            type="select"
            defaultValue="ALL"
            options={[
              {
                label: "---ALL---",
                value: "ALL",
              },
              {
                label: "Admin",
                value: "admin",
              },
              {
                label: "Agent",
                value: "agent",
              },
            ]}
          />
        </div>

        {/* Textarea */}
        <div className="w-full">

          <Input
            label="Template Contents"
            type="textarea"
            className="font-mono text-sm min-h-[180px]"
          />
        </div>
        <div className="flex justify-center">

          <Button
            variant="gradient"
            className="w-full sm:w-auto px-10 py-3"
          >
            SUBMIT
          </Button>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

          <div className="p-4 border-b border-gray-200">
            <h3 className="text-center text-base sm:text-lg font-bold uppercase text-gray-800">
              Phones Using This Conf Template
            </h3>
          </div>

          <BasicTable
            columns={phoneColumns}
            data={phoneData}
            pagination={false}
          />
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

          <div className="p-4 border-b border-gray-200">
            <h3 className="text-center text-base sm:text-lg font-bold uppercase text-gray-800">
              Carriers Using This Conf Template
            </h3>
          </div>

          <BasicTable
            columns={carrierColumns}
            data={carrierData}
            pagination={false}
          />
        </div>
        <div className="flex flex-col items-start gap-4 pt-2">
          <button
            type="button"
            onClick={() =>
              setShowDeleteConfirm(
                !showDeleteConfirm
              )
            }
            className="text-red-600 hover:underline text-sm sm:text-base font-bold uppercase transition-all"
          >
            DELETE THIS CONF TEMPLATE
          </button>

          {showDeleteConfirm && (
            <div className="w-full border border-red-200 bg-red-50 rounded-xl p-4 space-y-3">

              <h4 className="text-sm font-bold uppercase text-red-700">
                CONF TEMPLATE DELETION
                CONFIRMATION: SIP_generic
              </h4>

              <Link href="/admin/templates">
                <span className="text-blue-600 hover:underline text-sm sm:text-base cursor-pointer inline-block">
                  Click here to delete conf
                  template SIP_generic
                </span>
              </Link>
            </div>
          )}
          <Link href="/report/admin-change">
            <span className="text-blue-600 hover:underline text-sm sm:text-base cursor-pointer inline-block">
              Click here to see Admin
              changes to this conf template
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyTemplate;