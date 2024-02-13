import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My Nextra Documentation</span>,
  //   project: {
  //     link: "https://github.com/shuding/nextra",
  //   },
  // ... other theme options
  footer: {
    text: (
      <span>
        AutoSave {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Rd_Trends
        </a>
        .
      </span>
    ),
  },
  nextThemes: { defaultTheme: "system", storageKey: "autostage-theme" },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "de", text: "German" },
  ],
  search: {
    placeholder: (lang) => {
      console.log(lang)
      if (lang === "de") return "Suche";
      return "Search";
    },
  },
};

export default config;
