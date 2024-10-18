import Image from "next/image";
import Link from "next/link";

import { SOCIAL_LINKS } from "@/lib/utils/social-links";

const SocialMediaLinks = () => {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Image
              src={`/assets/icons/${link.icon}.svg`}
              alt={link.label}
              width={24}
              height={24}
            />
            <span className="text-neutral-700 font-medium size-body2">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SocialMediaLinks;
