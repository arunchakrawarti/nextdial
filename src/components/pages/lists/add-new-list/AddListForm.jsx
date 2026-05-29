"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const AddListForm = () => {
  return (
    <div className="bg-white rounded-lg p-6 border-light">
      <div className="mb-6">
        <h2 className="heading font-lexend">
          Add a New List
        </h2>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
    
        <div className="space-y-6">
          <Input
            label="List ID"
            placeholder="Enter list ID (digits only)"
            type="text"
          />

          <Input
            label="List Description"
            placeholder="Enter list description"
            type="text"
          />

          <Input
            label="Campaign"
            type="select"
            options={["outbound", "inbound"]}
            placeholder=" "
          />
        </div>
        <div className="space-y-6">
          <Input
            label="List Name"
            placeholder="Enter list name"
            type="text"
          />

          <Input
            label="Active"
            type="select"
            options={["N", "Y"]}
          />
        </div>
        <div className="md:col-span-2 flex justify-end mt-6 pt-4 border-t border-gray-100">
          <Button variant="gradient" className="px-20 py-3 uppercase tracking-widest text-xs font-semibold">
            Submit
          </Button>
        </div>

      </form>
    </div>
  );
};

export default AddListForm;