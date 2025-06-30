"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight-new";

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
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
  
  // Hydration fix for SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR or before hydration, return a placeholder
    return <section className="min-h-screen" />;
  }
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
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

      {/* Spotlight effect */}
      <Spotlight />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left content - text and buttons */}
          <div className="flex flex-col max-w-lg">
            <div className="mb-6 inline-block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent/80 to-accent/20 blur"></div>
                <div className="relative px-4 py-1 rounded-lg bg-background">
                  <span className="text-sm font-medium uppercase tracking-wider text-foreground">
                    Portfolio
                  </span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight text-foreground">
              Anil <span className="text-accent">Rachamalla</span>
              <br />
              <span className="text-4xl md:text-5xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                Software Developer
              </span>
            </h1>
            
            <p className="text-xl mb-8 max-w-md text-foreground/70">
              Turning code into secure, responsive, and data-driven solutions with a sharp eye on performance and protection
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="https://docs.google.com/document/d/1JSmWv3v6377P4mikg4g1TG1j-8PrHvvB/edit?usp=sharing&ouid=118032712306966687784&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              
              {/* LinkedIn button with hover border gradient effect */}
              <div className="rounded-full overflow-hidden">
                <HoverBorderGradient
                  as="div"
                  containerClassName="rounded-full"
                  className="bg-background text-foreground flex items-center space-x-2"
                  onClick={() => window.open("https://www.linkedin.com/in/anilvjit/", "_blank", "noreferrer")}
                  style={{ cursor: 'pointer' }}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span>LinkedIn</span>
                </HoverBorderGradient>
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
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
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                  priority
                  style={{ objectFit: "cover" }}
                  className="scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://via.placeholder.com/400x400?text=Anil+Rachamalla";
                  }}
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
