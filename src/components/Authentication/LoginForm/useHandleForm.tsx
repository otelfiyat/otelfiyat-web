"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginForm,
  loginFormSchema,
} from "@/lib/schemas/authentication-schemas";

const useHandleForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (formData: LoginForm) => {
    console.log(formData);
    //TODO: Handle login form submission
  };

  return { form, onSubmit };
};

export default useHandleForm;
