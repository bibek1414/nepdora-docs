import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 */
export function baseOptions(hideLinks?: boolean): BaseLayoutProps {
  return {
    nav: {
      title: "Nepdora",
    },
    links: hideLinks
      ? []
      : [
          {
            text: "Documentation",
            url: "/docs/general",
            active: "nested-url",
          },
          {
            text: "Blog",
            url: "/blog",
            active: "nested-url",
          },
        ],
  };
}
