"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center text-dark font-lexend mb-8">
          Login
        </h1>

        <div className="mb-4">
          <Input label="Email" type="email" placeholder="Enter your email" />
        </div>

        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="w-auto">
            <Input type="checkbox" checkboxLabel="Remember Me" />
          </div>

          <Button href="/auth/forget-password" variant="outline"
          >
            Forgot Password?
          </Button>
        </div>

        <Button variant="gradient" className="w-full text-white">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Signin;
