"use client";

import Typography from "@/components/UI/Typography";
import { MAIN_NAVIGATION } from "@/lib/utils/main-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link href={navItem.href} key={navItem.label}>
            <li>
              <Typography
                variant="span"
                fs={{
                  mobile: "body1",
                  tablet: "body1",
                  desktop: "body1",
                }}
                fw="semibold"
                className={` hover:text-brand-primary-600 cursor-pointer transition-colors ${
                  isActive(navItem.href)
                    ? "text-brand-primary-600 border-l-2 border-brand-primary-600 pl-1"
                    : "text-brand-neutral-600"
                } 
                `}
              >
                {navItem.label}
              </Typography>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
