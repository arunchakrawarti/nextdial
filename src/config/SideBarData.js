export const SideBarData = [
  {
    items: [
      {
        title: "Report",
        icon: "ri-dashboard-fill",
        link: "/",
      },

      {
        title: "Users",
        icon: "ri-team-line",
        children: [
          {
            title: "Show Users",
            link: "/users/show-user",
          },
          {
            title: "Add A New User",
            link: "/users/add-new-user",
          },
           {
            
            title: "Copy User",
            link: "/users/copy-user",
          },
           {
            
            title: "Search For A User",
            link: "/users/search-for-user",
          },
          
           {
            
            title: "User Stats",
            link: "/users/user-stats",
          },
           {
            
            title: "User Status",
            link: "/users/user-status",
          },
           {
            
            title: "Time Sheet",
            link: "/users/time-sheet",
          },
          {
            
            title: "Days Status",
            link: "/users/days-status",
          },
        ],
      },

      {
        title: "Campaigns",
        icon: "ri-git-branch-line",
        children: [
          {
            title: "Campaigns Main",
            link: "/campaigns/campaigns-main",
          },
          {
            title: "Statues",
            link: "/campaigns/statuses",
          },
          {
            title: "HotKeys",
            link: "/campaigns/hot-keys",
          },
          {
            title: "Lead Recycle",
            link: "/campaigns/lead-recycle",
          },
          {
            title: "Auto-Alt Dial",
            link: "/campaigns/auto-alt-dial",
          },
          {
            title: "List Mix",
            link: "/campaigns/list-mix",
          },
          {
            title: "Pause Codes",
            link: "/campaigns/pause-code",
          },
          {
            title: "Presets",
            link: "/campaigns/presets",
          },
          {
            title: "AC-CID",
            link: "/campaigns/ac-cid",
          },
        ],
        
      },

      {
        title: "Lists",
        icon: "ri-calendar-check-line",
        children: [
          {
            title: "Show Lists",
            link: "/list/show-lists",
          },
          {
            title: "Add A New List",
            link: "/list/add-new-lists",
          },
          {
            title: "Search For A Lead",
            link: "/list/search-for-lead",
          },
          {
            title: "Add A New Lead",
            link: "/list/add-new-lead",
          },
          {
            title: "Add-Delete DNC Number",
            link: "/list/add-delete-dnc-number",
          },
          {
            title: "Load New Leads",
            link: "/list/load-new-leads",
          },
        ],
      },

      {
        title: "Scripts",
        icon: "ri-money-dollar-circle-line",
        children: [
          {
            title: "Show Scripts",
            link: "/scripts/show-scripts",
          },
          {
            title: "Add A New Scripts",
            link: "/scripts/add-new-scripts",
          },
        ],
      },

      {
        title: "Filters",
        icon: "ri-briefcase-4-line",
        children: [
          {
            title: "Show Filters",
            link: "/filters/show-filters",
          },
          {
            title: "Add A New Filter",
            link: "/filters/add-new-filter",
          },
        ],
      },

      {
        title: "Inbound",
        icon: "ri-user-search-line",
        children: [
          {
            title: "Show In-groups",
            link: "/inbound/show-ingroup",
          },
          {
            title: "Add A New In-Group",
            link: "/inbound/add-new-group",
          },
           {
            title: "Copy In-Group",
            link: "/inbound/copy-ingroup",
          },
           {
            title: "Show DIDs",
            link: "/inbound/show-dids",
          },
           {
            title: "Add A New DID",
            link: "/candidates/shortlisted",
          },
           {
            title: "Copy DID",
            link: "/candidates/shortlisted",
          },
           {
            title: "Show Call Menus",
            link: "/candidates/shortlisted",
          },
           {
            title: "Add A New Call Menu",
            link: "/candidates/shortlisted",
          },
           {
            title: "Copy Call Menu",
            link: "/candidates/shortlisted",
          },
           {
            title: "Filter Phone Group",
            link: "/candidates/shortlisted",
          },
           {
            title: "Add Filter Phone Group",
            link: "/candidates/shortlisted",
          },
           {
            title: "Add Delete FPG Number",
            link: "/candidates/shortlisted",
          },
        ],
      },

      {
        title: "User Groups",
        icon: "ri-file-list-3-line",
        children: [
          {
            title: "Show User Groups",
            link: "/user-group/show-user-group",
          },
          {
            title: "Add A New User Group",
            link: "/user-group/add-user-group",
          },
          {
            title: "Group Hourly Report",
            link: "/user-group/group-hourly-report",
          },
          {
            title: "Bulk Group Change",
            link: "/user-group/bulk-group-change",
          },
        ],
      },

      {
        title: "remote-agents",
        icon: "ri-calendar-event-line",
        children: [
          {
            title: "Show Remote Agents",
            link: "/remote-agents/show-remote-agents",
          },
          {
            title: "Add New Remote Agents",
            link: "/remote-agents/add-new-remote",
          },
          {
            title: "Show Extension Group",
            link: "/remote-agents/show-extension-group",
          },
          {
            title: "Add Extension Group",
            link: "/remote-agents/add-extension-group",
          },
        ],
      },

      {
        title: "Admin",
        icon: "ri-settings-3-line",
         link: "/admin",
        children: [
          {
            title: "Admin",
            link: "/admin/admin",
          },
          {
            title: "Call Times",
            link: "/admin/call-times",
          },
          {
            title: "Shifts",
            link: "/admin/shift",
          },
          {
            title: "Phones",
            link: "/admin/phones",
          },
          {
            title: "Templates",
            link: "/admin/templates",
          },
          {
            title: "Carriers",
            link: "/admin/carriers",
          },
          {
            title: "Servers",
            link: "/admin/servers",
          },
          {
            title: "Conferences",
            link: "/admin/conferences",
          },
          {
            title: "System Settings",
            link: "/admin/system-settings",
          },
          {
            title: "Screen Labels",
            link: "/admin/screen-label",
          },
          {
            title: "Screen Colors",
            link: "/settings/account-settings",
          },
          {
            title: "System Statuses",
            link: "/settings/account-settings",
          },
          {
            title: "Status Groups",
            link: "/settings/account-settings",
          },
          {
            title: "CID Groups",
            link: "/settings/account-settings",
          },
          {
            title: "Voicemail",
            link: "/settings/account-settings",
          },
          {
            title: "Audio Store",
            link: "/settings/account-settings",
          },
          {
            title: "Music On Hold",
            link: "/settings/account-settings",
          },
          {
            title: "VM Message Groups",
            link: "/settings/account-settings",
          },
          {
            title: "Settings Containers",
            link: "/settings/account-settings",
          },
          {
            title: "Queue Groups",
            link: "/settings/account-settings",
          },
          
        ],
      },
    ],
  },
];