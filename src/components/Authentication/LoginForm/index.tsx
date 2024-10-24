"use client";

import Image from "next/image";

import LoginFormTitle from "./LoginFormTitle";
import { CustomDialog, CustomInput } from "@/components/UI";

import useHandleForm from "./useHandleForm";

interface LoginFormProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
  switchModals: () => void;
  switchLoginModals: () => void;
  switchLoginWithForgotPassword: () => void;
}

const LoginForm = ({
  isOpen,
  onRequestClose,
  toggle,
  switchModals,
  switchLoginModals,
  switchLoginWithForgotPassword,
}: LoginFormProps) => {
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
        <LoginFormTitle />
        <CustomInput
          register={register}
          type="email"
          name="email"
          label="E-posta Adresi"
          placeholder="E-posta adresinizi giriniz."
          error={errors.email?.message ?? ""}
        />
        <CustomInput
          register={register}
          type="password"
          name="password"
          label="Şifre"
          placeholder="Şifrenizi giriniz."
          error={errors.password?.message ?? ""}
        />
        <div className="flex items-center justify-between">
          <div className="form-control">
            <label className="cursor-pointer label ">
              <input type="checkbox" className="checkbox checkbox-secondary" />
              <span className="label-text size-body2 text-brand-neutral-800 ms-2">
                Beni Hatırla
              </span>
            </label>
          </div>
          <span
            className="size-body2 text-brand-primary-500 hover:text-brand-primary-700 cursor-pointer"
            onClick={switchLoginWithForgotPassword}
          >
            Şifremi Unuttum
          </span>
        </div>
        <button
          className="btn btn-secondary size-title2 text-brand-primary-700"
          type="submit"
        >
          Giriş Yap
        </button>
        <div className="divider">veya</div>
      </form>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-3">
          <Image
            className="cursor-pointer hover:opacity-80"
            src="/assets/icons/login-phone.svg"
            alt="telefon ile giriş yap"
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

export default LoginForm;
