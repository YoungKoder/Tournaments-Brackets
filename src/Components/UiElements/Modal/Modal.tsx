import { Dialog } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useModalStore } from "./modalContext";

export const Modal: React.FC = observer(() => {
  const modalStore = useModalStore();

  return (
    <Dialog open={modalStore.isOpen} onClose={modalStore.handleCloseModal}>
      {modalStore.children}
    </Dialog>
  );
});
