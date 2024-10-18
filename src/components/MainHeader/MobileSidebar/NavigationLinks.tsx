import Typography from "@/components/UI/Typography";
import { MAIN_NAVIGATION } from "@/lib/utils/main-navigation";
import { SUB_NAVIGATION } from "@/lib/utils/sub-navigation";
import Link from "next/link";

const NavigationLinks = () => {
  return (
    <>
      {MAIN_NAVIGATION.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>
            <Typography
              variant="body2"
              fontWeight="medium"
              type="span"
              className="text-neutral-900"
            >
              {link.label}
            </Typography>
          </Link>
        </li>
      ))}
      <hr className="text-brand-primary-100" />
      {SUB_NAVIGATION.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>
            <Typography
              variant="body2"
              type="span"
              fontWeight="medium"
              className="text-neutral-900"
            >
              {link.label}
            </Typography>
          </Link>
        </li>
      ))}
      <hr className="text-brand-primary-100" />
    </>
  );
};

export default NavigationLinks;
