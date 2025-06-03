import { DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Navigation items data
const navigationItems = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Contact Me", href: "#contact" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-start px-20 py-6 w-full bg-transparent">
      <div className="flex items-center justify-between w-full px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-[39.91px] h-10">
            <div className="relative w-[23px] h-[35px] top-[3px] left-2 bg-[url(/group.png)] bg-[100%_100%]" />
          </div>
          <div className="font-heading-h5-bold text-primaryblack">Personal</div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-heading-h5-semibold text-primaryblack"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-14 px-5 py-4 font-button-text-semibold text-black border-black rounded"
          >
            Resume
            <DownloadIcon className="w-5 h-5 ml-2" />
          </Button>

          <Button className="h-14 px-5 py-4 font-button-text-semibold text-primarywhite bg-primaryblack rounded">
            Portfolio
            <DownloadIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </header>
  );
};
