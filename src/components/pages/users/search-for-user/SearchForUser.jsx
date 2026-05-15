"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const SearchForUser = () => {
  return (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-100">
      <div className="mb-6">
        <h2 className="font-bold text-black text-xl uppercase tracking-tight font-lexend">
          SEARCH FOR A USER
        </h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-6">
          <Input
            label="User Number"
            placeholder="Enter user number"
            type="text"
          />

          <Input label="Full Name" placeholder="Enter full name" type="text" />
        </div>

        <div className="space-y-6">
          <Input
            label="User Level"
            
            type="select"
             options={["0","1","2","3","4","5","6","7","8","9"]}
          />

          <Input
            label="User Group"
            type="select"
            options={["ADMIN-VICIDIAL ADMINISTRATORS","agent-agent"]}
          />
        </div>
        <div className="md:col-span-2 flex justify-end mt-4">
          <Button className="px-20" variant="gradient">
            SEARCH
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForUser;
