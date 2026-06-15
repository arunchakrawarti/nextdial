"use client";

import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ModifyMusic = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen py-6">
      <div className="w-full max-w-6xl mx-auto border border-gray-300 bg-white overflow-hidden">
        <div className="px-4 py-2 bg-white border-b border-gray-300">
          <h2 className="heading">
            MODIFY A MUSIC ON HOLD RECORD: default
          </h2>
        </div>
        <div className="px-4 md:px-10 py-8">
          <div className="max-w-4xl mx-auto space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-3 items-center">
              <Input
                label="Music On Hold ID"
                value="default"
                disabled
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-3 items-center">
              <Input
                label="Music On Hold Name"
                placeholder="Default Music On Hold"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[250px_260px] gap-3 items-center">
              <Input
                type="select"
                label="Admin User Group"
                options={[
                  { label: "---ALL---", value: "ALL" },
                  { label: "ADMIN", value: "ADMIN" },
                  { label: "SUPPORT", value: "SUPPORT" },
                  { label: "SALES", value: "SALES" },
                ]}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[250px_100px] gap-3 items-center">
              <Input
                type="select"
                label="Active"
                options={[
                  { label: "Y", value: "Y" },
                  { label: "N", value: "N" },
                ]}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[250px_100px] gap-3 items-center">
              <Input
                type="select"
                label="Random Order"
                options={[
                  { label: "N", value: "N" },
                  { label: "Y", value: "Y" },
                ]}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-3 items-start">
              <div />

              <div className="flex flex-wrap items-center gap-3">
                <Input
                  type="select"
                  label="Rank"
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                  ]}
                  className="w-24"
                />

                <span className="text-lg font-semibold">
                  conf
                </span>

                <button className="text-blue-600 font-medium hover:underline">
                  DELETE
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-white px-4 md:px-10 py-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-3 items-center">

            <Input
              label="Add An Audio File"
              placeholder="Choose Audio File"
              className="w-full"
            />

          </div>


          <div className="flex justify-end mt-8">
            <Button
              variant="gradient"
              className="px-8 py-2"
            >
              SUBMIT
            </Button>
          </div>
        </div>
        <div className="bg-white flex flex-col py-10 text-center space-y-6">

          <button
            type="button"
            onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
            className="text-indigo-600 text-lg md:text-2xl font-bold hover:underline uppercase"
          >
            DELETE MUSIC ON HOLD ENTRY
          </button>

          {showDeleteConfirm && (
            <div className="w-full bg-white border border-light rounded-xl p-5">
              <p className="text-primary font-semibold font-lexend mb-3">
                Are you sure you want to delete this entry?
              </p>

              <Link href="/admin/music-hold">
                <button className="text-primary font-bold font-lexend hover:underline">
                  Click here to confirm delete
                </button>
              </Link>
            </div>
          )}

          <Link href="/report/admin-change">
            <span className="text-indigo-600 font-semibold hover:underline cursor-pointer font-lexend inline-block">
              Click here to see Admin changes to this Music On Hold entry
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ModifyMusic;