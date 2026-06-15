"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button"

const AdminUserOptionsForm = () => {
  

  return (
    <form className="w-full  space-y-6">
      <div className="w-full bg-white rounded-xl border-light overflow-hidden">
        
        <div className="bg-primary px-6 py-4 flex items-center gap-2">
          <i className="ri-settings-4-line text-white text-xl"></i>
          <h2 className="heading font-lexend">
            Admin Options
          </h2>
        </div>

        <div className="p-6 space-y-8">
          
          <div className="space-y-4">
            <div className="bg-primary px-4 py-2 rounded-md">
              <h3 className="heading font-lexend">
                Admin Report Options
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Realtime Block User Info"
                type="select"
                options={["0", "1"]}
                defaultValue="0"
              />
              <Input
                label="Admin Hide Lead Data"
                type="select"
                options={["0", "1"]}
                defaultValue="0"
              />
              <Input
                label="Admin Hide Phone Data"
                type="select"
                options={["0", "1"]}
                defaultValue="0"
              />
              <Input
                label="Search Lead Ignore Group Restrictions"
                type="select"
                options={["0", "1"]}
                defaultValue="0"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-primary px-4 py-2 rounded-md">
              <h3 className="heading font-lexend">
                Admin Interface Options
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="View Reports" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Alter Agent Interface Options" type="select" options={["0", "1"]} defaultValue="1" />
              <Input label="Modify Users" type="select" options={["0", "1"]} defaultValue="1" />
              <Input label="Change Agent Campaign" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Users" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify User Groups" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete User Groups" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Lists" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Lists" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Load Leads" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Leads" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="GDPR-Compliant Export Delete Leads" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Download Lists" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Export Reports" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete From DNC Lists" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Campaigns" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Campaign Detail" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Campaign Dial Prefix" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Campaigns" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify In-Groups" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete In-Groups" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify DIDs" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete DIDs" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Custom Dialplans" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Remote Agents" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Remote Agents" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Scripts" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Scripts" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Filters" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Filters" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="AGC Admin Access" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="AGC Delete Phones" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Call Times" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Call Times" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Servers" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Shifts" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Phones" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Carriers" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Labels" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Colors" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Statuses" type="select" options={["0", "1"]} defaultValue="1" />
              <Input label="Modify Voicemail" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Audio Store" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Music On Hold" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify TTS" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Contacts" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="CallCard Access" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Add Timeclock Log Record" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Modify Timeclock Log Record" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Delete Timeclock Log Record" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Manager Shift Enforcement Override" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Manager Pause Code Approval" type="select" options={["0", "1"]} defaultValue="1" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary px-4 py-2 rounded-md">
              <h3 className="heading font-lexend">
                Security Options, Only Enable If Needed
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Two Factor Auth Override"
                type="select"
                options={["NOT_ACTIVE", "ACTIVE"]}
                defaultValue="NOT_ACTIVE"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-primary px-4 py-2 rounded-md">
              <h3 className="heading font-lexend">
                API User Options, Only Enable If Needed
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Agent API Access" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="API List Restrict" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="API Only User" type="select" options={["0", "1"]} defaultValue="0" />
            </div>
            <div className="pt-2">
              <Input
                label="API Allowed Functions"
                type="select"
                multiple={true}
                className="w-full h-44 p-2 bg-[#f8f9fa] border border-[#e2e8f0] rounded-md text-sm text-gray-700 font-medium focus:outline-none focus:border-[#5a52cd] overflow-y-auto"
                defaultValue={["ALL_FUNCTIONS"]}
                options={[
                  "ALL_FUNCTIONS",
                  "add_group_alias",
                  "add_lead",
                  "add_list",
                  "add_phone",
                  "add_phone_alias"
                ]}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-primary px-4 py-2 rounded-md">
              <h3 className="heading font-lexend">
                Disable Admin and Agent Screen Options
              </h3>
            </div>
            <p className="text-xs text-gray-400 italic pl-1">No config inputs required for this subsection.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-primary px-4 py-2 rounded-md">
              <h3 className="text-white font-lexend font-semibold text-xs uppercase tracking-wider">
                Level 9 Admin Options
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Modify Same User Level" type="select" options={["0", "1"]} defaultValue="1" />
              <Input label="Download Invalid Files" type="select" options={["0", "1"]} defaultValue="0" />
              <Input label="Alter Admin Interface Options" type="select" options={["0", "1"]} defaultValue="1" />
            </div>
          </div>

        </div>
        <div className="p-4 flex justify-end items-center gap-3">
          <Button
            type="submit" variant="gradient"
          >
            <i className="ri-save-line"></i> SUBMIT
          </Button>
          <Button variant="danger"
            type="button"
            
          >
            <i className="ri-close-line"></i> Cancel
          </Button>
        </div>

      </div>
    </form>
  );
};

export default AdminUserOptionsForm;