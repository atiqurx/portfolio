import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TechCardProps = {
  tech: string;
  logo: React.ReactNode;
};

function TechCard({ tech, logo }: TechCardProps) {
  return (
    <Card className="bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] text-white w-48 shadow-sm gap-2">
      <CardHeader>
        <CardTitle className="text-center text-lg">{tech}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="bg-[#1e1e22] p-6 rounded-2xl">
          <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center text-xs overflow-hidden">
            {logo}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TechCard;
