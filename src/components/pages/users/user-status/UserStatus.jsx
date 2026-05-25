import Button from "@/components/common/Button";
import React from "react";

const UserStatus = () => {
  return (
    <div className="space-y-5">
      <h2 className="font-bold text-black text-lg sm:text-2xl tracking-tight font-lexend">
        User Status for
      </h2>
      <div className="bg-white border-light rounded-xl p-4 mb-5">
        <div className="flex items-center gap-4">
          <i className="ri-user-3-line text-gray-500 text-2xl"></i>

          <p className="text-lg font-lexend text-gray-700 font-medium">
            Agent is not logged in
          </p>
        </div>
      </div>

      <div className="bg-white border-light rounded-xl p-6">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500">
              <i className="ri-information-line text-white text-xl"></i>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 font-lexend">
                User () - is logged in to the timeclock.
              </h3>
              <p className="mt-1 text-gray-600 text-base font-lexend">
                Login time: 2026-05-25 15:37:31 from 10.10.10.5
              </p>
            </div>
          </div>
        </div>

        <Button type="button" variant="tertiary" className="font-semibold mt-5">
          <i className="ri-time-line text-2xl"></i>
          TIMECLOCK LOG THIS USER OUT
        </Button>
      </div>
    </div>
  );
};

export default UserStatus;
