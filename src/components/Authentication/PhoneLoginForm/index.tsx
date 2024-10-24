"use client";

import Image from "next/image";

import PhoneLoginFormTitle from "./PhoneLoginFormTitle";
import { CustomDialog, CustomInput } from "@/components/UI";

import useHandleForm from "./useHandleForm";

interface PhoneLoginFormProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
  switchModals: () => void;
  switchLoginModals: () => void;
}

const PhoneLoginForm = ({
  isOpen,
  onRequestClose,
  toggle,
  switchModals,
  switchLoginModals,
}: PhoneLoginFormProps) => {
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
        <PhoneLoginFormTitle />
        <CustomInput
          register={register}
          type="number"
          name="phoneNumber"
          label="Telefon Numarası"
          placeholder="Telefon numaranızı giriniz."
          error={errors.phoneNumber?.message ?? ""}
        />
        <button
          className="btn btn-secondary size-title2 text-brand-primary-700"
          type="submit"
        >
          Devam Et
        </button>
        <div className="divider">veya</div>
      </form>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-3">
          <Image
            className="cursor-pointer hover:opacity-80"
            src="/assets/icons/login-mail.svg"
            alt="e-posta ile giriş yap"
            width={48}
            height={48}
            onClick={switchLoginModals}
          />
          <Image
            className="cursor-pointer hover:opacity-80"
            src="/assets/icons/login-google.svg"
            alt="google ile giriş yap"
            width={48}
            height={48}
          />
          <Image
            className="cursor-pointer hover:opacity-80"
            src="/assets/icons/login-facebook.svg"
            alt="facebook ile giriş yap"
            width={48}
            height={48}
          />
        </div>
        <div className="flex justify-center items-center my-4">
          <span className="size-body1 text-brand-neutral-800">
            Hesabınız yok mu?
          </span>
          <span
            className="font-semibold size-body1 text-brand-primary-500 ms-1 cursor-pointer"
            onClick={switchModals}
          >
            Kayıt Ol!
          </span>
        </div>
      </div>
    </CustomDialog>
  );
};

export default PhoneLoginForm;
