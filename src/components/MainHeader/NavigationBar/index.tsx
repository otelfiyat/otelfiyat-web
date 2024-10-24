"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MAIN_NAVIGATION } from "@/lib/utils/main-navigation";

//TODO: use server side rendering for navigation bar
const NavigationBar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-6 xl:space-x-12">
        {MAIN_NAVIGATION.map((navItem) => (
          <li key={navItem.label}>
            <Link
              href={navItem.href}
              className={`font-medium size-body1 hover:text-brand-primary-600 cursor-pointer transition-colors ${
                isActive(navItem.href)
                  ? "text-brand-primary-600 border-l-2 border-brand-primary-600 pl-1"
                  : "text-brand-neutral-800"
              } `}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
