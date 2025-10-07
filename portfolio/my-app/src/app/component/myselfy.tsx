'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Heart, Camera } from 'lucide-react';
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const MyselfPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Photos array should be defined before useEffect
  const photos: Photo[] = [
    { id: 1, src: "/images/07.jpeg", title: "My Achievements", description: "With my amazing teammates during our university sports event", category: "Sports" },
    { id: 2, src: "/images/01.jpeg", title: "Achievement Moment", description: "Joined WSO2 session", category: "Academic" },
    { id: 3, src: "/images/02.jpeg", title: "Conference Time", description: "AGM Leo Club of University Of Moratuwa", category: "Leo" },
    { id: 4, src: "/images/03.jpeg", title: "Achievement Moment", description: "With my amazing teammates during our university sports event", category: "Sport" },
    { id: 5, src: "/images/04.jpeg", title: "Achivement Moment", description: "Most Outstand Director in UoM Leo club", category: "Leo" },
    { id: 6, src: "/images/13.jpg", title: "Leadership Camp Time", description: "Most Outstand Director in UoM Leo club", category: "Leo" },
    { id: 7, src: "/images/06.jpeg", title: "Achivement Moment", description: "Celebrating educational achievements with pride and joy", category: "Academic" },
    { id: 8, src: "/images/08.jpeg", title: "Achivement Moment", description: "Get University Colors in 2024/2025", category: "Sport" },
    { id: 9, src: "/images/14.jpg", title: "Sasnaka Sansada Moment", description: "Did mathematics seminar in two days", category: "Education" },
    { id: 10, src: "/images/10.jpeg", title: "Team Spirit", description: "Mora Weighlifting", category: "Sport" },
    { id: 11, src: "/images/11.jpeg", title: "Personal Growth", description: "Reflecting on my journey and achievements", category: "Personal" },
    { id: 12, src: "/images/12.jpeg", title: "Team work", description: "Academic presentation group", category: "Academic" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, photos.length]); // ✅ fixed dependency

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  const goToImage = (index: number) => setCurrentImageIndex(index);

  return (
    <div className="min-h-screen text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">
              Myself
            </span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-800 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A glimpse into my journey, memories, and moments that define who I am.
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className={`relative transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
          {/* 3D Perspective Container */}
          <div 
            className="relative h-[70vh] perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Images */}
            <div className="absolute inset-0 flex items-center justify-center">
              {photos.map((photo, index) => {
                let position = index - currentImageIndex;
                if (position < -3) position += photos.length;
                if (position > 3) position -= photos.length;

                return (
                  <div
                    key={photo.id}
                    className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                      position === 0 ? 'z-30' : position === -1 || position === 1 ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      transform: `
                        translateX(${position * 200}px) 
                        translateZ(${position === 0 ? 0 : -200}px) 
                        rotateY(${position * 25}deg) 
                        scale(${position === 0 ? 1 : 0.8})
                      `,
                      opacity: Math.abs(position) > 2 ? 0 : position === 0 ? 1 : 0.6
                    }}
                    onClick={() => position !== 0 && goToImage(index)}
                  >
                    <div className={`relative rounded-2xl overflow-hidden border-4 transition-all duration-500 ${
                      position === 0 
                        ? 'border-purple-500 shadow-2xl shadow-purple-500/30' 
                        : 'border-gray-600/50 hover:border-purple-400/70'
                    }`}>
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        width={320}
                        height={384}
                        className="w- h- object-cover transition-transform duration-700 hover:scale-105"
                      />
                      
                      {/* Image Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                        position === 0 ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {position === 0 && (
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-purple-600/80 text-xs font-medium rounded-full">
                                {photo.category}
                              </span>
                              <Heart size={16} className="text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                            <p className="text-gray-300 text-sm">{photo.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 hover:bg-purple-600/80 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 hover:bg-purple-600/80 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Auto-play Control */}
            <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="absolute top-4 right-4 z-40 p-3 bg-black/50 hover:bg-purple-600/80 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              {isAutoPlay ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
            </button>

            {/* Photo Counter */}
            <div className="absolute top-4 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full border border-gray-600 backdrop-blur-sm">
              <Camera size={16} className="text-purple-400" />
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-12 gap-3 px-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToImage(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                  index === currentImageIndex 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/50' 
                    : 'border-gray-600 hover:border-purple-400'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-purple-500/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 mx-auto max-w-md">
            <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-300"
                style={{ width: `${((currentImageIndex + 1) / photos.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Journey Memories</span>
              <span>{Math.round(((currentImageIndex + 1) / photos.length) * 100)}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D perspective */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MyselfPage;
