"use client";

import {
  FluentProvider,
  type Theme,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const lightTheme: Theme = {
  ...webLightTheme,
  colorNeutralBackground1: "#f6f1e8",
  colorNeutralBackground1Hover: "#f1eadf",
  colorNeutralBackground2: "#fbf8f1",
  colorNeutralBackground3: "#efe7da",
  colorNeutralBackground4: "#e7dece",
  colorNeutralForeground1: "#161616",
  colorNeutralForeground2: "#4f4b45",
  colorNeutralStroke1: "rgba(22, 22, 22, 0.12)",
  colorBrandBackground: "#3856b2",
  colorBrandBackgroundHover: "#304a9a",
  colorBrandBackgroundPressed: "#273d80",
  colorBrandForeground1: "#3856b2",
  colorBrandStroke1: "#3856b2",
};

const darkTheme: Theme = {
  ...webDarkTheme,
  colorNeutralBackground1: "#181715",
  colorNeutralBackground1Hover: "#211f1d",
  colorNeutralBackground2: "#1d1b19",
  colorNeutralBackground3: "#252220",
  colorNeutralBackground4: "#2c2825",
  colorNeutralForeground1: "#f6f1e8",
  colorNeutralForeground2: "#c6beb2",
  colorNeutralStroke1: "rgba(246, 241, 232, 0.14)",
  colorBrandBackground: "#8ea3f4",
  colorBrandBackgroundHover: "#9db0fb",
  colorBrandBackgroundPressed: "#7f96eb",
  colorBrandForeground1: "#aebcff",
  colorBrandStroke1: "#8ea3f4",
};

function FluentThemeBridge({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = useMemo(() => {
    if (!mounted) {
      return lightTheme;
    }

    return resolvedTheme === "dark" ? darkTheme : lightTheme;
  }, [mounted, resolvedTheme]);

  return <FluentProvider theme={theme}>{children}</FluentProvider>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
      {...props}
    >
      <FluentThemeBridge>{children}</FluentThemeBridge>
    </NextThemesProvider>
  );
}
