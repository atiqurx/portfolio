import React from "react";

export default function AvailabilityDot() {
  return (
    <div className="flex items-center gap-2">
      {/* Pulsing green dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500/70"></span>
      </span>

      {/* Text */}
      <p className="text-[10px] text-white/60 font-medium mr-1">
        available for work
      </p>
    </div>
  );
}
