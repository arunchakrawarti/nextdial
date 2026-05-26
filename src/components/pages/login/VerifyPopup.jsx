"use client";

import React from "react";
import Button from "@/components/common/Button";

const VerifyPopup = ({ onClose }) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
      <div className="text-5xl mb-4">🎉</div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Password Update Successfully
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Your password has been update successfully
      </p>

      <Button href="/login"
        onClick={onClose}
        className="w-full text-white"
        variant="gradient"
      >
        Back to Login
      </Button>
    </div>
  );
};

export default VerifyPopup;