import Typography from "@/components/UI/Typography";
import AuthButtons from "./AuthButtons";
import NavigationLinks from "./NavigationLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import SidebarHeader from "./SidebarHeader";
import DrawerTrigger from "./DrawerTrigger";
import DrawerContent from "./DrawerContent";

const MobileSidebar = () => {
  return (
    <section className="drawer lg:hidden w-fit">
      <DrawerTrigger />
      <DrawerContent>
        <SidebarHeader />
        <AuthButtons />
        <nav>
          <ul className="flex flex-col gap-4">
            <NavigationLinks />
            <SocialMediaLinks />
          </ul>
        </nav>
      </DrawerContent>
    </section>
  );
};

export default MobileSidebar;
