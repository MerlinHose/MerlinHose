"use client";

import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Switch,
} from "@fluentui/react-components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navLinks } from "@/lib/content";

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-28" />;

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      checked={isDark}
      label={isDark ? "Dark mode" : "Light mode"}
      onChange={(_, data) => setTheme(data.checked ? "dark" : "light")}
      className="portfolio-switch"
    />
  );
}

export function Navbar() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-[clamp(1rem,4vw,2rem)] pt-4",
        scrolled && "pb-1"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[90rem] items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-6",
          scrolled
            ? "border-[color:var(--rule-strong)] bg-[color:var(--surface-overlay)] shadow-[0_16px_48px_rgba(17,17,17,0.08)]"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#hero" className="inline-flex min-w-0 flex-col">
          <span className="text-sm font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Merlin Hose
          </span>
          <span className="hidden text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ink-faint)] md:block">
            Developer Portfolio
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = active === sectionId;

            return (
              <Button
                key={link.href}
                as="a"
                href={link.href}
                appearance={isActive ? "secondary" : "subtle"}
                shape="rounded"
                className="portfolio-nav-button"
              >
                {link.label}
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="md:hidden">
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <Button appearance="subtle" icon={<MenuIcon size={18} />} aria-label="Open navigation menu" />
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  {navLinks.map((link) => (
                    <MenuItem
                      key={link.href}
                      onClick={() => {
                        window.location.hash = link.href;
                      }}
                    >
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
