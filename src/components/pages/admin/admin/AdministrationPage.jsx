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
    route: "/admin/call-times",
  },
  {
    title: "Conferences",
    icon: Users,
    route: "/admin/conferences",
  },
  {
    title: "Voicemail",
    icon: Voicemail,
    route: "/admin/voicemail",
  },
  {
    title: "Settings Containers",
    icon: LayoutGrid,
    route: "/admin/setting-container",
  },
  {
    title: "Shifts",
    icon: UserPlus,
    route: "/admin/shift",
  },
  {
    title: "System Settings",
    icon: Cog,
    route: "/admin/system-settings",
  },
  {
    title: "Audio Store",
    icon: Music2,
    route: "/admin/audio-store",
  },
  {
    title: "Queue Groups",
    icon: LayoutGrid,
    route: "/admin/queue-group",
  },
  {
    title: "Phones",
    icon: Phone,
    route: "/admin/phones",
  },
  {
    title: "Music On Hold",
    icon: Music2,
    route: "/admin/music-hold",
  },
  {
    title: "VM Message Groups",
    icon: Mail,
    route: "/admin/vm-message-group",
  },
  {
    title: "Templates",
    icon: FileText,
    route: "/admin/templates",
  },
  {
    title: "Screen Colors",
    icon: Palette,
    route: "/admin/screen-color",
  },
  {
    title: "System Statuses",
    icon: List,
    route: "/admin/system-statuses",
  },
  {
    title: "Status Groups",
    icon: Layers3,
    route: "/admin/status-group",
  },
  {
    title: "Carriers",
    icon: Radio,
    route: "/admin/carriers",
  },
  {
    title: "Servers",
    icon: Server,
    route: "/admin/servers",
  },
  {
    title: "CID Groups",
    icon: Badge,
    route: "/admin/cid-group",
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