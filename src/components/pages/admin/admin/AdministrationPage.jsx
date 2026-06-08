"use client";

import {
  Clock3,
  Users,
  Voicemail,
  Settings2,
  UserPlus,
  Cog,
  Music2,
  LayoutGrid,
  Phone,
  Monitor,
  Mail,
  FileText,
  Palette,
  List,
  Layers3,
  Radio,
  Server,
  Badge,
} from "lucide-react";

import { useRouter } from "next/navigation";

const administrationMenu = [
  {
    title: "Call Times",
    icon: Clock3,
    route: "/administration/call-times",
  },
  {
    title: "Conferences",
    icon: Users,
    route: "/administration/conferences",
  },
  {
    title: "Voicemail",
    icon: Voicemail,
    route: "/administration/voicemail",
  },
  {
    title: "Settings Containers",
    icon: LayoutGrid,
    route: "/administration/settings-containers",
  },
  {
    title: "Shifts",
    icon: UserPlus,
    route: "/administration/shifts",
  },
  {
    title: "System Settings",
    icon: Cog,
    route: "/administration/system-settings",
  },
  {
    title: "Audio Store",
    icon: Music2,
    route: "/administration/audio-store",
  },
  {
    title: "Queue Groups",
    icon: LayoutGrid,
    route: "/administration/queue-groups",
  },
  {
    title: "Phones",
    icon: Phone,
    route: "/administration/phones",
  },
  {
    title: "Agent Screen Labels",
    icon: Monitor,
    route: "/administration/agent-screen-labels",
  },
  {
    title: "Music On Hold",
    icon: Music2,
    route: "/administration/music-on-hold",
  },
  {
    title: "VM Message Groups",
    icon: Mail,
    route: "/administration/vm-message-groups",
  },
  {
    title: "Templates",
    icon: FileText,
    route: "/administration/templates",
  },
  {
    title: "Screen Colors",
    icon: Palette,
    route: "/administration/screen-colors",
  },
  {
    title: "System Statuses",
    icon: List,
    route: "/administration/system-statuses",
  },
  {
    title: "Status Groups",
    icon: Layers3,
    route: "/administration/status-groups",
  },
  {
    title: "Carriers",
    icon: Radio,
    route: "/administration/carriers",
  },
  {
    title: "Servers",
    icon: Server,
    route: "/administration/servers",
  },
  {
    title: "CID Groups",
    icon: Badge,
    route: "/administration/cid-groups",
  },
];

const AdministrationPage = () => {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen bg-white p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark">
          Administration
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {administrationMenu.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => router.push(item.route)}
              className="bg-white border-light rounded-2xl px-6 py-7 flex items-center justify-between cursor-pointer hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-500">
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                <h2 className="text-lg font-medium text-dark">
                  {item.title}
                </h2>
              </div>
              <span className="text-dark text-2xl">›</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdministrationPage;