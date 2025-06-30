"use client";

import { Card, CardContent } from "@/components/ui/card";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";

type Skill = {
  name: string;
  icon: string;
  color: string;
};

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", icon: "🐍", color: "bg-green-600" },
  { name: "Java", icon: "☕", color: "bg-red-500" },
  { name: "C", icon: "💻", color: "bg-gray-700" },

  // Web Technologies
  { name: "HTML", icon: "📄", color: "bg-orange-500" },
  { name: "CSS", icon: "🎨", color: "bg-blue-500" },
  { name: "JavaScript", icon: "🟨", color: "bg-yellow-400" },
  { name: "React", icon: "⚛️", color: "bg-blue-300" },
  { name: "TypeScript", icon: "🔷", color: "bg-blue-500" },

  // Vulnerability Assessment
  { name: "Vulnerability Assessment", icon: "🔍", color: "bg-red-400" },

  // Security Tools
  { name: "Wireshark", icon: "📡", color: "bg-blue-700" },
  { name: "Metasploit", icon: "💥", color: "bg-red-700" },
  { name: "Nmap", icon: "🌐", color: "bg-green-700" },
  { name: "John the Ripper", icon: "🔐", color: "bg-gray-800" },
  { name: "Splunk", icon: "📊", color: "bg-yellow-600" },
  { name: "QRadar", icon: "🧠", color: "bg-purple-600" },

  // Database
  { name: "MySQL", icon: "🐬", color: "bg-blue-600" },

  // Office Tools
  { name: "Microsoft Word", icon: "📝", color: "bg-blue-400" },
  { name: "Microsoft Excel", icon: "📊", color: "bg-green-500" },
  { name: "Microsoft PowerPoint", icon: "📽️", color: "bg-orange-400" },
];


export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <GridBackgroundDemo />
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
             A IT graduate from VJIT Hyderabad, currently focused on developing a strong foundation in the IT industry.
            </p>
            <p className="text-lg mb-4">
              Driven by a passion for cybersecurity, specializing in vulnerability assessment and securing modern web platforms.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out forwards ${index * 100}ms`,
                  }}
                >
                  <CardContent className="flex items-center p-4">
                    <span className="mr-2 text-xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
} 