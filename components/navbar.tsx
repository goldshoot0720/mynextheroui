"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* 左側：Logo + 主選單（桌機用） */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Logo className="h-6 w-6" />
          <span className="font-bold text-lg">草包鋒兄</span>
        </NavbarBrand>

        {/* 桌機版選單 */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems
            .filter(Boolean)
            .map((item) => (
              <NavbarItem key={item!.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item!.href}
                >
                  {item!.label}
                </NextLink>
              </NavbarItem>
            ))}
        </ul>
      </NavbarContent>

      {/* 桌機版右上角主題切換 */}
      <NavbarContent className="hidden lg:flex basis-1/5" justify="end">
        <ThemeSwitch />
      </NavbarContent>

      {/* 小螢幕：主題切換 + Menu Toggle（手機 / 平板） */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* 手機 / 平板 選單項目 */}
      <NavbarMenu className="z-50 bg-background p-4">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems
            .filter(Boolean)
            .map((item, index) => (
              <NavbarMenuItem key={`${item!.href}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={item!.href}
                  size="lg"
                >
                  {item!.label}
                </Link>
              </NavbarMenuItem>
            ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
