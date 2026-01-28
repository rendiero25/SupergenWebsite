import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaHeadset } from "react-icons/fa";

interface ContactItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  subLabel?: string;
  href: string;
  color: string;
}

const contactItems: ContactItem[] = [
  {
    id: "hotline",
    icon: <FaHeadset className="text-xl" />,
    label: "021 1234 577",
    subLabel: "08.00 - 17.00",
    href: "tel:0211234577",
    color: "bg-black/50",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp className="text-xl" />,
    label: "0812 1234 578",
    href: "https://wa.me/628121234578",
    color: "bg-black/50",
  },
  {
    id: "mail",
    icon: <FaEnvelope className="text-xl" />,
    label: "mail@supergen.com",
    href: "mailto:mail@supergen.com",
    color: "bg-black/50",
  },
  {
    id: "phone",
    icon: <FaPhone className="text-xl" />,
    label: "021 1234 577",
    href: "tel:0211234577",
    color: "bg-black/50",
  },
];

const StickyContact = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 items-end pr-0">
      {contactItems.map((item) => (
        <div
          key={item.id}
          className="relative flex items-center justify-end group cursor-pointer"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <AnimatePresence>
            {hoveredId === item.id && (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                href={item.href}
                target={item.id === "whatsapp" ? "_blank" : undefined}
                rel={item.id === "whatsapp" ? "noopener noreferrer" : undefined}
                className={`flex flex-col justify-center px-4 py-2 text-white h-[50px] min-w-[180px] shadow-lg rounded-l-md ${item.color} -mr-0.5`}
              >
                <span className="text-sm font-semibold truncate leading-tight">{item.label}</span>
                {item.subLabel && (
                  <span className="text-[14px] leading-tight">{item.subLabel}</span>
                )}
              </motion.a>
            )}
          </AnimatePresence>
          <a
            href={item.href}
            target={item.id === "whatsapp" ? "_blank" : undefined}
            rel={item.id === "whatsapp" ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-center w-[55px] h-[55px] text-white shadow-lg transition-all duration-300 ${
              hoveredId === item.id ? "brightness-100" : "bg-black/50 hover:bg-black"
            }`}
          >
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default StickyContact;
