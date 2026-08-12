import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

export const details: ContactDetail[] = [
  {
    icon: Mail,
    label: "EMAIL US",
    value: "hello@iconixcode.com",
    href: "mailto:hello@iconixcode.com",
  },
  {
    icon: Phone,
    label: "PHONE / WHATSAPP",
    value: "+94 78 573 9319",
    href: "https://wa.me/94785739319",
    external: true,
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Dehiwala, Sri Lanka",
    href: "https://maps.app.goo.gl/Xui5UctnKs9xPmJv9",
    external: true,
  },
];

export const socials: SocialLink[] = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const contactConfig = {
  details,
  socials,
};

export default contactConfig;