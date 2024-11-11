export const fileStructureData = {
  old: [
    {
      name: "app",
      type: "folder" as const,
      children: [
        {
          name: "(home)",
          type: "folder" as const,
          children: [{ name: "page.tsx", type: "file" as const }],
        },
        {
          name: "about",
          type: "folder" as const,
          children: [{ name: "page.tsx", type: "file" as const }],
        },
        {
          name: "api",
          type: "folder" as const,
        },
      ],
    },
    {
      name: "public",
      type: "folder" as const,
    },
    {
      name: "package.json",
      type: "file" as const,
    },
  ],
  new: [
    {
      name: "app",
      type: "folder" as const,
      children: [
        {
          name: "[locale]",
          type: "folder" as const,
          children: [
            {
              name: "en.json",
              type: "file" as const,
            },
            {
              name: "fr.json",
              type: "file" as const,
            },
            {
              name: "es.json",
              type: "file" as const,
            },
            {
              name: "it.json",
              type: "file" as const,
            },
          ],
        },
        {
          name: "(home)",
          type: "folder" as const,
          children: [{ name: "page.tsx", type: "file" as const }],
        },
        {
          name: "about",
          type: "folder" as const,
          children: [{ name: "page.tsx", type: "file" as const }],
        },
        {
          name: "api",
          type: "folder" as const,
        },
      ],
    },
    {
      name: "public",
      type: "folder" as const,
    },
    {
      name: "package.json",
      type: "file" as const,
    },
    {
      name: "i18n-lazy.config.js",
      type: "file" as const,
    },
  ],
};

export const features = [
  {
    icon: "🚀",
    title: "Automated Translations",
    desc: "Powered by Google's Gemini AI",
  },
  {
    icon: "🔄",
    title: "React Integration",
    desc: "Easy integration with React applications",
  },
  {
    icon: "📦",
    title: "TypeScript Support",
    desc: "Full TypeScript support out of the box",
  },
  {
    icon: "🛠️",
    title: "Simple Configuration",
    desc: "Minimal setup required to get started",
  },
  {
    icon: "💻",
    title: "CLI Tools",
    desc: "Powerful CLI for managing translations",
  },
  {
    icon: "🌐",
    title: "Multiple Locales",
    desc: "Support for multiple languages",
  },
];

export const configurationOptions = [
  {
    name: "supportedLocales",
    type: "Array",
    description: "List of supported languages with code and name",
  },
  {
    name: "pathToLocales",
    type: "String",
    description: "Directory path for translation files",
  },
  {
    name: "parseFolder",
    type: "Array",
    description: "List of folders to scan for translation keys",
  },
  {
    name: "geminiApiKey",
    type: "String",
    description: "Your Gemini API key for translations",
  },
];

export const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `Effortlessly automate your translation process and expand your reach globally. With lazy-i18n, going global has never been easier. Just sit back, relax, and let your translations happen lazily.`,
  },
  {
    id: "features",
    title: "Features",
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
    title: "Installation",
    content: `npm install i18n-lazy\n# or\nyarn add i18n-lazy`,
  },
  {
    id: "file-structure",
    title: "Recommended File Structure",
    content: `Old and new file structure pattern`,
  },
  {
    id: "quick-start",
    title: "Quick Start",
    subsections: [
      { id: "init", title: "Initialize Configuration" },
      { id: "config", title: "Configuration File" },
      { id: "setup", title: "Project Setup" },
      { id: "usage", title: "Basic Usage" },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    subsections: [
      { id: "provider", title: "TranslationProvider" },
      { id: "hook", title: "useTranslation Hook" },
      { id: "translate", title: "translate Function" },
    ],
  },
  {
    id: "configuration",
    title: "Configuration",
    subsections: [
      { id: "options", title: "Configuration Options" },
      { id: "env", title: "Environment Variables" },
      { id: "cli", title: "CLI Commands" },
    ],
  },
];
