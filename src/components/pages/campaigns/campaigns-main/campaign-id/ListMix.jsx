"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const ListMix = () => {
  return (
    <div className="bg-white rounded-lg p-6 border-light w-full mt-5">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="heading font-lexend">
          List Mixes For This Campaign
        </h2>
      </div>
      <div className="bg-amber-50 border border-amber-200 text-amber-700 p-4 rounded-md flex items-center gap-2 mb-8 text-sm font-medium font-lexend">
        <span>
          WARNING, we only recommend List Mix for advanced users, Please read
          the Manager Manual
        </span>
      </div>
      <div className="mb-6">
        <h3 className="font-bold text-dark text-lg uppercase font-lexend tracking-wider">
          Add New List Mix
        </h3>
      </div>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
        <Input label="Mix ID" type="text" />

        <Input label="Mix Name" type="text" />

        <Input
          label="Mix Method"
          type="select"
          options={["EVEN_MIX"]}
          defaultValue="EVEN_MIX"
        />

        <Input
          label="List"
          type="select"
          options={["31032026 - 31032026"]}
          defaultValue="31032026 - 31032026"
        />

        <Input
          label="Dial Status"
          type="select"
          options={[
            "A - Answering Machine",
            "B - Busy",
            "AA - Answering Machine Auto",
          ]}
          defaultValue="A - Answering Machine"
        />
        
      </form>
      <div className="flex mt-5 justify-end">
          <Button 
            variant="gradient" 
          >
            Submit
          </Button>
        </div>
    </div>
  );
};

export default ListMix;