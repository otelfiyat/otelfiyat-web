import Image from "next/image";
import Link from "next/link";

import { PROFILE_DROPDOWN } from "@/lib/utils/profile-dropdown";

const ProfileDropdown = () => {
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <Image
          src="/assets/icons/profile-menu.svg"
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-[1] w-64 p-2 shadow "
      >
        {PROFILE_DROPDOWN.map((item, index) => (
          <li key={index}>
            <Link className="flex flex-row items-center" href={item.link}>
              <Image
                src={`/assets/icons/${item.icon}.svg`}
                alt={item.title}
                width={18}
                height={18}
                className="mr-2"
              />
              <span className="text-brand-neutral-800 text-nowrap size-title2">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDropdown;
