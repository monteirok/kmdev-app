"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex items-center justify-center"
          >
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Animated Background Elements */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: {},
                open: {},
              }}
            >
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Menu Content */}
            <motion.div
              className="relative z-10 flex items-center justify-center min-h-screen"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="text-center space-y-8">
                {/* Menu Items */}
                <div className="space-y-8 px-8">
                  {[{ label: "Home", id: "home" }, { label: "Projects", id: "projects" }, { label: "Contact", id: "contact" }].map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease: "easeOut" }}
                    >
                      <motion.button
                        onClick={() => scrollToSection(item.id)}
                        className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500 transform hover:scale-105 whitespace-nowrap leading-tight"
                        style={{
                          textShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                          lineHeight: "1.1",
                        }}
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                {/* Close Button */}
                <motion.div
                  className="pt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
                >
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="lg"
                    className="text-gray-400 hover:text-white border border-white/20 hover:border-cyan-400/50 rounded-full px-8 py-4 text-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <X className="h-6 w-6 mr-2" />
                    Close
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div className="absolute top-8 left-8">
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div className="absolute top-16 right-12">
              <motion.div
                className="w-3 h-3 bg-purple-500 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div className="absolute bottom-12 left-16">
              <motion.div
                className="w-1 h-1 bg-pink-400 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.45, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div className="absolute bottom-8 right-8">
              <motion.div
                className="w-2 h-2 bg-cyan-300 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
