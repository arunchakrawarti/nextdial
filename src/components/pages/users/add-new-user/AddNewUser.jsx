"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const AddNewUser = () => {
  return (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
      <div className="mb-6">
        <h2 className="font-bold text-black text-xl uppercase tracking-tight font-lexend">
          Add a New User
        </h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-6">
          <div className="flex gap-2 items-center">
            <div className="flex-1">
              <Input
                label="User Number"
                placeholder="Enter user number"
                type="text"
              />
            </div>

            <Button variant="primary" className="h-12 mt-6">
              Auto-Generate
            </Button>
          </div>

          <Input label="Full Name" placeholder="Enter full name" type="text" />

          <Input
            label="User Group"
            type="select"
            options={["All Admin User Groups", "Support", "Manager"]}
          />

          <Input
            label="Phone Pass"
            placeholder="Enter phone pass"
            type="password"
          />
        </div>
        <div className="space-y-6">
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
          />

          <Input
            label="User Level"
            type="select"
            options={["1", "2", "3", "4", "5"]}
          />

          <Input
            label="Phone Login"
            placeholder="Enter phone login"
            type="text"
          />
        </div>
        <div className="md:col-span-2 flex justify-end mt-4">
          <Button className="px-20" variant="gradient">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
