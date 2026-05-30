"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const AddScriptForm = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-5 border-light">
      <div className="mb-6">
        <h2 className="heading font-lexend mb-4 text-xl font-bold">
          Add New Script
        </h2>
      </div>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        <Input
          label="Script ID"
          type="text"
          placeholder="Enter script ID"
        />

        <Input
          label="Script Name"
          type="text"
          placeholder="Title of the script"
        />

        <Input
          label="Script Comments"
          type="text"
          placeholder="Optional comments"
        />

        <Input
          label="Active"
          type="select"
          defaultValue="Y"
          options={[
            { label: "Y", value: "Y" },
            { label: "N", value: "N" },
          ]}
        />

        <Input
          label="Admin User Group"
          type="select"
          defaultValue="all"
          options={[
            { label: "All Admin User Groups", value: "all" },
            { label: "ADMIN", value: "ADMIN" },
          ]}
        />

        <div>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Input
                label="Variable Insert"
                type="select"
                defaultValue="agent_name"
                options={[
                  {
                    label: "Agent Name (fullname)",
                    value: "agent_name",
                  },
                  {
                    label: "Lead ID",
                    value: "lead_id",
                  },
                  {
                    label: "Phone Number",
                    value: "phone_number",
                  },
                ]}
              />
            </div>

            <Button
              type="button"
              variant="gradient"
              className="mb-1 px-5"
            >
              Insert
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2 mt-2">
          <Input
            label="Script Text"
            type="textarea"
            rows={15}
            placeholder="Enter script text here..."
            className="w-full"
          />
        </div>
        <div className="lg:col-span-2 flex justify-end mt-4">
          <Button variant="gradient" className="px-20">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddScriptForm;