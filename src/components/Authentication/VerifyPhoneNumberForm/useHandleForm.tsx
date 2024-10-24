"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  VerifyPhoneNumberForm,
  verifyPhoneNumberFormSchema,
} from "@/lib/schemas/authentication-schemas";

const useHandleForm = () => {
  const form = useForm<VerifyPhoneNumberForm>({
    resolver: zodResolver(verifyPhoneNumberFormSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit: SubmitHandler<VerifyPhoneNumberForm> = (
    formData: VerifyPhoneNumberForm
  ) => {
    console.log(formData);
  };

  return { form, onSubmit };
};

export default useHandleForm;
