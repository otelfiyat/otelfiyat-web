"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  password: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır."),
});

type LoginForm = z.infer<typeof formSchema>;

const useHandleForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (formData: LoginForm) => {
    console.log(formData);
  };

  return { form, onSubmit };
};

export default useHandleForm;
