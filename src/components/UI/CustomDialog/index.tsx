"use client";

import { useMediaQuery } from "usehooks-ts";

import CustomModal from "../CustomModal";
import CustomDrawer from "../CustomDrawer";

interface CustomDialogProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const CustomDialog = ({
  isOpen,
  toggle,
  onRequestClose,
  children,
}: CustomDialogProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  if (isMobile)
    return (
      <CustomDrawer isOpen={isOpen} toggleDrawer={toggle}>
        {children}
      </CustomDrawer>
    );
  else
    return (
      <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
        {children}
      </CustomModal>
    );
};

export default CustomDialog;
