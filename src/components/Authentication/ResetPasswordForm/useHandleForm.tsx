"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ResetPasswordForm,
  resetPasswordFormSchema,
} from "@/lib/schemas/authentication-schemas";

const useHandleForm = () => {
  const form = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      password2: "",
    },
  });

  const onSubmit: SubmitHandler<ResetPasswordForm> = (
    formData: ResetPasswordForm
  ) => {
    console.log(formData);
  };

  return { form, onSubmit };
};

export default useHandleForm;
