"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";
import AgentId from "./AgentId";

const TimeSheet = () => {
  return (
    <div>
        <div className="bg-white rounded-xl border-light p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="heading font-lexend">
          Agent Time Sheet For
        </h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Input label="Date From" type="date" />
        <Input label="Date To" type="date" />
        <div className="md:col-span-2">
          <Input label="User Id" placeholder="Enter the user id" />
        </div>
        <div className="flex items-center">
          <Input type="checkbox" label="Search archived data" />
        </div>

        <div className="md:col-span-2 flex justify-stretch sm:justify-end">
          <Button
            icon="search-line"
            variant="gradient"
            className="w-full sm:w-auto"
          >
            Submit
          </Button>
        </div>
      </form>
      
    </div>
    <AgentId/>
    </div>
  );
};

export default TimeSheet;
