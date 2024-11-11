module.exports = {
  supportedLocales: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ],
  pathToLocales: "./src/locales",
  parseFolder: ["./src"],
  geminiApiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
};
