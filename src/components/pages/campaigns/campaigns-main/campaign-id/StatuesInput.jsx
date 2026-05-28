"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import CampaignStatusAccordion from "./CampaignStatusAccordion";

const StatuesInput = () => {
  return (
    <div className="bg-white rounded-lg p-6 border-light w-full mt-5">
      
      <div className="mb-4">
        <h2 className="font-bold text-black text-xl font-lexend">
          Add New Custom Campaign Status
        </h2>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">

        <Input label="STATUS" type="text" />

        <Input label="DESCRIPTION" type="text" />

        <Input label="SELECTABLE" type="select" options={["Y", "N"]} defaultValue="Y" />

        <Input label="HUMAN ANSWER" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="SALE" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="DNC" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="CUSTOMER CONTACT" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="NOT INTERESTED" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="UNWORKABLE" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="CALLBACK" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="COMPLETED" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="ANSWERING MACHINE" type="select" options={["Y", "N"]} defaultValue="N" />

        <Input label="CATEGORY" type="select" options={["-", "Category 1", "Category 2"]} defaultValue="-" />

        

      </form>
      <div className=" mt-5 flex justify-end">
          <Button className="px-10"
            variant="gradient"
          >
            Add
          </Button>
        </div>


<CampaignStatusAccordion/>


    </div>
  );
};

export default StatuesInput;