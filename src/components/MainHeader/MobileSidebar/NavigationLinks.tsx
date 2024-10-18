import Link from "next/link";

import { MAIN_NAVIGATION } from "@/lib/utils/main-navigation";
import { SUB_NAVIGATION } from "@/lib/utils/sub-navigation";

const NavigationLinks = () => {
  return (
    <>
      {MAIN_NAVIGATION.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-neutral-900 font-medium size-body2"
          >
            {link.label}
          </Link>
        </li>
      ))}
      <hr className="text-brand-primary-100" />
      {SUB_NAVIGATION.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-neutral-900 font-medium size-body2"
          >
            {link.label}
          </Link>
        </li>
      ))}
      <hr className="text-brand-primary-100" />
    </>
  );
};

export default NavigationLinks;
