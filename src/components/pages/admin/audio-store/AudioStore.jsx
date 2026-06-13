"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AudioStore = () => {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="w-full bg-white border border-light rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-light">
          <h2 className="heading break-words">
            Audio Store
          </h2>
        </div>

        {/* Main Content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 lg:py-10 space-y-10 sm:space-y-14">

          {/* Upload Section */}
          <div className="w-full">
            <div className="flex flex-col xl:flex-row xl:items-end gap-4 lg:gap-6">

              <div className="flex-1 w-full">
                <Input
                  type="file"
                  label="Audio File to Upload"
                  className="w-full"
                />
              </div>

              <Button
                variant="gradient"
                className="
                  w-full
                  sm:w-auto
                  px-6 sm:px-8
                  py-3
                  text-sm sm:text-base
                "
              >
                Submit
              </Button>

            </div>
          </div>

          {/* Info Section */}
          <div className="w-full text-center space-y-3 sm:space-y-4 px-1">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-black leading-snug">
              We STRONGLY recommend uploading only 16bit Mono 8k PCM WAV audio
              files (.wav)
            </h2>

            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              All spaces will be stripped from uploaded audio file names
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-primary break-words">
              audio file list
            </h3>
          </div>

          {/* Copy File Section */}
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8">
              File to Copy
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:gap-6">

              <Input
                type="text"
                label="Original file"
                placeholder="Enter original file name"
              />

              <Input
                type="text"
                label="New file"
                placeholder="Enter new file name"
              />

              <div className="flex justify-end">
                <Button
                  variant="gradient"
                  className="
                    w-full
                    sm:w-auto
                    px-8 sm:px-10
                    py-3
                    text-sm sm:text-base
                  "
                >
                  Submit
                </Button>
              </div>

            </div>
          </div>

          {/* Delete File Section */}
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark text-center mb-6 sm:mb-8 leading-snug">
              File to Delete:
              <span className="text-primary ml-2 break-words">
                select file
              </span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 lg:items-end">

              <div className="flex-1 w-full">
                <Input
                  type="text"
                  label="Delete File"
                  placeholder="Enter file name"
                />
              </div>

              <Button
                variant="gradient"
                className="
                  w-full
                  sm:w-auto
                  px-8
                  py-3
                  text-sm sm:text-base
                "
              >
                Submit
              </Button>

            </div>
          </div>

          {/* Footer Link */}
          <div className="w-full text-center pt-2 sm:pt-4">
            <Button href="/report/admin-change" 
              className="
                text-primary
              "
            >
              Click here to see a log of the uploads to the audio store
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AudioStore;