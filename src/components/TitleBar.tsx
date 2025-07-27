import React from "react";
import AvailabilityDot from "@/components/AvailabilityDot";

type TitleBarProps = {
  label: string;
  icon: React.ReactNode;
  className?: string;
};

function TitleBar({ label, icon, className = "" }: TitleBarProps) {
  return (
    <div
      className={`w-full text-white pb-2 flex items-center gap-2 border-b ${className}`}
    >
      {/* Icon */}
      <div className="w-4 h-4">{icon}</div>

      {/* Label Text */}
      <p className="text-[12px] font-medium">{label}</p>

      {/* Availability Dot (only for "Work & Edu") */}
      {label === "Work & Edu" && (
        <div className="ml-auto">
          <AvailabilityDot />
        </div>
      )}
    </div>
  );
}

export default TitleBar;
