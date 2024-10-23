"use client";

import {
  LoginForm,
  PhoneLoginForm,
  RegisterForm,
} from "@/components/Authentication";

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

  const switchModals = () => {
    toggleLoginModal();
    toggleRegisterModal();
  };

  const {
    isOpen: isPhoneLoginModalOpen,
    toggle: togglePhoneLoginModal,
    onRequestClose: onRequestClosePhoneLoginModal,
  } = useDialog();

  const switchLoginModals = () => {
    toggleLoginModal();
    togglePhoneLoginModal();
  };

  const switchPhoneWithRegister = () => {
    toggleRegisterModal();
    togglePhoneLoginModal();
  };

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
        switchModals={switchModals}
        switchLoginModals={switchLoginModals}
      />
      <RegisterForm
        isOpen={isRegisterModalOpen}
        toggle={toggleRegisterModal}
        onRequestClose={onRequestCloseRegisterModal}
        switchModals={switchModals}
      />
      <PhoneLoginForm
        isOpen={isPhoneLoginModalOpen}
        toggle={togglePhoneLoginModal}
        onRequestClose={onRequestClosePhoneLoginModal}
        switchModals={switchPhoneWithRegister}
        switchLoginModals={switchLoginModals}
      />
    </>
  );
};

export default AuthButtons;
