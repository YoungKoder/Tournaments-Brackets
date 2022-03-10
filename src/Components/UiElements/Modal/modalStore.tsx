interface Modal {
  isOpen: boolean;
  switchModal: (status: boolean) => void;
  handleCloseModal: () => void;
  children?: React.ReactNode;
}

export function createModalContext(): Modal {
  return {
    isOpen: false,
    switchModal: function (status) {
      this.isOpen = status;
    },
    handleCloseModal: function () {
      this.isOpen = false;
    },
  };
}
