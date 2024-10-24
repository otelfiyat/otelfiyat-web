"use client";

import {
  ForgotPasswordForm,
  LoginForm,
  PhoneLoginForm,
  RegisterForm,
  ResetPasswordForm,
} from "@/components/Authentication";

import useDialog from "./useDialog";
import { CustomModal } from "@/components/UI";

const AuthButtons = () => {
  //Login modal
  const {
    isOpen: isLoginModalOpen,
    toggle: toggleLoginModal,
    onRequestClose: onRequestCloseLoginModal,
    onClick: onClickLoginButton,
  } = useDialog();

  //Register modal
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

  //Phone login modal
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

  //Forgot password modal
  const {
    isOpen: isForgotPasswordModalOpen,
    toggle: toggleForgotPasswordModal,
    onRequestClose: onRequestCloseForgotPasswordModal,
  } = useDialog();

  const switchLoginWithForgotPassword = () => {
    toggleLoginModal();
    toggleForgotPasswordModal();
  };

  //Reset password modal
  const {
    isOpen: isResetPasswordModalOpen,
    toggle: toggleResetPasswordModal,
    onRequestClose: onRequestCloseResetPasswordModal,
  } = useDialog();

  //Reset password approval modal
  const {
    isOpen: isResetPasswordApprovalModalOpen,
    onRequestClose: onRequestCloseResetPasswordApprovalModal,
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
        switchModals={switchModals}
        switchLoginModals={switchLoginModals}
        switchLoginWithForgotPassword={switchLoginWithForgotPassword}
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
      <ForgotPasswordForm
        isOpen={isForgotPasswordModalOpen}
        toggle={toggleForgotPasswordModal}
        onRequestClose={onRequestCloseForgotPasswordModal}
      />
      <ResetPasswordForm
        isOpen={isResetPasswordModalOpen}
        toggle={toggleResetPasswordModal}
        onRequestClose={onRequestCloseResetPasswordModal}
      />
      <CustomModal
        isOpen={isResetPasswordApprovalModalOpen}
        onRequestClose={onRequestCloseResetPasswordApprovalModal}
        title="Şifre Sıfırlama Talebiniz Alındı"
        message="Şifre sıfırlama linki e-posta adresinize gönderildi. Linke tıklayarak şifrenizi yenileyebilirsiniz."
      />
    </>
  );
};

export default AuthButtons;
