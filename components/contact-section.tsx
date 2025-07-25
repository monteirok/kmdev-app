import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4">CONTACT —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Look Who&apos;s Here 😊</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-4 shadow-2xl">
              <Mail className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2">EMAIL 📧</p>
              <a
                href="mailto:contact@karstenmonteiro.com"
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-200"
              >
                contact@karstenmonteiro.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-4 shadow-2xl">
              <Linkedin className="h-8 w-8 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2">LINKEDIN 💼</p>
              <a
                href="https://linkedin.com/in/karstenmonteiro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-purple-400 transition-colors duration-200"
              >
                linkedin.com/in/karstenmonteiro
              </a>
            </div>
          </div>

          {/* Github */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-xl bg-gradient-to-r from-green-400/20 to-green-600/20 border border-green-500/30 rounded-full mb-4 shadow-2xl">
              <Github className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2">GITHUB 👾</p>
              <a
                href="https://github.com/monteirok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-green-400 transition-colors duration-200"
              >
                github.com/monteirok
              </a>
            </div>
          </div>

          {/* Phone */}
          {/* <div className="text-center space-y-4 md:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-xl bg-gradient-to-r from-green-400/20 to-yellow-400/20 border border-green-400/30 rounded-full mb-4 shadow-2xl">
              <Phone className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2">PHONE 📱</p>
              <a
                href="tel:+1234567890"
                className="text-white text-lg hover:text-green-400 transition-colors duration-200"
              >
                +1 (234) 567-8900
              </a>
            </div>
          </div> */}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. Whether you&apos;re looking for a full-time
              developer, freelance work, or just want to connect, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
