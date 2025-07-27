import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Tags, Eye } from "lucide-react";
import React from "react";

type ProjectCardProps = {
  image: React.ReactNode;
  logo?: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: string;
  link: string;
};

export function ProjectCard({
  image,
  logo,
  title,
  subtitle,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="group bg-[rgb(22,23,26)] text-white border border-zinc-800 shadow-none rounded-xl overflow-hidden pt-0 transition-all duration-200 hover:brightness-110 cursor-pointer">
        {/* Top Image */}
        <div className="w-full h-auto bg-black overflow-hidden">{image}</div>

        <CardContent className="px-6 py-4 space-y-4">
          {/* logo + name + subtitle */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-xs text-white/50 overflow-hidden">
                {logo ?? "logo"}
              </div>
              <h3 className="text-[16px] font-semibold">{title}</h3>
            </div>
            <p className="text-[13px] text-white whitespace-nowrap">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed">{description}</p>

          {/* Date + Tags + Show More */}
          <div className="flex justify-between items-center text-sm text-white/60 gap-16">
            {/* Date & Tags */}
            <div className="flex gap-6 text-sm items-center">
              <div className="flex items-center gap-1">
                <Tags className="w-4 h-4 text-white mr-1" />
                <h4 className="text-[12px] text-white/70 flex-wrap">{tags}</h4>
              </div>
            </div>

            {/* show More */}
            <span className="text-[13px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center">
              <Eye className="w-4 h-4 text-blue-500 inline mr-2" />
              <span>Show More</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
