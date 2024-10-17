import BrandLogo from "./BrandLogo";
import MobileSidebar from "./MobileSidebar";
import ProfileDropdown from "./ProfileDropdown";

const MainHeader = () => {
  return (
    <header className="py-2 shadow">
      <section className="container flex justify-between items-center ">
        <BrandLogo />
        <div className="flex items-center gap-4">
          <ProfileDropdown />
          <MobileSidebar />
        </div>
      </section>
    </header>
  );
};

export default MainHeader;
