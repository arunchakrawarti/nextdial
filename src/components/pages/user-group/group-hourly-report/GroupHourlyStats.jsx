"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { Funnel, Send } from "lucide-react";

const GroupHourlyStats = () => {
  return (
    <div className="bg-white rounded-xl border-light overflow-hidden">
      <div className="flex items-center gap-5 p-8 ">
        <div>
          <h2 className="heading font-lexend">
            Group Hourly Stats
          </h2>
          <p className="text-gray-500 mt-1">
            Please enter the details below to get hourly stats.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="space-y-5">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 lg:col-span-8">
              <Input
              label="Group"
                type="select"
                defaultValue="ADMIN"
                options={[
                  {
                    label: "ADMIN - VICIDIAL ADMINISTRATORS",
                    value: "ADMIN",
                  },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">

            <div className="col-span-12 lg:col-span-8">
              <Input
                label="Status"
                type="text"
                placeholder="Enter status"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 lg:col-span-8">
              <Input
              label="Date With Hour"
                type="datetime-local"
                defaultValue="2026-06-02T14:00"
              />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <Button
              text="SUBMIT"
              icon={<Send size={16} />}
              className="px-8 py-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupHourlyStats;