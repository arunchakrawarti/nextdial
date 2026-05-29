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
            link: "",
          },
          {
            title: "Add A New List",
            link: "/attendance/report",
          },
          {
            title: "Search For A Lead",
            link: "/attendance/report",
          },
          {
            title: "Add A New Lead",
            link: "/attendance/report",
          },
          {
            title: "Add-Delete DNC Number",
            link: "/attendance/report",
          },
          {
            title: "Load New Leads",
            link: "/attendance/report",
          },
        ],
      },

      {
        title: "Payroll",
        icon: "ri-money-dollar-circle-line",
        children: [
          {
            title: "Salary List",
            link: "/payroll/salary-list",
          },
          {
            title: "Generate Salary",
            link: "/payroll/generate-salary",
          },
        ],
      },

      {
        title: "Jobs",
        icon: "ri-briefcase-4-line",
        children: [
          {
            title: "All Jobs",
            link: "/jobs/all-jobs",
          },
          {
            title: "Post Job",
            link: "/jobs/post-job",
          },
        ],
      },

      {
        title: "Candidates",
        icon: "ri-user-search-line",
        children: [
          {
            title: "All Candidates",
            link: "/candidates/all-candidates",
          },
          {
            title: "Shortlisted",
            link: "/candidates/shortlisted",
          },
        ],
      },

      {
        title: "Leaves",
        icon: "ri-file-list-3-line",
        children: [
          {
            title: "Leave Requests",
            link: "/leaves/leave-requests",
          },
          {
            title: "Approved Leaves",
            link: "/leaves/approved-leaves",
          },
        ],
      },

      {
        title: "Holidays",
        icon: "ri-calendar-event-line",
        children: [
          {
            title: "Holiday List",
            link: "/holidays/list",
          },
          {
            title: "Add Holiday",
            link: "/holidays/add-holiday",
          },
        ],
      },

      {
        title: "Settings",
        icon: "ri-settings-3-line",
        children: [
          {
            title: "General Settings",
            link: "/settings/general-settings",
          },
          {
            title: "Account Settings",
            link: "/settings/account-settings",
          },
        ],
      },
    ],
  },
];