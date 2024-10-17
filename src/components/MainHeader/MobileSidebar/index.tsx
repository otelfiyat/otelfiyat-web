const MobileSidebar = () => {
  return (
    <section className="drawer lg:hidden w-fit">
      <input
        id="mobile-sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <label
        htmlFor="mobile-sidebar-drawer"
        className="flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0,0,256,256"
          width="32px"
          height="32px"
          fill-rule="nonzero"
        >
          <defs>
            <linearGradient
              x1="12.373"
              y1="0.373"
              x2="34.611"
              y2="22.611"
              gradientUnits="userSpaceOnUse"
              id="color-1"
            >
              <stop offset="0" stop-color="#474747"></stop>
              <stop offset="1" stop-color="#474747"></stop>
            </linearGradient>
            <linearGradient
              x1="12.373"
              y1="12.373"
              x2="34.611"
              y2="34.611"
              gradientUnits="userSpaceOnUse"
              id="color-2"
            >
              <stop offset="0" stop-color="#474747"></stop>
              <stop offset="1" stop-color="#474747"></stop>
            </linearGradient>
            <linearGradient
              x1="12.373"
              y1="24.373"
              x2="34.611"
              y2="46.611"
              gradientUnits="userSpaceOnUse"
              id="color-3"
            >
              <stop offset="0" stop-color="#474747"></stop>
              <stop offset="1" stop-color="#474747"></stop>
            </linearGradient>
          </defs>
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M42,15h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z"
                fill="url(#color-1)"
              ></path>
              <path
                d="M42,27h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z"
                fill="url(#color-2)"
              ></path>
              <path
                d="M42,39h-36c-1.65,0 -3,-1.35 -3,-3v0c0,-1.65 1.35,-3 3,-3h36c1.65,0 3,1.35 3,3v0c0,1.65 -1.35,3 -3,3z"
                fill="url(#color-3)"
              ></path>
            </g>
          </g>
        </svg>
      </label>
      <nav className="drawer-side">
        <label
          htmlFor="mobile-sidebar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4"></ul>
      </nav>
    </section>
  );
};

export default MobileSidebar;
