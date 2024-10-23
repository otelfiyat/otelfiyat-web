"use client";

import { CustomDialog } from "@/components/UI";
import useHandleForm from "./useHandleForm";

interface LoginFormProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
}

const LoginForm = ({ isOpen, onRequestClose, toggle }: LoginFormProps) => {
  const { form, onSubmit } = useHandleForm();

  return (
    <CustomDialog
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      toggle={toggle}
    >
      <form className="h-96" onSubmit={form.handleSubmit(onSubmit)}></form>
    </CustomDialog>
  );
};

export default LoginForm;
