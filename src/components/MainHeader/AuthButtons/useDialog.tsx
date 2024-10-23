import { useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onRequestClose = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    const sidebar = document.getElementById(
      "mobile-sidebar-drawer"
    ) as HTMLInputElement;

    if (sidebar) {
      sidebar.click();
    }
  };

  const onClick = () => {
    closeSidebar();
    setIsOpen(true);
  };

  return {
    isOpen,
    setIsOpen,
    onRequestClose,
    toggle,
    onClick,
  };
};

export default useDialog;
