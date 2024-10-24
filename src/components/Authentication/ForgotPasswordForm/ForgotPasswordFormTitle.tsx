const ForgotPasswordFormTitle = () => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <h2 className="font-semibold size-h5 text-brand-primary-700">
        Şifremi Unuttum
      </h2>
      <p className="size-body1 text-brand-neutral-900">
        E-posta adresinizi aşağıdaki kutuya girin. Şifrenizi sıfırlamak için bu
        adrese bir link göndereceğiz.
      </p>
    </div>
  );
};

export default ForgotPasswordFormTitle;
