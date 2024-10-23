"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PhoneLoginForm,
  phoneLoginFormSchema,
} from "@/lib/schemas/authentication-schemas";

const useHandleForm = () => {
  const form = useForm<PhoneLoginForm>({
    resolver: zodResolver(phoneLoginFormSchema),

    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<PhoneLoginForm> = (
    formData: PhoneLoginForm
  ) => {
    //TODO: Handle phone login form submission
    console.log(formData);
  };

  return { form, onSubmit };
};

export default useHandleForm;
