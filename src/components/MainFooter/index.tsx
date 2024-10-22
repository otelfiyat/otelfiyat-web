import Image from "next/image";
import Link from "next/link";

import FooterLinks from "./FooterLinkGroup";
import BrandLogo from "../MainHeader/BrandLogo";
import BadgesContainer from "./BadgesContainer";
import FooterBottom from "./FooterBottom";

import { SOCIAL_LINKS } from "@/lib/utils/social-links";
import { FOOTER_LINKS } from "@/lib/utils/footer-links";

const MainFooter = () => {
  return (
    <footer className="bg-brand-white pt-4 mt-8">
      <div className="container mx-auto flex flex-col xl:hidden">
        <div className="flex justify-between items-center">
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
            isMobile={true}
            title={group.title}
            links={group.links}
          />
        ))}
      </div>
      <div className="container hidden xl:flex gap-4 justify-between">
        <div className="col-span-2">
          <BrandLogo />
        </div>
        {FOOTER_LINKS.map((group) => (
          <FooterLinks
            key={group.title}
            isMobile={false}
            title={group.title}
            links={group.links}
          />
        ))}
      </div>
      <BadgesContainer />
      <FooterBottom />
    </footer>
  );
};

export default MainFooter;
