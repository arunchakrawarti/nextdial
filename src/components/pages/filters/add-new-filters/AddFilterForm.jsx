"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const AddFilterForm = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-5 border-light">
      <div className="mb-6">
        <h2 className="heading font-lexend mb-4 text-xl font-bold">
          Add New Filter
        </h2>
      </div>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        <Input
          label="Filter ID"
          type="text"
          placeholder="Enter Filter ID"
        />

        <Input
          label="Filter Name"
          type="text"
          placeholder="Short description of the filter"
        />

        <Input
          label="Filter Comments"
          type="text"
          placeholder="Enter filter comments"
        />

        <Input
          label="Admin User Group"
          type="select"
          defaultValue="all"
          options={[
            {
              label: "All Admin User Groups",
              value: "all",
            },
            {
              label: "ADMIN",
              value: "ADMIN",
            },
          ]}
        />
        <div className="lg:col-span-2">
          <Input
            label="Filter SQL"
            type="textarea"
            rows={12}
            placeholder="Enter Filter SQL query..."
          />
        </div>
        <div className="lg:col-span-2 flex justify-end mt-4">
          <Button
            type="button"
            variant="gradient"
            className="px-20"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFilterForm;