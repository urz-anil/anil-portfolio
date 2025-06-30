"use client";

import { Mail, Phone, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {/* Email */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <div className="p-4 bg-blue-100 rounded-full text-blue-600 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Mail className="h-8 w-8" />
            </div>
            <a
              href="mailto:anilvjitit@gmail.com"
              className="text-lg hover:text-blue-600 transition-colors duration-200 text-center"
            >
              anilvjitit@gmail.com
            </a>
          </div>
          
          {/* Phone */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <div className="p-4 bg-green-100 rounded-full text-green-600 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Phone className="h-8 w-8" />
            </div>
            <a
              href="tel:+919100833767"
              className="text-lg hover:text-green-600 transition-colors duration-200 text-center"
            >
              +91 9100833767
            </a>
          </div>
          
          {/* LinkedIn */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <div className="p-4 bg-[#0077b5]/10 rounded-full text-[#0077b5] mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Linkedin className="h-8 w-8" />
            </div>
            <a
              href="https://www.linkedin.com/in/anilvjit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#0077b5] transition-colors duration-200 text-center"
            >
              LinkedIn
            </a>
          </div>
          
         {/* GitHub */}
<div className="flex flex-col items-center w-full max-w-xs">
  <div className="p-4 bg-black/10 rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.17c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.996.107-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.381 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.839 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  </div>
  <a
    href="https://github.com/urz-anil"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg hover:text-red-500 transition-colors duration-200 text-center"
  >
    GitHub
  </a>
</div>

          
         {/* Instagram */}
<div className="flex flex-col items-center w-full max-w-xs sm:col-span-2 mt-4">
  <div className="p-4 bg-pink-500/10 rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#E1306C" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5a4.26 4.26 0 0 0 4.25-4.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm4.88-.88a1.12 1.12 0 1 1 0 2.24a1.12 1.12 0 0 1 0-2.24z" />
    </svg>
  </div>
  <a
    href="https://instagram.com/urz_anil"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg hover:text-pink-500 transition-colors duration-200 text-center"
  >
    Instagram
  </a>
</div>

        </div>
      </div>
    </section>
  );
} 