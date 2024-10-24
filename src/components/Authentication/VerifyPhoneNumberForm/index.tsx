import { CustomCountdown, CustomDialog, CustomOTP } from "@/components/UI";
import useHandleForm from "./useHandleForm";
import VerifyPhoneNumberFormTitle from "./VerifyPhoneNumberFormTitle";

interface VerifyPhoneNumberFormProps {
  isOpen: boolean;
  toggle: () => void;
  onRequestClose: () => void;
}

const VerifyPhoneNumberForm = ({
  isOpen,
  toggle,
  onRequestClose,
}: VerifyPhoneNumberFormProps) => {
  const { form, onSubmit } = useHandleForm();

  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = form;

  //TODO: Replace this with the actual phone number
  const phoneNumber = "+90 555 555 55 55";

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
        <VerifyPhoneNumberFormTitle phoneNumber={phoneNumber} />
        <CustomOTP onComplete={(pin) => console.log(pin)} />

        <CustomCountdown
          initialTime={180}
          countdownCompleteMessage="Doğrulama kodunuzun süresi doldu."
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

export default VerifyPhoneNumberForm;
