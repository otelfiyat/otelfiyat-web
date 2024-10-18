import Typography from "@/components/UI/Typography";
import { SOCIAL_LINKS } from "@/lib/utils/social-links";
import Image from "next/image";
import Link from "next/link";

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
            <Typography
              variant="span"
              fs={{
                mobile: "body2",
                tablet: "body2",
                desktop: "body2",
              }}
              fw="medium"
              className="text-neutral-700"
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
