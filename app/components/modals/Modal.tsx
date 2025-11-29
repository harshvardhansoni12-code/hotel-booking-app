"use client";
import { useState, useEffect, useCallback } from "react";
interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

// Modal component implementation goes here
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [ShowModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  /* Handlers--> */
  // Close handler
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [disabled, onClose]);
  // Submit handler
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit?.();
  }, [disabled, onSubmit]);
};
export default Modal;
