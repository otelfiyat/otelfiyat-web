"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordForm,
  forgotPasswordFormSchema,
} from "@/lib/schemas/authentication-schemas";

const useHandleForm = () => {
  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordForm> = (
    formData: ForgotPasswordForm
  ) => {
    console.log(formData);
    //TODO: Handle forgot password form submission
  };

  return { form, onSubmit };
};

export default useHandleForm;
