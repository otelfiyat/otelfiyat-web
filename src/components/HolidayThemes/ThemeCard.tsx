import Image from "next/image";

interface ThemeCardProps {
  title: string;
  image: string;
}

const ThemeCard = ({ title, image }: ThemeCardProps) => {
  return (
    <article className="flex flex-col w-[300px] h-[360px] bg-brand-white rounded-lg cursor-pointer select-none hover:border hover:border-primary">
      <div className="relative flex flex-col items-center justify-center h-[300px] rounded-t-lg overflow-hidden">
        <Image src={image} alt={title} fill />
      </div>
      <div className="flex items-center justify-start h-[60px] px-4">
        <h3 className="font-semibold size-body1 text-brand-black ">{title}</h3>
      </div>
    </article>
  );
};

export default ThemeCard;
