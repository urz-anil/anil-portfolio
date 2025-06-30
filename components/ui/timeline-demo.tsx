import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024 Sep - Feb 2025",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">
            CYBER SECURITY (Web Application VAPT), Intern at Supraja Technologies
          </h4>
          <p className="mb-4 text-sm text-muted-foreground">
            • Conducted 10+ simulated penetration tests using Metasploit, Nmap, and Wireshark<br />
            • Identified and documented 15+ system vulnerabilities with risk ratings<br />
            • Delivered weekly security reports and collaborated in mitigation planning
          </p>
        </div>
      ),
    },
    {
      title: "2024 Aug - Sep",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">
            Web Development Intern at CodSoft
          </h4>
          <p className="mb-4 text-sm text-muted-foreground">
            • Built and styled 3 mobile-responsive web pages using HTML, CSS, and JavaScript<br />
            • Improved page load speed by 30% by optimizing assets and structure<br />
            • Independently managed all development and version control tasks
          </p>
        </div>
      ),
    },
    {
      title: "2024 Apr - Jun",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">
            Android Developer Virtual Internship at Google
          </h4>
          <p className="mb-4 text-sm text-muted-foreground">
            • Designed 4+ Android UI screens and integrated RESTful APIs<br />
            • Worked in Agile sprints, delivering functional features on a weekly basis<br />
            • Participated in code reviews and bug fixes for team-submitted modules
          </p>
        </div>
      ),
    },

    // Centered section header
    {
      title: "",
      content: (
        <div className="text-center my-6">
          <h1 className="text-4xl font-bold">My Educational Journey</h1>
        </div>
      ),
    },

    {
      title: "2022 - 2025",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">
            B.Tech in Information Technology
          </h4>
          <p className="mb-4 text-sm text-muted-foreground">
            Graduated from Vidya Jyothi Institute of Technology, Hyderabad — a reputed engineering institution in Telangana, committed to shaping future-ready engineers since 1998.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h5 className="font-medium mb-2">VJIT 🎓</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Vidya Jyothi Institute of Technology – Powering Telangana’s Future Through Engineering Excellence.
              </p>
              <a
                href="https://vjit.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Visit College Website
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018 - 2021",
      content: (
        <div>
          <h4 className="text-lg font-semibold mb-2">
            Polytechnic in Electrical and Electronics Engineering
          </h4>
          <p className="mb-4 text-sm text-muted-foreground">
            Graduated from Government Polytechnic College, Cheriyal. Developed a strong foundation in Electrical and Electronics principles.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h5 className="font-medium mb-2">GPT Cheriyal</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Government Polytechnic College, Cheriyal. Fostering Technical Excellence Across Telangana.
              </p>
              <a
                href="https://dte.telangana.gov.in/collegeInformation?id=630"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Visit College Website
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
