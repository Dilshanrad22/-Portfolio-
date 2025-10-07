"use client"
import { useState, useEffect } from "react"
import { Download, Linkedin, Mail, Github, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [titleVisible, setTitleVisible] = useState(true)

  const navItems = ["Home", "Services", "Projects", "Resume", "My selfy", "Contact"]
  const titles = [
    "Full stack developer",
    "IT undergraduate",
    "UI UX designer",
    "Sports Enthusiast",
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setActiveSection(sectionId)
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv/dulanjana_dilshan.pdf"
    link.download = "dulanjana_dilshan.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    setIsVisible(true)

    const titleInterval = setInterval(() => {
      setTitleVisible(false)
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        setTitleVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(titleInterval)
  }, [titles.length])

  return (
    <>
      <nav className="relative top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <div className="text-2xl font-bold"></div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative group py-2 px-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 transform origin-left transition-all duration-300 ${
                      activeSection === item
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                  <span className="absolute inset-0 rounded-lg bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-purple-600/50 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute text-purple-400 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute text-purple-400 transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg border-t border-purple-600/30">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item)
                      setIsMenuOpen(false)
                    }}
                    className={`relative group py-3 px-4 text-lg font-medium transition-all duration-300 rounded-lg transform hover:translate-x-2 text-left ${
                      activeSection === item
                        ? "text-purple-400 bg-purple-600/10"
                        : "text-gray-300 hover:text-white hover:bg-purple-600/5"
                    }`}
                  >
                    <span className="relative z-10">{item}</span>
                    {activeSection === item && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-r-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="min-h-screen text-white overflow-hidden relative">
        <div className="container mx-auto px-6 pt-8 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1
                className={`text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="block text-white">Hello I&apos;m</span>
                <span className="block text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">
                  DULANJANA DILSHAN
                </span>
              </h1>

              <p
                className={`text-xl lg:text-2xl mb-6 text-gray-300 transform transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                And I&apos;m a{" "}
                <span
                  className={`text-purple-400 font-semibold transition-all duration-300 inline-block ${
                    titleVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  {titles[currentTitleIndex]}
                </span>
              </p>

              <p
                className={`text-gray-400 mb-8 leading-relaxed max-w-lg text-lg transform transition-all duration-1000 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Motivated IT undergraduate with a passion for learning and applying new
                technologies. Strong team player with leadership skills, adaptability,
                and a commitment to achieving goals efficiently. Eager to contribute as a
                software engineering intern and expand knowledge in Information
                Technology.
              </p>

              <div
                className={`flex gap-4 mb-8 transform transition-all duration-1000 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                  <a
                    href="https://www.linkedin.com/in/dulanjana-dilshan-6bb13a2ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="p-3 rounded-full border border-purple-600 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50"
                  >
                    <Linkedin size={24} className="text-purple-400 hover:text-white" />
                  </a>
                <a
                  href="mailto:Dulanjanassd@gmail.com"
                  title="Email"
                  className="p-3 rounded-full border border-purple-600 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50"
                >
                  <Mail size={24} className="text-purple-400 hover:text-white" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="p-3 rounded-full border border-purple-600 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50"
                >
                  <Github size={24} className="text-purple-400 hover:text-white" />
                </a>
              </div>

              <button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/50 hover:bg-purple-700"
              >
                <div className="relative flex items-center gap-2 z-10">
                  <Download size={20} />
                  Download CV
                </div>
              </button>
            </div>

            {/* Right Content - Static Profile Image Only */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start lg:pl-12">
              <div
                className={`relative transform transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {/* Profile Image - No animation, larger for desktop */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] rounded-full overflow-visible lg:ml-20">
                  {/* Glowing radial light behind the profile image */}
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <span className="glow-radial w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] rounded-full" aria-hidden="true"></span>
                  </div>
                  <div className="relative rounded-full overflow-hidden border-4 border-purple-600/50 hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-purple-600/50 animate-float w-full h-full">
                    <Image
                      src="/images/propic.png"
                      alt="Dulanjana Dilshan"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
