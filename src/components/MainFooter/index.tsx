import { FOOTER_LINKS } from "@/lib/utils/footer-links";
import FooterLinks from "./FooterLinkGroup";
import BrandLogo from "../MainHeader/BrandLogo";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/utils/social-links";
import Link from "next/link";
import BadgesContainer from "./BadgesContainer";
import FooterBottom from "./FooterBottom";

const MainFooter = () => {
  return (
    <footer className="bg-brand-white pt-8 pb-[2000px]">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center lg:hidden">
          <BrandLogo />
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((link) => (
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
              </Link>
            ))}
          </div>
        </div>
        {FOOTER_LINKS.map((group) => (
          <FooterLinks
            key={group.title}
            title={group.title}
            links={group.links}
          />
        ))}
        <BadgesContainer />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default MainFooter;
