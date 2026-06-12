"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ScreenColorTable = () => {
  const campaignColumns = [
    {
      label: "Colors Id",
      key: "colorsId",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Menu Colors",
      key: "menuColors",
    },
    {
      label: "Logo",
      key: "logo",
      render: (_, row) => (
        <div className="w-10 h-10 rounded-md overflow-hidden border border-light">
          <img
            src={row.logo}
            alt={row.name}
            className="w-full h-full object-cover"
          />
        </div>
      ),
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
          href="/admin/screen-color/modify-color"
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      colorsId: "CLR001",
      name: "Blue Theme",
      active: "Y",
      menuColors: "#2563EB",
      logo:
        "https://dummyimage.com/100x100/2563eb/ffffff.png&text=B",
      adminGroup: "Admin Team A",
    },
    {
      colorsId: "CLR002",
      name: "Green Theme",
      active: "Y",
      menuColors: "#16A34A",
      logo:
        "https://dummyimage.com/100x100/16a34a/ffffff.png&text=G",
      adminGroup: "Support Team",
    },
    {
      colorsId: "CLR003",
      name: "Red Theme",
      active: "N",
      menuColors: "#DC2626",
      logo:
        "https://dummyimage.com/100x100/dc2626/ffffff.png&text=R",
      adminGroup: "Network Team",
    },
    {
      colorsId: "CLR004",
      name: "Purple Theme",
      active: "Y",
      menuColors: "#9333EA",
      logo:
        "https://dummyimage.com/100x100/9333ea/ffffff.png&text=P",
      adminGroup: "Operations",
    },
    {
      colorsId: "CLR005",
      name: "Orange Theme",
      active: "N",
      menuColors: "#EA580C",
      logo:
        "https://dummyimage.com/100x100/ea580c/ffffff.png&text=O",
      adminGroup: "Security Team",
    },
    {
      colorsId: "CLR006",
      name: "Dark Theme",
      active: "Y",
      menuColors: "#111827",
      logo:
        "https://dummyimage.com/100x100/111827/ffffff.png&text=D",
      adminGroup: "Admin Team B",
    },
    {
      colorsId: "CLR007",
      name: "Pink Theme",
      active: "Y",
      menuColors: "#DB2777",
      logo:
        "https://dummyimage.com/100x100/db2777/ffffff.png&text=P",
      adminGroup: "UI Team",
    },
    {
      colorsId: "CLR008",
      name: "Cyan Theme",
      active: "N",
      menuColors: "#0891B2",
      logo:
        "https://dummyimage.com/100x100/0891b2/ffffff.png&text=C",
      adminGroup: "Frontend Team",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Screen Colors
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

export default ScreenColorTable;