import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
];