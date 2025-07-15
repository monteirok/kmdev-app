"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  texts: string[]
  className?: string
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  const colors = [
    "text-cyan-400",
    "text-purple-500",
    "text-green-400",
    "text-yellow-400",
    "text-pink-500",
    "text-orange-400",
  ]

  return (
    <span
      className={`${className} ${colors[currentIndex]} transition-all duration-300 ${
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
      }`}
    >
      {texts[currentIndex]}
    </span>
  )
}
