import React from "react";
import { Dialog } from "@material-ui/core";
import { useModal } from "./useModal";

export const Modal: React.FC = () => {
  const { isOpen, children, switchModal } = useModal();
  return (
    <Dialog open={isOpen} onClose={() => switchModal(false)}>
      {children}
    </Dialog>
  );
};
