import Image from "next/image";
import React from "react";

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
        className="dropdown-content menu bg-base-200 rounded-box z-[1] w-24 p-2 shadow"
      ></ul>
    </div>
  );
};

export default ProfileDropdown;
