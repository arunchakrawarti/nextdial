"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Addusersgroup = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        
        <h2 className="heading font-lexend">
          Add New Users Group
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base lg:text-lg leading-relaxed">
          Create a new group and define its description.
        </p>
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8">

          <div className="w-full">
            <Input
              label="Group"
              type="text"
              placeholder="Enter group name"
            />
          </div>
          <div className="w-full">
            <Input
              label="Description"
              type="text"
              placeholder="Enter group description"
            />
          </div>

        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex justify-center sm:justify-end">
        
        <Button
          variant="gradient"
          className="w-full sm:w-auto min-w-[160px] text-sm sm:text-base tracking-wider"
        >
          SUBMIT
        </Button>

      </div>
    </div>
  );
};

export default Addusersgroup;