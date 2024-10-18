import Typography from "@/components/UI/Typography";
import React from "react";

const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Typography
        type="h2"
        variant="h5"
        fontWeight="semibold"
        className="text-brand-primary-700"
      >
        Hoşgeldiniz
      </Typography>
      <label
        htmlFor="mobile-sidebar-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="8.235"
            stroke="#221E3F"
            strokeWidth="1.53"
          />
          <path
            d="M8.3512 7.46296C8.10599 7.21775 7.70841 7.21775 7.4632 7.46296C7.21799 7.70818 7.21799 8.10574 7.4632 8.35095L9.11222 10L7.46322 11.649C7.21801 11.8942 7.21801 12.2918 7.46322 12.537C7.70843 12.7822 8.10601 12.7822 8.3512 12.537L10.0003 10.888L11.6492 12.537C11.8944 12.7822 12.292 12.7822 12.5372 12.537C12.7825 12.2918 12.7825 11.8942 12.5372 11.649L10.8882 10L12.5372 8.35095C12.7825 8.10576 12.7825 7.7082 12.5372 7.46299C12.292 7.21777 11.8944 7.21777 11.6492 7.46299L10.0003 9.11197L8.3512 7.46296Z"
            fill="#221E3F"
          />
        </svg>
      </label>
    </div>
  );
};

export default SidebarHeader;
