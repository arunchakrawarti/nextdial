"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const AddNewLeadForm = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-5 border-light">
      <div className="mb-6">
        <h2 className="heading font-lexend mb-4">
          Add A New Lead
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-md text-sm mb-6">
          <div>
            <span className="font-semibold text-gray-600">Lead ID:</span> NEW
          </div>
          <div>
            <span className="font-semibold text-gray-600">List ID:</span> 998 -
            TESTCAMP
          </div>
          <div>
            <span className="font-semibold text-gray-600">Timezone:</span> —
          </div>
          <div>
            <span className="font-semibold text-gray-600">Reset Code:</span> —
          </div>
          <div>
            <span className="font-semibold text-gray-600">User:</span> —
          </div>
          <div>
            <span className="font-semibold text-gray-600">Called Count:</span> 0
            (today)
          </div>
          <div className="col-span-2">
            <span className="font-semibold text-gray-600">Last Call:</span> —
          </div>
        </div>

        <button
          type="button"
          className="text-blue-600 hover:underline text-sm font-medium mb-4 inline-block"
        >
          Turn on archived logs display
        </button>
      </div>
      <form className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Input label="Title" placeholder="e.g. Mr." type="text" />
        <Input label="First Name" placeholder="First Name" type="text" />

        <Input label="M.I." placeholder="M.I." type="text" />
        <Input label="Last Name" placeholder="Last Name" type="text" />

        <Input
          label="Address 1"
          placeholder="Street Address line 1"
          type="text"
        />
        <Input label="Address 2" placeholder="Suite, Apt, etc." type="text" />

        <Input label="Address 3" placeholder="Additional details" type="text" />
        <Input label="City" placeholder="City" type="text" />

        <Input label="State" placeholder="State" type="text" />
        <Input label="Postal Code" placeholder="Zip Code" type="text" />

        <Input label="Province" placeholder="Province" type="text" />
        <Input label="Country" placeholder="Country" type="text" />

        <Input label="Date of Birth" type="date" />
        <Input label="Dial Code" placeholder="1" type="text" />

        <Input label="Phone" placeholder="Phone Number" type="text" />
        <Input label="Alt. Phone" placeholder="Alternate Phone" type="text" />

        <Input label="Email" placeholder="example@domain.com" type="email" />
        <Input label="Show" placeholder="Show" type="text" />

        <Input label="Vendor ID" placeholder="Vendor ID" type="text" />
        <Input label="Rank" placeholder="Rank" type="text" />

        <Input label="Owner" placeholder="Owner Code" type="text" />

        <div className="xl:col-span-2">
          <Input
            label="Comments"
            type="textarea"
            placeholder="Enter additional comments here..."
          />
        </div>

        <div className="xl:col-span-2 flex justify-end mt-4">
          <Button variant="gradient" className="px-20">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewLeadForm;
