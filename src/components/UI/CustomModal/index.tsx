import Modal from "react-modal";

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({
  isOpen,
  onRequestClose,
  children,
}: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
