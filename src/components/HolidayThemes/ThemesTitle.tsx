const ThemesTitle = () => {
  return (
    <div className="flex flex-col gap-2 sm:min-w-[300px] sm:justify-center">
      <div
        className="bg-theme-title-marker bg-no-repeat bg-start bg-contain text-center flex justify-center items-center"
        style={{ width: "177px", height: "50px" }}
      >
        <h2 className="font-semibold size-title2 text-brand-primary-700">
          Tatil Temaları
        </h2>
      </div>
      <p className="font-bold size-title2 text-brand-white sm:size-h5">
        Size Uygun Tatil Temalarını Hemen İnceleyin!
      </p>
    </div>
  );
};

export default ThemesTitle;
