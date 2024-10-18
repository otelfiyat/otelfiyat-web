import BrandLogo from "./BrandLogo";
import MobileSidebar from "./MobileSidebar";
import NavigationBar from "./NavigationBar";
import UserActions from "./UserActions";

const MainHeader = () => {
  return (
    <header className="py-2 shadow sticky top-0 bg-white z-50 bg-brand-white">
      <section className="container flex justify-between items-center">
        <BrandLogo />
        <NavigationBar />
        <div className="flex items-center gap-4">
          <UserActions />
          <MobileSidebar />
        </div>
      </section>
    </header>
  );
};

export default MainHeader;
