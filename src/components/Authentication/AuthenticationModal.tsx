import Modal from "react-modal";

interface AuthenticationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const AuthenticationModal = ({
  isOpen,
  onRequestClose,
  children,
}: AuthenticationModalProps) => {
  return (
    <div className="hidden">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
        ariaHideApp={false}
      >
        {children}
      </Modal>
    </div>
  );
};

export default AuthenticationModal;
