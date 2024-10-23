"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof formSchema>;

const useHandleForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = (formData: LoginForm) => {
    console.log(formData);
  };

  return { form, onSubmit };
};

export default useHandleForm;
