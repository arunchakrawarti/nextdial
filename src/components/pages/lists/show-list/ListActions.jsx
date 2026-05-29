import React from 'react';
import { PhoneCall, Download, Trash2, Ban, ShieldAlert } from 'lucide-react';

const iconMap = {
  PhoneCall: PhoneCall,
  Download: Download,
  Trash2: Trash2,
  Ban: Ban,
  ShieldAlert: ShieldAlert,
};

const actionsData = [
  {
    id: "callback",
    text: "Click here to see all CallBack Holds in this list",
    icon: "PhoneCall",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    link: "/list/show-lists/list-callback" 
  },
  {
    id: "download",
    text: "Click here to download this list",
    icon: "Download",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    link: "#"
  },
  {
    id: "delete",
    text: "DELETE THIS LIST",
    icon: "Trash2",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    link: "#"
  },
  {
    id: "clear",
    text: "CLEAR THIS LIST",
    icon: "Ban",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    link: "#"
  },
  {
    id: "admin",
    text: "Click here to see Admin changes to this list",
    icon: "ShieldAlert",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
    link: "/list/show-lists/admin-changelist"
  }
];

export default function ListActions() {
  return (
    <div className="w-full flex flex-col gap-4">
      {actionsData.map((item) => {
        const IconComponent = iconMap[item.icon];
        
        return (
          <a
            key={item.id}
            href={item.link}
            className="w-full flex items-center gap-4 bg-white border border-light rounded-xl p-4  transition-colors duration-200 cursor-pointer text-left"
          >
            <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
              {IconComponent && <IconComponent className={`w-5 h-5 ${item.iconColor}`} />}
            </div>
            <span className="text-[15px] font-medium text-primary tracking-wide hover:underline">
              {item.text}
            </span>
          </a>
        );
      })}
    </div>
  );
}