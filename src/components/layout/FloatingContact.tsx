"use client";

import { useState, useEffect } from "react";
import { Phone, X, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show after a small delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.floating-contact-wrapper')) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isExpanded]);

  if (!isVisible) return null;

  return (
    <div className="floating-contact-wrapper fixed bottom-6 right-4 z-[60] flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 mb-2">
          {/* Call Button */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-3 bg-white rounded-full pl-5 pr-3 py-2.5 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0ms' }}
          >
            <span className="text-sm font-semibold text-gray-800">Anrufen</span>
            <span className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
              <Phone className="w-5 h-5 text-white" />
            </span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${siteConfig.contact.mobile.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-full pl-5 pr-3 py-2.5 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '50ms' }}
          >
            <span className="text-sm font-semibold text-gray-800">WhatsApp</span>
            <span className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg shadow-green-400/30">
              <MessageSquare className="w-5 h-5 text-white" />
            </span>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-3 bg-white rounded-full pl-5 pr-3 py-2.5 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-sm font-semibold text-gray-800">E-Mail</span>
            <span className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Mail className="w-5 h-5 text-white" />
            </span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isExpanded
            ? 'bg-gray-800 rotate-0'
            : 'bg-gradient-to-br from-green-500 to-green-600'
        }`}
        style={{
          boxShadow: isExpanded
            ? '0 10px 40px rgba(0,0,0,0.3)'
            : '0 10px 40px rgba(34,197,94,0.4)'
        }}
        aria-label={isExpanded ? "Schließen" : "Kontakt"}
      >
        {/* Pulse Animation Ring */}
        {!isExpanded && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        )}

        {/* Icon */}
        <span className={`relative z-10 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
          {isExpanded ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Phone className="w-7 h-7 text-white" />
          )}
        </span>
      </button>

      {/* Label */}
      {!isExpanded && (
        <div className="absolute -left-20 bottom-4 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg animate-fade-in whitespace-nowrap">
          Kontakt
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      )}
    </div>
  );
}
