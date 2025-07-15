"use client"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/20 to-yellow-400/20 animate-bounce"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-400/20 animate-pulse delay-1000"></div>
        <div className="absolute top-60 right-60 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-400/20 animate-bounce delay-500"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-32 right-32 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-60 right-80 w-12 h-12 border-2 border-purple-500/30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <p className="text-gray-400 text-lg font-light tracking-wide">HELLO 👋, I'M</p> */}

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                <span className="text-white block">Karsten Monteiro.</span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold block">
                  <AnimatedText texts={["information technology.", "software development.", "web development.", "full-stack development."]} className="block" />
                </span>
              </h1>

              <div className="space-y-2">
                {/* <p className="text-2xl md:text-3xl font-semibold text-gray-300">IT / SOFTWARE DEVELOPER 💻</p> */}
                <p className="text-lg text-gray-400 max-w-lg">
                  I'm a passionate full-stack developer based in Canada.
                </p>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="backdrop-blur-xl bg-gradient-to-r from-cyan-400/90 to-purple-500/90 hover:from-purple-500/90 hover:to-cyan-400/90 text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 shadow-2xl hover:shadow-cyan-500/25"
            >
              HIRE ME
            </Button>
          </div>

          {/* Right Content - Abstract Design */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-96">
              {/* Large Letters */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold opacity-10 text-gradient bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  KM
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-80 animate-float"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 opacity-60 animate-float-delayed"></div>
              <div className="absolute top-32 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-70 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
