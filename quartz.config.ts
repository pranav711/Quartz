import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Pranav's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: undefined,
    },
    locale: "en-US",
    baseUrl: "https://pranav711.github.io/Quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#eaeaea",
          gray: "#9e9e9e",
          darkgray: "#4b4b4b",
          dark: "#1a1a1a",
          secondary: "#444",
          tertiary: "#888",
          highlight: "rgba(200,200,200,0.2)",
          textHighlight: "#ffff0088",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#2e2e2e",
          gray: "#6e6e6e",
          darkgray: "#b5b5b5",
          dark: "#ffffff",
          secondary: "#ccc",
          tertiary: "#aaa",
          highlight: "rgba(255,255,255,0.1)",
          textHighlight: "#ffff0088",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({
        enableSiteMap: false,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Removed: Plugin.CustomOgImages() for speed
      // Removed: Plugin.TagPage() to keep it minimal
      // Removed: Plugin.AliasRedirects() if you're not using aliases
    ],
  },
}

export default config
