"use client";

import { useState, useEffect, type FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const HamburgerMenu: FC<HamburgerMenuProps> = ({ navItems = defaultNavItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    openTop: {
      rotate: 45,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    openBottom: {
      rotate: -45,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const middleLineVariants = {
    closed: { opacity: 1, transition: { duration: 0.2 } },
    open: { opacity: 0, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const navItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const getAnimationState = () => {
    if (isOpen) return "open";
    if (isHovered) return "hover";
    return "closed";
  }

  return (
    <>
      <motion.button
        onClick={toggleMenu}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="fixed top-4 right-4 z-50 flex h-12 w-12 flex-col items-center justify-center space-y-2 rounded-full text-white backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="fullscreen-menu"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="h-0.5 w-6 origin-center bg-white"
          variants={lineVariants}
          animate={isOpen ? "openTop" : "closed"}
        />
        <motion.div
          className="h-0.5 w-6 bg-white"
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.div
          className="h-0.5 w-6 origin-center bg-white"
          variants={lineVariants}
          animate={isOpen ? "openBottom" : "closed"}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="fullscreen-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          >
            <nav onClick={(e) => e.stopPropagation()} className="p-8">
              <motion.ul
                variants={menuVariants}
                className="flex flex-col items-center space-y-6"
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.li key={item.label} variants={navItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-headline text-4xl font-medium text-primary transition-colors hover:text-accent focus:text-accent focus:outline-none md:text-6xl"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
