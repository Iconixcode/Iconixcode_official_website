import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
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
    value: "hello@iconixcode.dev",
    href: "mailto:hello@iconixcode.dev",
  },
  {
    icon: Phone,
    label: "PHONE / WHATSAPP",
    value: "+1 (555) 234-5678",
    href: "tel:+15552345678",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "San Francisco, CA · Remote-first",
    href: "#",
  },
];

export const socials: SocialLink[] = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const contactConfig = {
  details,
  socials,
};

export default contactConfig;
