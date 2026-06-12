"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu, Phone, ChevronDown, X, ChevronRight,
  Home, Briefcase, Users, Mail, Shield, Heart,
  Baby, Gem, Building2, Wallet, PiggyBank, Stethoscope,
  FileText, Lock, ArrowRight, MapPin, Clock, Info
} from "lucide-react";
import { siteConfig, navigation } from "@/lib/data/site-config";

// Icons for each page
const pageIcons: Record<string, React.ElementType> = {
  "/": Home,
  "/leistungen": Briefcase,
  "/ueber-uns": Users,
  "/kontakt": Mail,
  "/service/lebensversicherung": Heart,
  "/service/risikolebensversicherung": Shield,
  "/service/berufsunfaehigkeit": Briefcase,
  "/service/altersvorsorge": PiggyBank,
  "/service/private-krankenversicherung": Stethoscope,
  "/service/sachversicherungen": Home,
  "/familie-absichern": Users,
  "/immobilienkredit-absichern": Building2,
  "/einkommen-absichern": Wallet,
  "/selbststaendige-absicherung": Building2,
  "/kinder-absichern": Baby,
  "/paare-absicherung": Gem,
  "/impressum": FileText,
  "/datenschutz": Lock,
  "/erstinformation": Info,
};

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>("main");
  const pathname = usePathname();

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const getIcon = (href: string) => {
    const Icon = pageIcons[href] || ChevronRight;
    return <Icon className="w-4 h-4" />;
  };

  const isActivePath = (href: string) => pathname === href;
  const isActiveSection = (items: { href: string }[]) => items.some(item => pathname === item.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-[hsl(var(--hdi-green-dark))] text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            {/* Left - Location & Hours */}
            <div className="hidden md:flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white/90">
                <MapPin className="w-3.5 h-3.5" />
                {siteConfig.contact.address.city}
              </span>
              <span className="flex items-center gap-1.5 text-white/90">
                <Clock className="w-3.5 h-3.5" />
                {siteConfig.hours.weekdays}
              </span>
            </div>

            {/* Right - Contact */}
            <div className="flex items-center gap-4 ml-auto">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.contact.email}
              </a>
              <span className="hidden sm:block text-white/40">|</span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-1.5 font-semibold hover:text-white/80 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/5' : 'border-b border-gray-100'
      }`}>
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg">HDI</span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 leading-tight text-sm sm:text-base truncate">Werner Böhm</p>
                <p className="text-[10px] sm:text-xs text-gray-500 truncate">Generalvertretung</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Main Links */}
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActivePath(item.href)
                      ? 'text-[hsl(var(--hdi-green))] bg-green-50'
                      : 'text-gray-700 hover:text-[hsl(var(--hdi-green))] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Versicherungen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                  isActiveSection(navigation.services) || activeDropdown === 'services'
                    ? 'text-[hsl(var(--hdi-green))] bg-green-50'
                    : 'text-gray-700 hover:text-[hsl(var(--hdi-green))] hover:bg-gray-50'
                }`}>
                  Versicherungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden">
                      {navigation.services.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActivePath(item.href)
                              ? 'bg-green-50 text-[hsl(var(--hdi-green))]'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActivePath(item.href) ? 'bg-[hsl(var(--hdi-green))] text-white' : 'bg-green-50 text-[hsl(var(--hdi-green))]'
                          }`}>
                            {getIcon(item.href)}
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Absicherung Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('decisions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                  isActiveSection(navigation.decisions) || activeDropdown === 'decisions'
                    ? 'text-[hsl(var(--hdi-green))] bg-green-50'
                    : 'text-gray-700 hover:text-[hsl(var(--hdi-green))] hover:bg-gray-50'
                }`}>
                  Absicherung
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'decisions' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'decisions' && (
                  <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden">
                      {navigation.decisions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActivePath(item.href)
                              ? 'bg-green-50 text-[hsl(var(--hdi-green))]'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isActivePath(item.href) ? 'bg-[hsl(var(--hdi-green))] text-white' : 'bg-green-50 text-[hsl(var(--hdi-green))]'
                          }`}>
                            {getIcon(item.href)}
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))] text-white font-semibold rounded-xl shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4" />
                Beratung starten
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[hsl(var(--hdi-green))] to-[hsl(var(--hdi-green-dark))]">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span className="font-bold text-[hsl(var(--hdi-green))]">HDI</span>
                </div>
                <div>
                  <p className="text-white font-bold">Werner Böhm</p>
                  <p className="text-white/70 text-xs">Generalvertretung</p>
                </div>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3">
              {/* Hauptseiten */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'main' ? null : 'main')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-xs font-bold text-gray-600 uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[hsl(var(--hdi-green))]" />
                    Hauptseiten
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'main' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'main' && (
                  <div className="divide-y divide-gray-100">
                    {navigation.main.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 ${isActivePath(item.href) ? 'bg-green-50 text-[hsl(var(--hdi-green))]' : 'text-gray-700'}`}
                      >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActivePath(item.href) ? 'bg-[hsl(var(--hdi-green))] text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {getIcon(item.href)}
                        </span>
                        <span className="font-medium flex-1">{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Versicherungen */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-xs font-bold text-gray-600 uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[hsl(var(--hdi-green))]" />
                    Versicherungen ({navigation.services.length})
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'services' && (
                  <div className="divide-y divide-gray-100">
                    {navigation.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 ${isActivePath(item.href) ? 'bg-green-50 text-[hsl(var(--hdi-green))]' : 'text-gray-700'}`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${isActivePath(item.href) ? 'bg-[hsl(var(--hdi-green))] text-white' : 'bg-green-50 text-[hsl(var(--hdi-green))]'}`}>
                          {getIcon(item.href)}
                        </span>
                        <span className="font-medium flex-1 text-sm">{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Absicherung */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'decisions' ? null : 'decisions')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-xs font-bold text-gray-600 uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[hsl(var(--hdi-green))]" />
                    Absicherung ({navigation.decisions.length})
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'decisions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'decisions' && (
                  <div className="divide-y divide-gray-100">
                    {navigation.decisions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 ${isActivePath(item.href) ? 'bg-green-50 text-[hsl(var(--hdi-green))]' : 'text-gray-700'}`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${isActivePath(item.href) ? 'bg-[hsl(var(--hdi-green))] text-white' : 'bg-green-50 text-[hsl(var(--hdi-green))]'}`}>
                          {getIcon(item.href)}
                        </span>
                        <span className="font-medium flex-1 text-sm">{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Rechtliches */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'legal' ? null : 'legal')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-xs font-bold text-gray-600 uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    Rechtliches ({navigation.legal.length})
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'legal' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'legal' && (
                  <div className="divide-y divide-gray-100">
                    {navigation.legal.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 ${isActivePath(item.href) ? 'bg-green-50 text-[hsl(var(--hdi-green))]' : 'text-gray-600'}`}
                      >
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-100 text-gray-500">
                          {getIcon(item.href)}
                        </span>
                        <span className="font-medium flex-1 text-sm">{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-4 bg-white border-t space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen: {siteConfig.contact.phoneDisplay}
              </a>
              <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Erreichbar
                </span>
                <span>•</span>
                <span>{siteConfig.contact.address.city}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
