"use client";

import React, { useRef, useState } from "react";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";
import VerifyPopup from "./VerifyPopup";

const OtpVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const otp1 = useRef(null);
  const otp2 = useRef(null);
  const otp3 = useRef(null);
  const otp4 = useRef(null);
  const otp5 = useRef(null);

  const handleChange = (e, nextRef) => {
    if (e.target.value.length === 1 && nextRef) {
      nextRef.current?.focus();
    }
  };

  const handleBackspace = (e, prevRef) => {
    if (e.key === "Backspace" && !e.target.value && prevRef) {
      prevRef.current?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <Button
          href="/auth/forget-password"
          variant="ghost"
          className="mb-4 px-0 h-auto text-sm text-gray-500"
        >
          ← Back
        </Button>

        <h1 className="font-lexend font-semibold text-3xl text-dark mb-2">
          Enter OTP
        </h1>

        <p className="text-sm text-gray-500 mb-1">
          We have shared a code to your registered email address
        </p>

        <p className="text-sm text-gray-500 mb-6">robertallen@example.com</p>

        <div className="flex justify-center gap-3 mb-8">
          <Input
            ref={otp1}
            type="otp"
            maxLength={1}
            onChange={(e) => handleChange(e, otp2)}
            className="!w-12 !h-12 !px-0"
          />

          <Input
            ref={otp2}
            type="otp"
            maxLength={1}
            onChange={(e) => handleChange(e, otp3)}
            onKeyDown={(e) => handleBackspace(e, otp1)}
            className="!w-12 !h-12 !px-0"
          />

          <Input
            ref={otp3}
            type="otp"
            maxLength={1}
            onChange={(e) => handleChange(e, otp4)}
            onKeyDown={(e) => handleBackspace(e, otp2)}
            className="!w-12 !h-12 !px-0"
          />

          <Input
            ref={otp4}
            type="otp"
            maxLength={1}
            onChange={(e) => handleChange(e, otp5)}
            onKeyDown={(e) => handleBackspace(e, otp3)}
            className="!w-12 !h-12 !px-0"
          />

          <Input
            ref={otp5}
            type="otp"
            maxLength={1}
            onKeyDown={(e) => handleBackspace(e, otp4)}
            className="!w-12 !h-12 !px-0"
          />
        </div>

        <Button
          variant="gradient"
          className="w-full text-white"
          onClick={() => setIsOpen(true)}
        >
          Verify
        </Button>
        <OverlayModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <VerifyPopup onClose={() => setIsOpen(false)} />
        </OverlayModal>
      </div>
    </div>
  );
};

export default OtpVerification;
