"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";

const ModifyCallTimeForm = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white border border-light rounded-2xl overflow-hidden mt-5">
      <div className="px-4 sm:px-6 py-5 border-b border-light">
        <h2 className="heading font-lexend">
          Modify a Call Time
        </h2>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="text-[16px] font-medium text-dark whitespace-nowrap">
              Call Time ID
            </label>

            <p className="font-semibold text-[18px] sm:text-[20px] text-dark">
              12pm-5pm
            </p>
          </div>

          <div className="xl:col-span-2">
            <Input
              label="Call Time Name"
              type="text"
              defaultValue="default 12pm to 5pm calling"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          <Input
            label="Call Time Comments"
            type="text"
            placeholder="Enter comments"
          />

          <Input
            label="Admin User Group"
            type="select"
            defaultValue="ALL"
            options={[
              { label: "---ALL---", value: "ALL" },
              { label: "Admin", value: "admin" },
              { label: "Agent", value: "agent" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">

          <Input
            label="Default Start"
            type="text"
            defaultValue="1200"
          />

          <Input
            label="Default Stop"
            type="text"
            defaultValue="1700"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Sunday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Sunday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Monday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Monday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Tuesday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Tuesday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Wednesday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Wednesday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Thursday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Thursday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Friday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Friday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5">

          <Input
            label="Saturday Start"
            type="text"
            defaultValue="0"
          />

          <Input
            label="Saturday Stop"
            type="text"
            defaultValue="0"
          />

          <Input
            label="AH Override"
            type="text"
            placeholder="audio chooser"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="gradient">
            SUBMIT
          </Button>
        </div>
        <div className="mt-16">

          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr_auto] gap-6 items-end">

            <div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold leading-8 font-lexend text-dark">
                Active State Call Time Definitions for this Record:
              </h3>
            </div>

            <Input
              label="Add State Call Time Rule"
              type="select"
              defaultValue="alabama"
              options={[
                {
                  label:
                    "alabama - Alabama 8am-8pm and Sunday",
                  value: "alabama",
                },
                {
                  label:
                    "california - California 9am-9pm",
                  value: "california",
                },
              ]}
            />

            <Button
              variant="gradient"
              className="w-full xl:w-auto"
            >
              SUBMIT
            </Button>
          </div>
        </div>
        <div className="mt-16">

          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr_auto] gap-6 items-end">

            <div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold leading-8 font-lexend text-dark">
                Active Holiday Definitions for this Record:
              </h3>
            </div>

            <Input
              label="Add Holiday Rule"
              type="select"
              defaultValue=""
              options={[
                {
                  label: "Select Holiday",
                  value: "",
                },
                {
                  label: "Christmas",
                  value: "christmas",
                },
                {
                  label: "New Year",
                  value: "newyear",
                },
              ]}
            />

            <Button
              variant="gradient"
              className="w-full xl:w-auto"
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-light px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        <div className="space-y-8 text-center">

          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold uppercase text-dark">
              Campaigns Using This Call Time:
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="text-primary cursor-pointer hover:underline">
                testcamp
              </span>

              <span className="text-dark">
                testcamp
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold uppercase text-dark">
              Inbound Groups Using This Call Time:
            </h3>
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold uppercase text-dark">
              Call Menus Using This Call Time:
            </h3>
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold uppercase text-dark">
              Lists Set To This Call Time:
            </h3>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-4">

          <p
            type="button"
            onClick={() =>
              setShowDeleteConfirm(!showDeleteConfirm)
            }
            className="text-primary hover:underline text-[16px] sm:text-[18px] font-semibold uppercase text-left transition-all font-lexend"
          >
            DELETE THIS CALL TIME DEFINITION
          </p>

          {showDeleteConfirm && (
            <div className="w-full border-light rounded-xl bg-white p-4 sm:p-5 space-y-3">

              <h3 className="text-[14px] sm:text-[16px] font-bold uppercase text-red-700 font-lexend">
                CALL TIME DELETION CONFIRMATION: 12pm-5pm
              </h3>

              <Link href='/admin/call-times'>
              <button className="text-primary hover:underline text-sm sm:text-base font-medium text-left font-lexend">
                Click here to delete call time 12pm-5pm
              </button>
              </Link>
            </div>
          )}

          <Link href="/report/admin-change">
          <button className="text-primary hover:underline text-[16px] sm:text-[18px] text-left font-lexend">
            Click here to see Admin changes to this call time
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyCallTimeForm;