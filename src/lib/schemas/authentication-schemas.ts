import { z } from "zod";

//Login form schema
export const loginFormSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  password: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır."),
});

export type LoginForm = z.infer<typeof loginFormSchema>;

//Register form schema
export const registerFormSchema = z
  .object({
    name: z.string().min(3, "Adınız en az 3 karakter olmalıdır."),
    email: z.string().email("Geçerli bir e-posta adresi giriniz."),
    phoneNumber: z.string().min(10, "Geçerli bir telefon numarası giriniz."),
    password: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır."),
    password2: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır."),
  })
  .refine((data) => data.password === data.password2, {
    message: "Şifreler uyuşmuyor.",
    path: ["password2"],
  });

export type RegisterForm = z.infer<typeof registerFormSchema>;

//Phone login form schema
export const phoneLoginFormSchema = z.object({
  phoneNumber: z.string().min(10, "Geçerli bir telefon numarası giriniz."),
});

export type PhoneLoginForm = z.infer<typeof phoneLoginFormSchema>;
