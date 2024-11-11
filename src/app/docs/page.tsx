"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsContent } from "./_components/DocsContent";
import { sections } from "@/lib/constants";
import { useLazyI18n } from "i18n-lazy";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "quick-start",
  ]);
  const { translate } = useLazyI18n();

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "introduction",
      title: translate("Introduction"),
      content: translate(
        "Effortlessly automate your translation process and expand your reach globally. With lazy-i18n, going global has never been easier. Just sit back, relax, and let your translations happen lazily."
      ),
    },
    {
      id: "features",
      title: translate("Features"),
      content: [
        "🚀 Automated translations using Google's Gemini AI",
        "🔄 Easy integration with React applications",
        "📦 TypeScript support",
        "🛠️ Simple configuration",
        "💻 CLI tool for managing translations",
        "🔍 Automatic scanning of translation keys",
        "🌐 Support for multiple locales",
      ],
    },
    {
      id: "installation",
      title: translate("Installation"),
      content: `npm install i18n-lazy\n# or\nyarn add i18n-lazy`,
    },
    {
      id: "file-structure",
      title: translate("Recommended File Structure"),
      content: `Old and new file structure pattern`,
    },
    {
      id: "quick-start",
      title: translate("Quick Start"),
      subsections: [
        { id: "init", title: translate("Initialize Configuration") },
        { id: "config", title: translate("Configuration File") },
        { id: "setup", title: translate("Project Setup") },
        { id: "usage", title: translate("Basic Usage") },
      ],
    },
    {
      id: "api-reference",
      title: translate("API Reference"),
      subsections: [
        { id: "provider", title: translate("TranslationProvider") },
        { id: "hook", title: translate("useTranslation Hook") },
        { id: "translate", title: translate("translate Function") },
      ],
    },
    {
      id: "configuration",
      title: translate("Configuration"),
      subsections: [
        { id: "options", title: translate("Configuration Options") },
        { id: "env", title: translate("Environment Variables") },
        { id: "cli", title: translate("CLI Commands") },
      ],
    },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 lg:w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] hidden md:block">
            <ScrollArea className="h-full py-6 pr-6">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <div key={section.id}>
                    <Button
                      variant={
                        activeSection === section.id ? "secondary" : "ghost"
                      }
                      className={cn(
                        "w-full justify-start",
                        activeSection === section.id && "bg-accent"
                      )}
                      onClick={() => {
                        document
                          .getElementById(section.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                        if (section.subsections) {
                          toggleSection(section.id);
                        }
                      }}
                    >
                      {section.subsections && (
                        <ChevronDown
                          className={cn(
                            "mr-2 h-4 w-4 transition-transform",
                            expandedSections.includes(section.id)
                              ? "rotate-180"
                              : ""
                          )}
                        />
                      )}
                      {section.title}
                    </Button>
                    {section.subsections &&
                      expandedSections.includes(section.id) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {section.subsections.map((subsection) => (
                            <Button
                              key={subsection.id}
                              variant={
                                activeSection === subsection.id
                                  ? "secondary"
                                  : "ghost"
                              }
                              className={cn(
                                "w-full justify-start text-sm",
                                activeSection === subsection.id && "bg-accent"
                              )}
                              onClick={() =>
                                document
                                  .getElementById(subsection.id)
                                  ?.scrollIntoView({ behavior: "smooth" })
                              }
                            >
                              {subsection.title}
                            </Button>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </nav>
            </ScrollArea>
          </div>

          {/* Main content */}

          <div className="flex-1 min-w-0">
            <DocsContent />
          </div>
        </div>
      </div>
    </div>
  );
}
