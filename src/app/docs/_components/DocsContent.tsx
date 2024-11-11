"use client";
import { configurationOptions, features } from "@/lib/constants";
import { CodeBlock } from "./CodeBlock";
import { FileStructureSection } from "./FileStructureSection";
import { useLazyI18n } from "i18n-lazy";

export function DocsContent() {
  const { translate } = useLazyI18n();
  return (
    <div className="w-full px-8 py-6 lg:px-12">
      {/* Introduction */}
      <section id="introduction" className="mb-16 scroll-mt-20">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          {translate("Documentation")}
        </h1>
        <div className="space-y-4 text-muted-foreground">
          <p className="text-md leading-relaxed">
            {translate(
              " Effortlessly automate your translation process and expand your reach globally. With i18n-lazy, going global has never been easier. Just sit back, relax, and let your translations happen lazily."
            )}
          </p>
        </div>
        <div className="max-w-xs mt-10">
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/Dw7Eo8giBWg?si=NsyYpFRLWP7pXkjN&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&playsinline=1&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          {translate("Features")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50"
            >
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h3 className="font-medium text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          {translate("Installation")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {translate(
            "Get started by installing the package using npm or yarn:"
          )}
        </p>
        <CodeBlock code="npm install i18n-lazy" />
        <CodeBlock code="yarn add i18n-lazy" />
      </section>

      <section id="file-structure" className="mb-16 scroll-mt-20">
        <FileStructureSection />
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          {translate("Quick Start")}
        </h2>

        <div className="space-y-8">
          <section id="init" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              {translate("1. Initialize Configuration")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate(
                "Run the initialization command to create your configuration file:"
              )}
            </p>
            <CodeBlock code="npx i18n-lazy-init" />
          </section>

          <section id="config" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              {translate("2. Configure Your Settings")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate(
                "Update the generated i18n-lazy.config.js with your settings:"
              )}
            </p>
            <CodeBlock
              language="javascript"
              code={`export default {
    supportedLocales: [
      { code: "en", name: "English" },
      { code: "es", name: "Spanish" },
      // Add more languages as needed
    ],
    pathToLocales: "./src/locales", // Where translation files will be stored
    parseFolder: ["./src"], // Folders to scan for translations
    geminiApiKey: "YOUR_API_KEY", // Your Gemini API key
  };`}
            />
          </section>

          <section id="setup" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              {translate("3. Set Up Provider")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate("Wrap your app with the TranslationProvider:")}
            </p>
            <CodeBlock
              language="jsx"
              code={`import { LazyI18nProvider, LanguageCodeToTranslations } from "i18n-lazy";
  import translations from "./locales/en.json";
  import en from "./locales/en.json";
  import es from "./locales/es.json";
  
  export const translations: LanguageCodeToTranslations = {
    en: en,
    es: es,
  };
  
  function App() {
    return (
      <LazyI18nProvider localeCode="en" translationsObject={translations["en"]}>
        <YourApp />
      </LazyI18nProvider>
    );
  }`}
            />
          </section>

          <section id="usage" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              {translate("4. Use in Components")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate("Start using translations in your components:")}
            </p>
            <CodeBlock
              language="jsx"
              code={`import { useLazyI18n } from "i18n-lazy";
  
  function MyComponent() {
    const { translate } = useLazyI18n();
  
    return (
      <div>
        <h1>{translate("Welcome to our app!")}</h1>
        <p>{translate("Hello {name}!", { name: "John" })}</p>
      </div>
    );
  }`}
            />
          </section>
        </div>
      </section>

      {/* API Reference */}
      <section id="api-reference" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          {translate("API Reference")}
        </h2>

        <div className="space-y-8">
          <section id="provider" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              TranslationProvider
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate(
                "The main provider component that wraps your application:"
              )}
            </p>
            <CodeBlock
              language="jsx"
              code={`<TranslationProvider
    localeCode="en"              // Current locale code
    defaultLocaleCode="en"       // Optional fallback locale
    translationsObject={...}     // Translation key-value pairs
  >
    {children}
  </TranslationProvider>`}
            />
          </section>

          <section id="hook" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              useTranslation Hook
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate("Hook for accessing translation functionality:")}
            </p>
            <CodeBlock
              language="javascript"
              code={`const {
    translate,      // Function to translate keys
    locale,        // Current locale code
    setLocale,     // Function to change locale
    translations,  // Current translations object
    setTranslations, // Function to update translations
  } = useTranslation();`}
            />
          </section>

          <section id="translate" className="scroll-mt-20">
            <h3 className="text-xl font-medium text-foreground mb-4">
              {translate("translate Function")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {translate(
                "The translate function supports basic translation and interpolation:"
              )}
            </p>
            <CodeBlock
              language="javascript"
              code={`// Basic usage
  translate("Welcome to our app!")
  
  // With interpolation
  translate("Hello {name}!", { name: "John" })
  
  // With pluralization
  translate("You have {count} message(s)", { count: 5 })`}
            />
          </section>
        </div>
      </section>

      {/* Configuration */}
      <section id="configuration" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          {translate("Configuration")}
        </h2>

        <section id="options" className="mb-8 scroll-mt-20">
          <h3 className="text-xl font-medium text-foreground mb-4">
            {translate("Configuration Options")}
          </h3>
          <div className="space-y-4">
            <div className="grid gap-4">
              {configurationOptions.map((option) => (
                <div
                  key={option.name}
                  className="p-4 rounded-lg bg-muted/50 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {option.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({option.type})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="env" className="mb-8 scroll-mt-20">
          <h3 className="text-xl font-medium text-foreground mb-4">
            {translate("Environment Variables")}
          </h3>
          <p className="text-muted-foreground mb-4">
            {translate(
              "Create a .env file in your project root with your Gemini API key:"
            )}
          </p>
          <CodeBlock code="GEMINI_API_KEY=your_api_key_here" />
        </section>

        <section id="cli" className="mb-8 scroll-mt-20">
          <h3 className="text-xl font-medium text-foreground mb-4">
            {translate("CLI Commands")}
          </h3>
          <div className="space-y-4">
            {[
              {
                command: "npx i18n-lazy-init",
                description: "Creates initial configuration file",
              },
              {
                command: "npx i18n-lazy",
                description:
                  "Scans for translation keys and generates translations",
              },
            ].map((cmd) => (
              <div
                key={cmd.command}
                className="p-4 rounded-lg bg-muted/50 space-y-2"
              >
                <code className="font-medium text-foreground">
                  {cmd.command}
                </code>
                <p className="text-sm text-muted-foreground">
                  {cmd.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
