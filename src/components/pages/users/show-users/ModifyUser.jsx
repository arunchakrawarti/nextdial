"use client";
import React from "react";
import Input from "@/components/common/Input"; // आपका कस्टम इनपुट कॉम्पोनेंट
import AgentInterfaceOptions from "./AgentInterfaceOptions";
import CampaignRanksTable from "./CampaignRanksTable";
import InboundGroupsTable from "./InboundGroupsTable";
import AdminUserOptionsForm from "./AdminUserOptionsForm";
import UserAction from "./UserAction";

const ModifyUser = () => {
  return (
    <div className="w-full  space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold tracking-wide text-black font-lexend uppercase">
          MODIFY A USERS RECORD
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl p-6 border border-light space-y-5">
         
          <div className="flex items-center gap-2 pb-3">
            <h2 className="text-[15px] font-bold text-gray-800">User Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label="User Number" 
              type="text" 
              placeholder="1002"
            />

            <Input 
              label="User Level" 
              type="select" 
              options={["1", "2", "3"]}
            />

            <div className="md:col-span-2">
              <Input 
                label="Password" 
                type="text" 
                placeholder="1002"
              />
            </div>

            <Input 
              label="Force Change Password" 
              type="select" 
              options={["N", "Y"]}
            />

            <div>
              <label className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-1.5">
                Last Login Info
              </label>
              <div className="w-full h-11 px-3 bg-[#f8f9fa] border border-[#e2e8f0] rounded-md flex flex-col justify-center text-[11px] text-gray-400 font-medium">
                <span>2001-01-01 00:00:01 — 0 —</span>
                <span className="text-[#5a52cd] cursor-pointer hover:underline">Logins summary</span>
              </div>
            </div>

            <Input 
              label="Full Name" 
              type="text" 
              placeholder="1002"
            />

            <Input 
              label="User Group" 
              type="select" 
              options={["agent", "admin", "manager"]}
            />

            <Input 
              label="Phone Login" 
              type="text" 
              placeholder="5001"
            />

            <Input 
              label="Phone Pass" 
              type="text" 
              placeholder="5001"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-light space-y-5">
          <div className="flex items-center gap-2 pb-3">
            <h2 className="text-[15px] font-bold text-gray-800">Account Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label="Active" 
              type="select" 
              options={["Y", "N"]}
            />

            <div className="relative">
              <Input 
                label="Voicemail ID" 
                type="text" 
              />
            </div>

            <div className="md:col-span-2">
              <Input 
                label="Email" 
                type="email" 
              />
            </div>

            <Input 
              label="User Code" 
              type="text" 
            />

            <Input 
              label="Mobile Number" 
              type="text" 
            />

            <Input 
              label="User Location" 
              type="select" 
              options={["- default"]}
            />

            <Input 
              label="VERM Secondary User Group" 
              type="select" 
              options={["--UNDEFINED--"]}
            />

            <Input 
              label="Main Territory" 
              type="text" 
            />

            <div className="md:col-span-2">
              <Input 
                label="User Nickname" 
                type="text" 
              />
            </div>
          </div>
        </div>

      </div>
      <AgentInterfaceOptions/>
      <CampaignRanksTable/>
      <InboundGroupsTable/>
      <AdminUserOptionsForm/>
      <UserAction/>
    </div>
  );
};

export default ModifyUser;