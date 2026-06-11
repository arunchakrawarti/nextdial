"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServerFormSection2 } from "./ServerFormSection2";
import { ServerFormSection } from "./ServerFormSection";

const ModifyServer = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-6xl mx-auto bg-white border border-light rounded-2xl overflow-hidden shadow-sm">
        
        <div className="px-6 py-5 border-b border-gray-200 bg-white">
          <h2 className="heading font-lexend">
            MODIFY A SERVER RECORD:
          </h2>
        </div>

        <div className="p-6 space-y-8">
          
          <ServerFormSection />

          <hr className="border-gray-200" />

          <ServerFormSection2 />

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-start gap-4">
            
            <button
              type="button"
              className="text-blue-600 hover:underline font-bold text-xs uppercase tracking-wide"
            >
              CLEAR ALL AGENT CONFERENCES
            </button>

            <button
              type="button"
              onClick={() => setShowDeleteConfirm(!showDeleteConfirm)}
              className="text-red-600 hover:underline font-bold text-xs uppercase tracking-wide"
            >
              DELETE THIS SERVER
            </button>
            {showDeleteConfirm && (
              <div className="w-full border border-red-200 bg-red-50 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-bold uppercase text-red-700 tracking-wider">
                  SERVER DELETION CONFIRMATION: Server-ABC123
                </h4>

                <Link href="/admin/servers">
                <button
                  type="button"
                  className="text-xs font-bold text-blue-600 hover:text-red-700 underline cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Click here to confirm delete server Server-ABC123
                </button>
                </Link>
              </div>
            )}

            <Link href="/report/admin-change">
              <span className="text-blue-600 hover:underline text-xs font-semibold inline-block">
                Click here to see Admin changes to this server
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModifyServer;