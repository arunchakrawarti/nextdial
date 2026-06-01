"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InboundReportForm from "./InboundReportForm";

const ShowIngroupTab = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Reports", href: "/" },
    { name: "Users", href: "/users/show-user" },
    { name: "Campaigns", href: "/campaigns/campaigns-main" },
    { name: "Lists", href: "/lists" },
    { name: "Scripts", href: "/scripts" },
    { name: "Filters", href: "/filters" },
    { name: "Inbound", href: "/inbound" },
    { name: "User Groups", href: "/user-groups" },
    { name: "Remote Agents", href: "/remote-agents" },
    { name: "Admin", href: "/admin" },
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
      <InboundReportForm/>
    </div>
  );
};

export default ShowIngroupTab;
