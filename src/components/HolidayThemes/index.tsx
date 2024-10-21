import ThemesCardsSlider from "./ThemesCardsSlider";
import ThemesTitle from "./ThemesTitle";

interface HolidayThemesProps {
  themes: {
    title: string;
    image: string;
  }[];
}

const HolidayThemes = ({ themes }: HolidayThemesProps) => {
  return (
    <section className="my-10 bg-holiday-themes-bg bg-center bg-cover bg-no-repeat">
      <div className="container flex flex-col gap-2 py-4 sm:flex-row sm:overflow-hidden">
        <ThemesTitle />
        <ThemesCardsSlider themes={themes} />
      </div>
    </section>
  );
};

export default HolidayThemes;
