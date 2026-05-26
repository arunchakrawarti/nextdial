"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-8">
        <Button href="/login"
          variant="ghost"
          className="px-0"
        >
          ← Back
        </Button>

        <h1 className="font-lexend font-semibold text-2xl sm:text-3xl text-dark mb-2">
          Forgot Password
        </h1>

        <p className="font-lexend text-sm sm:text-base text-gray-500 mb-6">
          Enter your registered email address. We'll send you an OTP
          to reset your password.
        </p>

        <div className="mb-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <Button href="/otp-verification"
          variant="gradient"
          className="w-full text-white"
        >
          Send OTP
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;