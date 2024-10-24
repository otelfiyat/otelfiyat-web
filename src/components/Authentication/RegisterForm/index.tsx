"use client";

import Link from "next/link";
import Image from "next/image";

import { CustomDialog, CustomInput } from "@/components/UI";

import useHandleForm from "./useHandleForm";
import RegisterFormTitle from "./RegisterFormTitle";

interface RegisterFormProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
  switchModals: () => void;
}

const RegisterForm = ({
  isOpen,
  onRequestClose,
  toggle,
  switchModals,
}: RegisterFormProps) => {
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
        <RegisterFormTitle />
        <CustomInput
          register={register}
          type="text"
          name="name"
          label="İsim Soyisim"
          placeholder="İsim ve soyisminizi giriniz."
          error={errors.name?.message ?? ""}
        />
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
          type="number"
          name="phoneNumber"
          label="Telefon Numarası"
          placeholder="Telefon numaranızı giriniz."
          error={errors.phoneNumber?.message ?? ""}
        />
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
        <div className="flex items-center justify-start">
          <div className="form-control">
            <label className="cursor-pointer label items-start">
              <input type="checkbox" className="checkbox checkbox-secondary" />
              <span className="label-text size-body2 text-brand-neutral-800 ms-2">
                <Link
                  href="/sozlesmeler/uyelik-sozlesmesi"
                  className="text-brand-blue"
                >
                  Üyelik sözleşmesini
                </Link>
                {" ve "}
                <Link
                  href="/sozlesmeler/kvkk-aydinlatma-metni"
                  className="text-brand-blue"
                >
                  Kvkk Aydınlatma Metni
                </Link>
                ni kabul ediyorum.
              </span>
            </label>
          </div>
        </div>
        <button
          className="btn btn-secondary size-title2 text-brand-primary-700"
          type="submit"
        >
          Üye Ol
        </button>
        <div className="divider">veya</div>
      </form>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-3">
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
            Zaten hesabın var mı?
          </span>
          <span
            className="font-semibold size-body1 text-brand-primary-500 ms-1 cursor-pointer"
            onClick={switchModals}
          >
            Giriş Yap!
          </span>
        </div>
      </div>
    </CustomDialog>
  );
};

export default RegisterForm;
