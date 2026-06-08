"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CallTimesTable from "./CallTimesTable";

const CallTab = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Show Call Times", href: "/admin/call-times" },
    { name: "Add A New Call Time", href: "/users/user-status" },
    { name: "Show State Call Times", href: "/users/time-sheet" },
    { name: "Add A New State Call Time", href: "/users/days-status" },
    { name: "Holiday", href: "/users/days-status" },
    { name: "Add Holiday", href: "/users/days-status" },
  ];

  return (
    <div>
      <div className="w-full bg-white border border-light overflow-x-auto rounded-xl">
        <div className="flex items-center min-w-max">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-6 py-3 text-[15px] text-primary whitespace-nowrap transition-all duration-200
        ${
          pathname === tab.href
            ? "font-semibold underline underline-offset-4"
            : "hover:underline hover:underline-offset-4"
        }
      `}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
      <CallTimesTable />
    </div>
  );
};

export default CallTab;
