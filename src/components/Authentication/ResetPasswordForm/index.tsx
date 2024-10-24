"use client";

import ResetPasswordFormTitle from "./ResetPasswordFormTitle";
import { CustomDialog, CustomInput } from "@/components/UI";

import useHandleForm from "./useHandleForm";

interface ResetPasswordFormProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
}

const ResetPasswordForm = ({
  isOpen,
  toggle,
  onRequestClose,
}: ResetPasswordFormProps) => {
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
        <ResetPasswordFormTitle />

        <CustomInput
          register={register}
          type="password"
          name="password"
          label="Şifre"
          placeholder="Şifrenizi giriniz."
          error={errors.password?.message ?? ""}
        />
        <CustomInput
          register={register}
          type="password"
          name="password2"
          label="Şifre Tekrarı"
          placeholder="Şifrenizi tekrar giriniz."
          error={errors.password2?.message ?? ""}
        />
        <button
          className="btn btn-secondary size-title2 text-brand-primary-700"
          type="submit"
        >
          Şifre Oluştur
        </button>
      </form>
    </CustomDialog>
  );
};

export default ResetPasswordForm;
