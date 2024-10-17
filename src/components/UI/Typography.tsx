type Variant =
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

type FontWeight = "regular" | "medium" | "semibold" | "bold";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  variant: Variant;
  type: Tag;
  fontWeight?: FontWeight;
  className?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant,
  type,
  fontWeight = "regular",
  className = "",
  children,
}: TypographyProps) => {
  const fontWeights = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const variants = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
    title1: "text-lg",
    title2: "text-base",
    body1: "text-sm",
    body2: "text-xs",
    caption: "text-xs",
  };

  const defaultClassName = `${fontWeights[fontWeight]} ${variants[variant]} ${className}`;

  const Tag = type;

  return <Tag className={defaultClassName}>{children}</Tag>;
};

export default Typography;
