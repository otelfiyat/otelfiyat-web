"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterForm,
  registerFormSchema,
} from "@/lib/schemas/authentication-schemas";

const useHandleForm = () => {
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      password2: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterForm> = (formData) => {
    //TODO: Handle register form submission
    console.log(formData);
  };

  return { form, onSubmit };
};

export default useHandleForm;
