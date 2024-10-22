import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="container flex flex-col justify-start items-center min-h-screen ">
      <h1
        className="font-bold text-brand-primary-700"
        style={{ fontSize: "4rem" }}
      >
        404
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
        Aradığınız sayfa bulunamadı.
      </h2>

      <div className="flex justify-center items-center gap-4">
        <Link href="/" className="btn btn-primary">
          Ana Sayfaya Git
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
