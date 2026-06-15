"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const StatusCategories = () => {
  const categoryData = [
    {
      id: "QC",
      name: "QC-specific status",
      statuses: "QCFAIL",
      description: "Quality control specific statuses",
    },
    {
      id: "UNDEFINED",
      name: "Default Category",
      statuses:
        "AB ADAIR ADC ADCT AFAX AFTHRS AL AM B CALLBK CBHOLD DAIR DC DEC DNCDNCC DNCL DROP ERI INCALL IQNANQ IVRXFR LRERR LSMERG MAXCAL MLIAT N NA NANQUE NEW NI NP PDROP PM PU QUEUE QVMAIL ROXFER SALE SVYCLM SVYEXT SVYHU SVYREC SVVYM TIMEOT XDROP XFER",
      description: "",
    },
  ];

  return (
    <div className="w-full mt-5">
      <div className="flex flex-col gap-6">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className="w-full border border-light rounded-2xl p-3 sm:p-5 lg:p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
              <Input
                label="Status Category"
                type="select"
                defaultValue={item.id}
                options={[
                  {
                    label: "QC",
                    value: "QC",
                  },
                  {
                    label: "UNDEFINED",
                    value: "UNDEFINED",
                  },
                ]}
              />

              <Input
                label="Category Name"
                type="text"
                defaultValue={item.name}
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium font-lexend text-dark mb-2">
                Statuses In This Category
              </label>

              <div className="w-full min-h-[90px] border border-light rounded-xl px-4 py-3 text-sm sm:text-base leading-6 text-dark break-words font-lexend flex items-center">
                {item.statuses}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                label="To Realtime Display"
                type="select"
                defaultValue="N"
                options={[
                  { label: "Y", value: "Y" },
                  { label: "N", value: "N" },
                ]}
              />

              <Input
                label="Sale Category"
                type="select"
                defaultValue="N"
                options={[
                  { label: "Y", value: "Y" },
                  { label: "N", value: "N" },
                ]}
              />

              <Input
                label="Dead Lead Category"
                type="select"
                defaultValue="N"
                options={[
                  { label: "Y", value: "Y" },
                  { label: "N", value: "N" },
                ]}
              />
            </div>

            <div className="mt-5">
              <Input
                label="Description"
                type="text"
                defaultValue={item.description}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-6">
              <Button
                variant="gradient"
                className="w-full sm:w-auto h-[48px]"
              >
                MODIFY
              </Button>

              <button className="w-full sm:w-auto h-[48px] px-6 rounded-xl border border-primary text-primary text-sm sm:text-base font-medium">
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-light rounded-2xl p-3 sm:p-5 lg:p-6">
        <h2 className="heading font-lexend mb-6">
          Add New Status Category
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Input
            label="Category ID"
            type="text"
            placeholder="Enter Category ID"
          />

          <Input
            label="Category Name"
            type="text"
            placeholder="Enter Category Name"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          <Input
            label="TimeOnVDAD Display"
            type="select"
            defaultValue="N"
            options={[
              { label: "Y", value: "Y" },
              { label: "N", value: "N" },
            ]}
          />

          <Input
            label="Sale Category"
            type="select"
            defaultValue="N"
            options={[
              { label: "Y", value: "Y" },
              { label: "N", value: "N" },
            ]}
          />

          <Input
            label="Dead Lead Category"
            type="select"
            defaultValue="N"
            options={[
              { label: "Y", value: "Y" },
              { label: "N", value: "N" },
            ]}
          />
        </div>

        <div className="mt-5">
          <Input
            label="Description"
            type="text"
            placeholder="Enter Description"
          />
        </div>

        <div className="flex justify-center sm:justify-end mt-6">
          <Button
            variant="gradient"
            className="w-full sm:w-auto h-[48px]"
          >
            ADD CATEGORY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusCategories;