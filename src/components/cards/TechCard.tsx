import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TechCardProps = {
  tech: string;
  logo: React.ReactNode;
};

function TechCard({ tech, logo }: TechCardProps) {
  return (
    <Card className="bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] text-white w-full shadow-sm gap-2">
      <CardHeader className="p-3 sm:p-4">
        <CardTitle className="text-center text-sm sm:text-base md:text-lg">
          {tech}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center px-3 sm:px-4">
        <div className="bg-[#1e1e22] p-4 sm:p-5 md:p-6 rounded-2xl">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/50 flex items-center justify-center text-xs overflow-hidden">
            {logo}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TechCard;
