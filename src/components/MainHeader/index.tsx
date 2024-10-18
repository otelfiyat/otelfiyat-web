import BrandLogo from "./BrandLogo";
import MobileSidebar from "./MobileSidebar";
import NavigationBar from "./NavigationBar";
import UserActions from "./UserActions";

const MainHeader = () => {
  return (
    <header className="py-2 shadow">
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
