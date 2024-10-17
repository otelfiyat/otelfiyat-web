interface DrawerContentProps {
  children: React.ReactNode;
}
const DrawerContent = ({ children }: DrawerContentProps) => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="mobile-sidebar-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

export default DrawerContent;
