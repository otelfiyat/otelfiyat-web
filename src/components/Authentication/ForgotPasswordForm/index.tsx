"use client";

import ForgotPasswordFormTitle from "./ForgotPasswordFormTitle";
import { CustomDialog, CustomInput } from "@/components/UI";

import useHandleForm from "./useHandleForm";

interface ForgotPasswordProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
}

const ForgotPasswordForm = ({
  isOpen,
  onRequestClose,
  toggle,
}: ForgotPasswordProps) => {
  const { form, onSubmit } = useHandleForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <CustomDialog
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      toggle={toggle}
    >
      <form
        className="p-4 flex flex-col gap-3 sm:w-[430px] sm:p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ForgotPasswordFormTitle />
        <CustomInput
          register={register}
          type="email"
          name="email"
          label="E-posta Adresi"
          placeholder="E-posta adresinizi giriniz."
          error={errors.email?.message ?? ""}
        />
        <button
          className="btn btn-secondary size-title2 text-brand-primary-700"
          type="submit"
        >
          Gönder
        </button>
      </form>
    </CustomDialog>
  );
};

export default ForgotPasswordForm;
