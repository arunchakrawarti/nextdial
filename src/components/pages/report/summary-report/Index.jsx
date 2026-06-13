"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RealTimeCampaignSummary from "./RealTimeCampaignSummary ";
import OutboundCampaignReport from "./OutboundCampaignReport";

const MainSummary = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Reports", href: "/" },
    { name: "Users", href: "/users/show-user" },
    { name: "Campaigns", href: "/campaigns/campaigns-main" },
    { name: "Lists", href: "/list/show-lists" },
    { name: "Scripts", href: "/scripts/show-scripts" },
    { name: "Filters", href: "/filters/show-filters" },
    { name: "User Groups", href: "/user-group/show-user-group" },
    { name: "Remote Agents", href: "/remote-agents/show-remote-agents" },
    { name: "Admin", href: "/admin/admin" },
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
      <RealTimeCampaignSummary />
      <OutboundCampaignReport/>
    </div>
  );
};

export default MainSummary;
