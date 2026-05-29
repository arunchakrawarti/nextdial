import React from "react";

const AgentId = () => {
  return (
    <div className="mt-5 rounded-xl border-light  min-h-[300px] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="flex justify-center mb-4">
          <i className="ri-user-line text-3xl text-gray-400"></i>
        </div>

        <h3 className="heading font-lexend">
          Please select an Agent ID and date range above and click Submit
        </h3>

        <p className="mt-2 text-sm md:text-md text-gray-400 font-lexend">
          NOTE: stats taken from available agent log data
        </p>
      </div>
    </div>
  );
};

export default AgentId;