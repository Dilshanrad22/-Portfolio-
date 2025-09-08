'use client'
import { useState, useEffect } from 'react'
import { Download, Linkedin, Mail, Github, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [titleVisible, setTitleVisible] = useState(true)

  const navItems = ['Home', 'Services', 'Resume', 'My selfy', 'Contact']
  const titles = [
    'Full stack developer',
    'IT undergraduate', 
    'UI UX designer',
    'Sports enthusiast'
  ]

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/dulanjana_dilshan.pdf' // Update this path to match your CV file location
    link.download = 'dulanjana_dilshan.pdf' // The name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

useEffect(() => {
  setIsVisible(true)

  // Title rotation animation
  const titleInterval = setInterval(() => {
    setTitleVisible(false) // Fade out
    
    setTimeout(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length) // Change title
      setTitleVisible(true) // Fade in
    }, 300)
    
  }, 3000) // Change every 3 seconds
  
  return () => {
    clearInterval(titleInterval)
  }
}, [titles.length])  // ✅ fixed dependency

  return (
    <>
      {/* Regular Navbar (scrolls with page) */}
      <nav className="relative top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                
                
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item)}
                  className={`relative group py-2 px-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 transform origin-left transition-all duration-300 ${
                    activeSection === item
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                  
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 rounded-lg bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-purple-600/50 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute text-purple-400 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute text-purple-400 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-lg border-t border-purple-600/30">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActiveSection(item)
                      setIsMenuOpen(false)
                    }}
                    className={`relative group py-3 px-4 text-lg font-medium transition-all duration-300 rounded-lg transform hover:translate-x-2 ${
                      activeSection === item
                        ? 'text-purple-400 bg-purple-600/10'
                        : 'text-gray-300 hover:text-white hover:bg-purple-600/5'
                    }`}
                    style={{ 
                      animation: isMenuOpen ? `slideInLeft 0.5s ease-out ${index * 100}ms both` : 'none'
                    }}
                  >
                    <span className="relative z-10">{item}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-r-full"></span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Header Section */}
      <header className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated Background Circles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600 opacity-15 rounded-full blur-3xl animate-pulse"></div>

        {/* Main Content */}
        <div className="container mx-auto px-6 pt-8 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Hello I'm - Animated */}
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                  <span className="block text-white">Hello I&apos;m</span>
                  <span className="block text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text animate-pulse">
                    DULANJANA DILSHAN
                  </span>
                </h1>
              </div>

              {/* Subtitle - Delayed Animation */}
              <div className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-xl lg:text-2xl mb-6 text-gray-300">
                  And I&apos;m a{' '}
                  <span 
                    className={`text-purple-400 font-semibold transition-all duration-300 inline-block ${
                      titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    {titles[currentTitleIndex]}
                  </span>
                </p>
              </div>

              {/* Description - Delayed Animation */}
              <div className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-gray-400 mb-8 leading-relaxed max-w-lg text-lg">
                  Motivated IT undergraduate with a passion for learning and applying new technologies. 
                  Strong team player with leadership skills, adaptability, and a commitment to achieving 
                  goals efficiently. Eager to contribute as a software engineering intern and expand 
                  knowledge in the field of Information Technology.
                </p>
              </div>

              {/* Social Links - Animated */}
              <div className={`flex gap-4 mb-8 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-purple-600 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50 group"
                >
                  <Linkedin size={24} className="text-purple-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-purple-600 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50 group"
                >
                  <Mail size={24} className="text-purple-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-purple-600 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50 group"
                >
                  <Github size={24} className="text-purple-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Download CV Button - Animated */}
              <div className={`transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <button 
                  onClick={handleDownloadCV}
                  className="group relative px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/50 hover:bg-purple-700"
                >
                  <div className="relative flex items-center gap-2 z-10">
                    <Download size={20} />
                    Download CV
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start lg:pl-46">
              <div className={`relative transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {/* Floating Container with gentle up-down motion */}
                <div className="relative animate-float">
                  
                  {/* Glowing Background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-purple-800/30 blur-2xl animate-pulse scale-110"></div>
                  
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 p-1 opacity-60">
                      <div className="w-full h-full rounded-full bg-black"></div>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative w-80 h-80 lg:w-124 lg:h-124 rounded-full overflow-hidden border-4 border-purple-600/50 hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-purple-600/50">
                    <Image
                      src="/images/propic.png"
                      alt="Dulanjana Dilshan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with gentle bounce */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
          <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gentle-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  )
}