"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReportTabs from "./ReportTabs";

const CampaignidTab = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Show Campaign", href: "/campaigns/campaigns-main" },
    { name: "Add A New Campaign", href: "/campaigns/add-new-campaign" },
    { name: "Copy Campaign", href: "/campaigns/copy-campaign" },
    { name: "Real Time Campaign Summary", href: "/report/summary-report" },
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
     <ReportTabs/>
    </div>
  );
};

export default CampaignidTab;
