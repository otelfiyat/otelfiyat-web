import Image from "next/image";

import Modal from "react-modal";

import { XCircleIcon } from "@heroicons/react/24/outline";

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;
  variant?: "success" | "error" | "warning" | "succesful";
  title?: string;
  message?: string;
  showButtons?: 0 | 1 | 2;
  approveButtonText?: string;
  rejectButtonText?: string;
  approveButtonAction?: () => void;
  rejectButtonAction?: () => void;
}

const CustomModal = ({
  isOpen,
  onRequestClose,
  children,
  variant,
  title,
  message,
  showButtons = 0,
  approveButtonText = "Tamam",
  rejectButtonText = "İptal",
  approveButtonAction = () => {},
  rejectButtonAction = () => {},
}: CustomModalProps) => {
  const variantIcon =
    variant === "success"
      ? "/assets/icons/success.svg"
      : variant === "error"
      ? "/assets/icons/error.svg"
      : variant === "warning"
      ? "/assets/icons/warning.svg"
      : "/assets/icons/successful.svg";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
      ariaHideApp={false}
    >
      <XCircleIcon
        className="h-8 w-8 absolute top-5 right-5 text-brand-primary-700 cursor-pointer"
        onClick={onRequestClose}
      />

      {children ? (
        children
      ) : (
        <div className="flex flex-col gap-3 items-center w-[350px] sm:w-[400px] pt-2 pb-5">
          <Image
            src={variantIcon}
            alt={variant + " modal icon"}
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-3 px-3">
            <p className="font-semibold size-title1 text-brand-neutral-900 text-center">
              {title}
            </p>
            <p className="size-body1 text-brand-neutral-900 text-center">
              {message}
            </p>
            {!!showButtons && (
              <>
                <>
                  {showButtons === 2 && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <button
                        className="btn btn-error size-btn"
                        onClick={rejectButtonAction}
                      >
                        {rejectButtonText}
                      </button>
                      <button
                        className="btn btn-success size-btn"
                        onClick={approveButtonAction}
                      >
                        {approveButtonText}
                      </button>
                    </div>
                  )}
                </>
                <>
                  {showButtons === 1 && (
                    <button className="btn btn-success size-btn w-full mt-2">
                      Tamam
                    </button>
                  )}
                </>
              </>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CustomModal;
