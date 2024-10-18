import Typography from "@/components/UI/Typography";
import { SOCIAL_LINKS } from "@/lib/utils/social-links";
import Image from "next/image";
import Link from "next/link";

const SocialMediaLinks = () => {
  return (
    <>
      {SOCIAL_LINKS.map((link) => (
        <li>
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Image
              src={`/assets/icons/${link.icon}.svg`}
              alt={link.label}
              width={24}
              height={24}
            />
            <Typography
              variant="body2"
              type="span"
              fontWeight="medium"
              className="text-neutral-900"
            >
              {link.label}
            </Typography>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SocialMediaLinks;
