import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, navigation } from "@/lib/data/site-config";

export function Footer() {
  return (
    <footer className="bg-[hsl(152,75%,12%)] text-white">
      {/* Main Footer */}
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand & Contact - Full width on mobile */}
          <div className="col-span-2 md:col-span-1 pb-4 md:pb-0 border-b md:border-b-0 border-white/10">
            <span className="text-xl md:text-2xl font-bold">HDI</span>
            <p className="text-white/40 text-xs mt-0.5 mb-3 md:mb-4">Werner Böhm</p>

            <div className="flex flex-wrap md:flex-col gap-3 md:gap-2 text-xs md:text-sm">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 text-white/60 hover:text-green-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 text-white/60 hover:text-green-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{siteConfig.contact.email}</span>
                <span className="md:hidden">E-Mail</span>
              </a>
              <div className="flex items-center gap-1.5 text-white/60">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nürnberg</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/90 font-medium text-xs uppercase tracking-wider mb-2 md:mb-3">Versicherungen</h4>
            <ul className="space-y-1 md:space-y-1.5">
              {navigation.services.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-xs md:text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white/90 font-medium text-xs uppercase tracking-wider mb-2 md:mb-3">Absicherung</h4>
            <ul className="space-y-1 md:space-y-1.5">
              {navigation.decisions.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-xs md:text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/90 font-medium text-xs uppercase tracking-wider mb-2 md:mb-3">Seiten</h4>
            <ul className="space-y-1 md:space-y-1.5">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-xs md:text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.hdi.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs md:text-sm transition-colors inline-flex items-center gap-1"
                >
                  HDI.de
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[hsl(152,75%,10%)]">
        <div className="container-custom py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] md:text-xs text-white/40">
            <p>© {new Date().getFullYear()} HDI Generalvertretung Werner Böhm</p>
            <div className="flex items-center gap-3 md:gap-4">
              {navigation.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white/70 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
