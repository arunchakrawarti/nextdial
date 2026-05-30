"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const SearchLeadsForm = () => {

  return (
    <div className="w-full flex flex-col gap-6 font-sans">
      <form className="w-full flex flex-col gap-6">
        <div className="bg-white rounded-xl p-4 border-light">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="heading font-lexend">
              Lead Search Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <Input
              label="Vendor ID (vendor lead code)"
              placeholder=" "
              type="text"
            />

            <Input
              label="Phone"
              placeholder=" "
              type="text"
            />

            <Input
              label="Alt. Phone search"
              type="select"
              options={["No", "Yes"]}
            />

            <div className="md:col-span-1">
              <Input
                label="Lead ID"
                placeholder=" "
                type="text"
              />
            </div>
           

            <Input
              label="Status"
              placeholder=" "
              type="text"
            />

            <Input
              label="List ID"
              placeholder=" "
              type="text"
            />

            <Input
              label="User"
              placeholder=" "
              type="text"
            />

            <Input
              label="Owner"
              placeholder=" "
              type="text"
            />

            <Input
              label="First"
              placeholder=" "
              type="text"
            />

            <Input
              label="Last"
              placeholder=" "
              type="text"
            />

            <div className="md:col-span-2">
              <Input
                label="Email"
                placeholder=" "
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border-light">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-bold text-dark font-lexend">
              Log Search Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <Input
              label="Lead ID"
              placeholder=" "
              type="text"
            />

            <Input
              label="Phone Dialed"
              placeholder=" "
              type="text"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border-light">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-bold text-dark font-lexend">
              Archived Log Search Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <Input
              label="Lead ID"
              placeholder=" "
              type="text"
            />

            <Input
              label="Phone Dialed"
              placeholder=" "
              type="text"
            />
          </div>
        </div>
        <div className="w-full flex justify-end mt-4">
          <Button
            variant="gradient"
            className="px-24 py-3 font-semibold uppercase text-xs tracking-widest"
          >
            Submit
          </Button>
        </div>

      </form>
    </div>
  );
};

export default SearchLeadsForm;