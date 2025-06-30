"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle image tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    if (imageRef.current) {
      imageRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 8}deg)
        rotateX(${-y * 8}deg)
        translateZ(10px)
      `;
    }
    
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0)
      `;
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black dark:bg-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div
          className="absolute h-[500px] w-[500px] rounded-full bg-accent/30 blur-[100px] -top-10 -left-10"
          style={{
            background: "radial-gradient(circle, rgba(var(--color-accent-rgb), 0.8), transparent 70%)",
          }}
        />
        <div
          className="absolute h-[600px] w-[600px] rounded-full bg-accent/20 blur-[120px] bottom-0 right-0"
          style={{
            background: "radial-gradient(circle, rgba(var(--color-accent-rgb), 0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Spotlight effect that follows cursor */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--color-accent-rgb), 0.15), transparent 20%)`,
        }}
      />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left content - text and buttons */}
          <div className="flex flex-col max-w-lg">
            <div className="mb-6 inline-block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent/80 to-accent/20 blur"></div>
                <div className="relative bg-black dark:bg-black px-4 py-1 rounded-lg">
                  <span className="text-sm font-medium text-white uppercase tracking-wider">
                    Portfolio
                  </span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white leading-tight">
              Anil <span className="text-accent">Rachamalla</span>
              <br />
              <span className="text-4xl md:text-5xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Software Developer
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-md">
              Building robust backend systems and delightful user experiences with a passion for clean, efficient code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                asChild
                className="relative group overflow-hidden bg-accent hover:bg-accent/80 text-black transition-all duration-300"
              >
                <a href="/Anil_Rachamalla.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> 
                  <span>Download Resume</span>
                  <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-accent text-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Link href="https://www.linkedin.com/in/anilvjit/" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" /> 
                  <span>View LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right content - profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image blob background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-r from-accent to-accent/30 blur-xl opacity-30 animate-blob"></div>
              </div>
              
              {/* Glassmorphic container */}
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-sm transition-all duration-500">
                <Image
                  src="/myphoto.jpg"
                  alt="Anil Rachamalla"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="scale-110"
                  priority
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-white/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50"></div>
              </div>
              
              {/* Edge highlight */}
              <div className="absolute -inset-0.5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-r from-accent to-accent/50 opacity-40 blur-sm -z-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add a slight ambient animation to the whole section */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          33% {
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          }
          66% {
            border-radius: 30% 70% 70% 30% / 70% 30% 30% 70%;
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
        }
        
        .animate-blob {
          animation: blob 20s infinite alternate;
        }
      `}</style>
    </section>
  );
}