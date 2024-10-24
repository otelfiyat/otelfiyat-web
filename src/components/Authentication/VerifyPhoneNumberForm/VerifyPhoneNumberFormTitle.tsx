interface VerifyPhoneNumberFormTitleProps {
  phoneNumber: string;
}

const VerifyPhoneNumberFormTitle = ({
  phoneNumber,
}: VerifyPhoneNumberFormTitleProps) => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <h2 className="font-semibold size-h5 text-brand-primary-700">
        Doğrulama Kodu
      </h2>
      <p className="size-body1 text-brand-neutral-900">
        Lütfen, {phoneNumber} numarasına gönderdiğimiz doğrulama kodunu aşağıya
        girin.
      </p>
    </div>
  );
};

export default VerifyPhoneNumberFormTitle;
