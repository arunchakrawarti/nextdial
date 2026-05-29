"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const RealTimeCampaignSummary = () => {
  const campaignOptions = [
    {
      label: "SHOW ALL CAMPAIGNS",
      value: "all",
    },
    {
      label: "Sales Campaign",
      value: "sales",
    },
    {
      label: "Support Campaign",
      value: "support",
    },
    {
      label: "Marketing Campaign",
      value: "marketing",
    },
  ];

  return (
    <div className="w-full bg-white border-light px-4 py-3 rounded-xl mt-5">
      <div className="mb-4">
        <h2 className="heading font-lexend">
          Real-Time Campaign Summary
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="danger">STOP</Button>

        <Button variant="success">SLOW</Button>

        <Button variant="success">GO</Button>

        <Button variant="secondary">+ VIEW MORE SETTINGS</Button>

        <Button variant="primary">DOWNLOAD</Button>

        <Button variant="primary">REPORTS</Button>

        <div className="w-full sm:w-[260px]">
          <Input
            type="select"
            options={campaignOptions}
            placeholder="SHOW ALL CAMPAIGNS"
          />
        </div>

        <Button variant="gradient">SUBMIT</Button>
      </div>
    </div>
  );
};

export default RealTimeCampaignSummary;
