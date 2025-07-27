import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ResumeDownloadCardProps = {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  resumeUrl: string;
};

export function ResumeDownloadCard({
  heading = "Download My Resume",
  subheading = "A concise snapshot of my experience and skills.",
  buttonText = "Download",
  resumeUrl,
}: ResumeDownloadCardProps) {
  return (
    <Card className="bg-[rgb(22,23,26)] w-full text-white border border-zinc-800 rounded-lg mt-6">
      <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 gap-4">
        {/* Text Content */}
        <div>
          <h3 className="text-[16px] font-semibold">{heading}</h3>
          <p className="text-[13px] text-white/70">{subheading}</p>
        </div>

        {/* Button */}
        <Link
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button
            variant="outline"
            className="rounded-xs py-4 px-12 bg-[rgb(49,51,56)]"
          >
            <Download className="w-4 h-4 text-orange-500" />
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
