import Image from "next/image";
import { CalendarIcon } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  image: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function TimelineLayout({ items }: TimelineProps) {
  return (
    <div className="relative mt-12">
      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-muted-foreground/20 -translate-x-1/2" />

      {items.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row md:items-center gap-6 mb-22 ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-[7px] top-2 md:top-6 w-3 h-3 bg-primary rounded-full z-10 shadow-md md:left-1/2 md:-ml-[7px]" />

            {/* Text Card */}
            <div className="md:w-1/2 md:px-8">
              <div className="rounded-2xl shadow-md">
                <div
                  className={`p-6 space-y-2 ${
                    isEven ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.subtitle && (
                    <h4 className="text-md font-medium text-white/90">
                      {item.subtitle}
                    </h4>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div
                    className={`flex items-center gap-1 mt-4 ${
                      isEven
                        ? "justify-end text-right"
                        : "justify-start text-left"
                    }`}
                  >
                    <CalendarIcon className="w-4 h-4 text-white" />
                    <h4 className="text-[12px] text-white/70 ml-1">
                      {item.date}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 md:px-8">
              <div className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
