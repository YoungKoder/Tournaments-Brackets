import { UseFormReturn } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { LoginUser } from "../User/types";
import { loginAsync, selectLoginInfo } from "./loginSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setOpenModal } from "../Modal/modalSlice";

export const useLogin = (methods: UseFormReturn<LoginUser>) => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector(selectLoginInfo);

  const handleSubmit = methods.handleSubmit(async (data) => {
    dispatch(loginAsync(data))
      .unwrap()
      .then(() => {
        dispatch(setOpenModal(false));
        toast.success("You've successfuly login");
      })
      .catch((err) => {
        toast.error(err);
      });
  });

  return { status, handleSubmit };
};
