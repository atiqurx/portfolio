import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

type EducationCardProps = {
  institution: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  logo?: React.ReactNode;
  logoAlt?: string;
};

export function EducationCard({
  institution,
  subtitle,
  description,
  startDate,
  endDate,
  location,
  logo,
  logoAlt,
}: EducationCardProps) {
  return (
    <Card className="bg-[rgb(22,23,26)] text-white border border-zinc-800 shadow-none rounded-xl">
      <CardContent className="px-6 py-2 space-y-4">
        {/* Logo + Institution + Subtitle */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs text-white/50 overflow-hidden">
              {logo ? (
                <Image
                  src={logo as string}
                  alt={logoAlt || "Institution logo"}
                  className="w-full h-full object-contain"
                  width={500}
                  height={300}
                />
              ) : (
                "logo"
              )}
            </div>

            <div>
              <h3 className="text-[16px] font-semibold">{institution}</h3>
              <p className="text-[13px] text-white">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] text-white/70 leading-relaxed mb-6">
          {description}
        </p>

        {/* Date + Location */}
        <div className="flex gap-6 text-sm items-center">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4 text-white" />
            <h4 className="text-[12px] text-white/70">
              {startDate} - {endDate}
            </h4>
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 h-4 text-white" />
            <h4 className="text-[12px] text-white/70">{location}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
