"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const TemplateTable = () => {
  const campaignColumns = [
    {
      label: "Template Id",
      key: "templateId",
    },
    {
      label: "Template Name",
      key: "templateName",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button
          href="/admin/templates/modify-template"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      templateId: "TEMP001",
      templateName: "Inbound Support Template",
      adminGroup: "Admin Team A",
    },
    {
      templateId: "TEMP002",
      templateName: "Sales Follow-up Template",
      adminGroup: "Sales Team",
    },
    {
      templateId: "TEMP003",
      templateName: "Customer Feedback Template",
      adminGroup: "Support Team",
    },
    {
      templateId: "TEMP004",
      templateName: "Appointment Reminder Template",
      adminGroup: "Operations Team",
    },
    {
      templateId: "TEMP005",
      templateName: "Lead Qualification Template",
      adminGroup: "Marketing Team",
    },
    {
      templateId: "TEMP006",
      templateName: "Holiday Greeting Template",
      adminGroup: "HR Team",
    },
    {
      templateId: "TEMP007",
      templateName: "Call Back Request Template",
      adminGroup: "Customer Care",
    },
    {
      templateId: "TEMP008",
      templateName: "Survey Collection Template",
      adminGroup: "Research Team",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-light">
        <h2 className="heading font-lexend">
          CONF TEMPLATE LISTINGS
        </h2>
      </div>
      <BasicTable
        columns={campaignColumns}
        data={campaignData}
        pagination={true}
      />
    </div>
  );
};

export default TemplateTable;