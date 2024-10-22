"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterLinkGroupProps {
  title: string;
  links: { label: string; icon?: string; url: string }[];
  showTitle: boolean;
}
interface FooterLinksProps {
  title: string;
  links: { label: string; icon?: string; url: string }[];
  isMobile: boolean;
}

const FooterLinkGroup = ({ title, links, showTitle }: FooterLinkGroupProps) => {
  return (
    <ul className="flex flex-col gap-2 pt-6 xl:pt-0">
      {showTitle && (
        <li className="font-semibold size-body1 text-brand-neutral-900">
          {title}
        </li>
      )}
      {links.map((link) => (
        <li key={link.url}>
          {link.icon ? (
            <a
              href={link.url}
              className="font-medium size-body2 text-brand-primary-700 hover:text-brand-primary-800 flex items-center gap-2 mb-2"
            >
              <Image
                src={`/assets/icons/${link.icon}.svg`}
                alt={link.label}
                width={20}
                height={20}
              />
              {link.label}
            </a>
          ) : (
            <Link
              href={link.url}
              className="font-medium size-body2 text-brand-neutral-700 hover:text-brand-primary-700"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

const FooterLinks = ({ title, links, isMobile }: FooterLinksProps) => {
  const isSocialLinks = title === "Sosyal Medya";

  return (
    <>
      {isMobile ? (
        !isSocialLinks ? (
          <div className="collapse collapse-arrow">
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={title === "İletişim"}
            />
            <div className="collapse-title font-semibold size-body2 text-brand-neutral-900 border-b border-brand-primary-50">
              {title}
            </div>
            <div className="collapse-content">
              <FooterLinkGroup title={title} links={links} showTitle={false} />
            </div>
          </div>
        ) : (
          <></>
        )
      ) : (
        <FooterLinkGroup title={title} links={links} showTitle={true} />
      )}
    </>
  );
};

export default FooterLinks;
