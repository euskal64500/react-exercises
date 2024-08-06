"use client";

import { FaCalculator } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Calculator",
    href: "/dashboard/calculator",
    icon: FaCalculator,
  },
  {
    name: "Weather",
    href: "/dashboard/weather",
    icon: TiWeatherSunny,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center justify-center rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-gray-600",
              {
                "bg-red-100 text-gray-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
