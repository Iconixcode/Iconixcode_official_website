"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const phoneNumber = "94785739319";

const message = "Hi Iconixcode, I would like to discuss a project with you.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Iconixcode on WhatsApp"
      initial={{ opacity: 0, scale: 0.88, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="group fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-end overflow-hidden rounded-full border border-emerald-300/40 bg-[#031f15]/95 text-white shadow-[0_16px_42px_rgba(0,0,0,0.36)] backdrop-blur-xl transition-[width,transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-emerald-300/70 hover:bg-[#042719]/95 hover:shadow-[0_20px_55px_rgba(37,211,102,0.22)] active:translate-y-0 sm:bottom-6 sm:right-6 md:hover:w-[214px]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_78%_50%,rgba(37,211,102,0.22),transparent_42%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-y-0 right-0 w-14 rounded-full bg-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.42)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:w-[62px]" />

      <span className="relative z-10 hidden w-[145px] translate-x-3 flex-col overflow-hidden whitespace-nowrap pl-5 pr-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100 md:flex">
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-200/85">
          WhatsApp
        </span>
        <span className="text-[13px] font-semibold leading-tight text-white">
          Chat with us
        </span>
      </span>

      <span className="relative z-20 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
        <FaWhatsapp size={26} />
      </span>
    </motion.a>
  );
}