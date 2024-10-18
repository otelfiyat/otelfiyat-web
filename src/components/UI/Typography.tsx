type FontWeight = "regular" | "medium" | "semibold" | "bold";
type FontSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "title1"
  | "title2"
  | "body1"
  | "body2"
  | "caption";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  variant: Variant;
  fs?: { mobile: FontSize; tablet: FontSize; desktop: FontSize };
  fw?: FontWeight;
  className?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant,
  fs = { mobile: "body1", tablet: "body1", desktop: "body1" },
  fw = "regular",
  className = "",
  children,
}: TypographyProps) => {
  const fontWeights = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const fontSizes = {
    h1: "text-7xl",
    h2: "text-6xl",
    h3: "text-5xl",
    h4: "text-4xl",
    h5: "text-3xl",
    h6: "text-2xl",
    title1: "text-xl",
    title2: "text-lg",
    body1: "text-base",
    body2: "text-sm",
    caption: "text-xs",
  };

  const defaultClassName = `${fontWeights[fw]} ${fontSizes[fs.mobile]} sm:${
    fontSizes[fs.tablet]
  } lg:${fontSizes[fs.desktop]}
   ${className}`;

  const Variant = variant as keyof JSX.IntrinsicElements;

  return <Variant className={defaultClassName}>{children}</Variant>;
};

export default Typography;
