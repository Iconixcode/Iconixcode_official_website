export type Client = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
};

export const clients: Client[] = [
  
  {
    name: "Bhanuka Pandipperuma",
    role: "Founder",
    company: "BNP Photography",
    initials: "BP",
    quote:
      "Iconixcode took our raw idea and turned it into a polished product in record time. The engineering quality is outstanding and every detail was considered.",
  },
  {
    name: "Lalisha Manurangi",
    role: "Bride",
    company: "",
    initials: "LM",
    quote:
      "We loved how beautifully the wedding and homecoming websites were designed. Everything felt personal, elegant, and easy to manage.",
  },
  {
    name: "Rahal Jayasingha",
    role: "Groom",
    company: "",
    initials: "RJ",
    quote:
      "The websites looked amazing, and the dashboard made everything simple to manage. We really appreciated the attention to detail and overall experience.",
  },
];

export default clients;