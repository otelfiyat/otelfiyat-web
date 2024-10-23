"use client";

import { LoginForm, RegisterForm } from "@/components/Authentication";

import useDialog from "./useDialog";

const AuthButtons = () => {
  const {
    isOpen: isLoginModalOpen,
    toggle: toggleLoginModal,
    onRequestClose: onRequestCloseLoginModal,
    onClick: onClickLoginButton,
  } = useDialog();

  const {
    isOpen: isRegisterModalOpen,
    toggle: toggleRegisterModal,
    onRequestClose: onRequestCloseRegisterModal,
    onClick: onClickRegisterButton,
  } = useDialog();

  return (
    <>
      <button
        className="flex-1 btn btn-outline btn-secondary size-btn"
        onClick={onClickLoginButton}
      >
        Giriş Yap
      </button>
      <button
        className="flex-1 btn btn-secondary size-btn"
        onClick={onClickRegisterButton}
      >
        Kayıt Ol
      </button>
      <LoginForm
        isOpen={isLoginModalOpen}
        toggle={toggleLoginModal}
        onRequestClose={onRequestCloseLoginModal}
      />
      <RegisterForm
        isOpen={isRegisterModalOpen}
        toggle={toggleRegisterModal}
        onRequestClose={onRequestCloseRegisterModal}
      />
    </>
  );
};

export default AuthButtons;
