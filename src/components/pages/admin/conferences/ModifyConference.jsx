"use client";

import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ModifyConference = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen ">
      <div className="w-full  border-light rounded-2xl overflow-hidden bg-white shadow-sm">
        
        <div className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
          <h2 className="heading font-lexend">
            Modify a Conference Record: 8600002
          </h2>
        </div>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
              <Input
                type="text"
                label="Conference"
                placeholder="Enter Conference"
                defaultValue="8600002"
              />

              <Input
                type="select"
                label="Server IP"
                defaultValue="192.168.0.203"
                options={[
                  {
                    label: "192.168.0.203",
                    value: "192.168.0.203",
                  },
                  {
                    label: "192.168.0.204",
                    value: "192.168.0.204",
                  },
                ]}
              />
              <div className="lg:col-span-2">
                <Input
                  type="text"
                  label="Current Extension"
                  placeholder="Enter Current Extension"
                />
              </div>
            </div>
            <div className="flex justify-end pt-8">
              <Button
                variant="gradient"
              >
                Submit
              </Button>
            </div>

            <div className="flex flex-col pt-10 gap-5">
              
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
                className="text-primary hover:underline text-lg sm:text-xl lg:text-2xl font-semibold"
              >
                Delete This Conference
              </button>

              {showDeleteConfirm && (
                <div className="w-full max-w-2xl  bg-white rounded-xl">
                  
                  <p className="text-red-600 font-semibold text-sm sm:text-base mb-5">
                    Are you sure you want to delete this conference?
                  </p>

                  <div className="flex flex-col sm:flex-row  gap-4">
                    
                    <Link
                      href="/admin/conferences"
                      className="w-full sm:w-auto"
                    >
                      <p className="text-primary font-semibold text-sm sm:text-base mb-5"
                      >
                        Delete Phone 8600002 - 192.168.0.203
                      </p>
                    </Link>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyConference;