"use client";

import { Drawer } from "vaul";

interface CustomDrawerProps {
  title?: string;
  isOpen: boolean;
  toggleDrawer: () => void;
  children: React.ReactNode;
}

const CustomDrawer = ({
  title = "Drawer Title",
  isOpen,
  toggleDrawer,
  children,
}: CustomDrawerProps) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={toggleDrawer}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-brand-black bg-opacity-50" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[16px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none max-h-[650px]">
          <Drawer.Title className="hidden bg-primary text-white p-4 rounded-t-[16px]">
            {title}
          </Drawer.Title>
          <div className="min-w-sm bg-brand-white rounded-t-[16px] overflow-y-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-brand-neutral-500 my-3" />
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default CustomDrawer;
