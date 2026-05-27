"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserStatsTab = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "User Stats", href: "/users/user-stats" },
    { name: "Users Status", href: "/users/user-status" },
    { name: "Time Sheet", href: "/users/time-sheet" },
    { name: "Days Status", href: "/users/days-status" },
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
     
    </div>
  );
};

export default UserStatsTab;
