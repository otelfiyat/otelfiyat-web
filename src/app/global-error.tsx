"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //TODO: Add error logging
    console.error(error);
  }, [error]);

  const { push } = useRouter();

  const handleGoHome = () => {
    push("/");
  };

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <main className="container flex flex-col justify-start items-center min-h-screen ">
          <h1
            className="font-bold text-brand-primary-700"
            style={{ fontSize: "4rem" }}
          >
            400
          </h1>
          <div className="relative flex items-center justify-center h-[200px] w-[320px] sm:w-[480px] sm:h-[300px] my-8">
            <Image
              className="object-cover"
              src="/assets/images/error.png"
              alt="Error"
              fill
            />
          </div>
          <h2 className="size-title1 text-brand-primary-500 text-center mb-12">
            Bir hata oluştu. Lütfen tekrar deneyin veya destek ekibimizle
            iletişime geçin.
          </h2>

          <div className="flex justify-center items-center gap-4">
            <button className="btn btn-primary" onClick={handleGoHome}>
              Ana Sayfaya Git
            </button>
            <button className="btn btn-secondary" onClick={reset}>
              Sayfayı Yeniden Yükle
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
