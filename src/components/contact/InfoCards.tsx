import { MapPin, Clock, Mail } from "lucide-react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";

export default function InfoCards({ config }: { config?: SiteConfig }) {
  const { location } = config || defaultConfig;

  const cards = [
    {
      icon: MapPin,
      title: "Location",
      content: location.address,
      detail: location.phone,
    },
    {
      icon: Clock,
      title: "Hours",
      content: location.hours,
      detail: null,
    },
    {
      icon: Mail,
      title: "Email",
      content: location.email,
      detail: null,
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:pt-7">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <card.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm">{card.content}</p>
              {card.detail && (
                <p className="text-text-muted text-sm">{card.detail}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
