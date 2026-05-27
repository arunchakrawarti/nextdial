import StatCard from "@/components/molecules/StatCard";
import {
  Bell,
  MonitorSpeaker,
  PauseCircle,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOff,
  UserCheck,
  Users,
  UsersRound,
} from "lucide-react";
import React from "react";

const RealTimeStats = () => {
  const stats = [
    {
      title: "Calls Being Placed",
      value: 0,
      icon: <PhoneCall size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Calls Ringing",
      value: 0,
      icon: <Bell size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Calls Waiting For Agents",
      value: 0,
      icon: <PhoneIncoming size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Calls In IVR",
      value: 0,
      icon: <Phone size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Callback Queue Calls",
      value: 0,
      icon: <PhoneForwarded size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Agents Logged In",
      value: 0,
      icon: <Users size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Agents In Calls",
      value: 0,
      icon: <UsersRound size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Agents Waiting",
      value: 0,
      icon: <UserCheck size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Paused Agents",
      value: 0,
      icon: <PauseCircle size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Agents In Dead Calls",
      value: 0,
      icon: <PhoneOff size={24} className="text-[#7C5CFC]" />,
    },
    {
      title: "Agents In Dispo",
      value: 0,
      icon: <MonitorSpeaker size={24} className="text-[#7C5CFC]" />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            percentage="0%"
            increase={true}
            updateDate="July 16, 2023"
          />
        ))}
      </div>
    </div>
  );
};

export default RealTimeStats;
