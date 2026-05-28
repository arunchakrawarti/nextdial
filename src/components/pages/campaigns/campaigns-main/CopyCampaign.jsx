"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const CopyCampaign = () => {
  return (
    <div className="bg-white rounded-lg p-6 border-light">
      <div className="mb-8">
        <h2 className="font-bold text-black text-2xl uppercase tracking-tight font-lexend">
          Copy a Campaign
        </h2>
      </div>
      <form className="space-y-6">
        <Input
          label="Campaign ID"
          placeholder="Enter campaign ID"
          type="text"
        />

        <Input
          label="Campaign Name"
          placeholder="Enter campaign name"
          type="text"
        />

        <Input
          label="Source Campaign"
          type="select"
          options={[
            "outbound - outbound",
            "sales - sales",
            "support - support",
          ]}
        />

        <div className="flex justify-end pt-4">
          <Button variant="gradient" className="px-10">
            Submit
          </Button>
        </div>
      </form>
      <div className="mt-8 rounded-lg border border-[#D9D6FE] bg-[#F7F5FF] p-5 border-l-4 border-l-primary">
        <p className="text-sm text-[#4B4B6B] leading-7">
          <span className="font-semibold text-primary font-lexend">NOTE:</span> Copying a
          campaign will copy all settings from the master campaign you select,
          but it will not copy a campaign-specific DNC list if there was one on
          the selected master campaign.
        </p>
      </div>
    </div>
  );
};

export default CopyCampaign;