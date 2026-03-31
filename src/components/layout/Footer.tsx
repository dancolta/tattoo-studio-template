import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/types";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer({ config }: { config?: SiteConfig }) {
  const cfg = config || defaultConfig;

  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-surface/50 backdrop-blur-xl" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%)' }} />
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {cfg.socials.map((social) => (
              <SocialIcon
                key={social.platform}
                platform={social.platform}
                url={social.url}
              />
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {cfg.footer.copyright}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
