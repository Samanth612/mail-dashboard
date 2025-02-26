import { Link } from "react-router-dom";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { store } from "@/store/store";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
  selected: string;
  setSelected: (title: string) => void;
}

export function Nav({ links, isCollapsed, selected, setSelected }: NavProps) {
  const handleClick = (link: any) => {
    if (link.title === "Logout") {
      store.dispatch({ type: "LOGOUT" });
    } else {
      setSelected(link.title);
    }
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  onClick={() => handleClick(link)}
                  className={cn(
                    buttonVariants({
                      variant: link.title === selected ? "default" : "ghost",
                      size: "icon",
                    }),
                    "h-9 w-9",
                    link.title === selected &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              to="#"
              onClick={() => handleClick(link)}
              className={cn(
                buttonVariants({
                  variant: link.title === selected ? "default" : "ghost",
                  size: "sm",
                }),
                link.title === selected &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
