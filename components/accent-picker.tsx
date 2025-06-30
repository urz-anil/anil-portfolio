"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

type AccentColor = {
  name: string;
  value: string;
};

const accentColors: AccentColor[] = [
  { name: "Slate", value: "240 5.9% 10%" },
  { name: "Red", value: "0 84.2% 60.2%" },
  { name: "Orange", value: "24.6 95% 53.1%" },
  { name: "Green", value: "142.1 76.2% 36.3%" },
  { name: "Blue", value: "221.2 83.2% 53.3%" },
  { name: "Purple", value: "262.1 83.3% 57.8%" },
  { name: "Pink", value: "336.8 91.4% 70%" },
];

export function AccentPicker() {
  const [isOpen, setIsOpen] = useState(false);

  const setAccentColor = (color: string) => {
    document.documentElement.style.setProperty("--color-accent", color);
    document.documentElement.style.setProperty("--color-accent-rgb", color.replace(/ /g, ', '));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        className="rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="h-4 w-4 rounded-full bg-accent"></span>
        <span className="sr-only">Change accent color</span>
      </Button>
      
      {isOpen && (
        <div 
          className="absolute bottom-12 right-0 flex flex-col gap-2 rounded-md border p-2 shadow-md"
          style={{ backgroundColor: 'hsl(var(--background))' }}
        >
          <h4 className="mb-1 px-2 text-sm font-medium">Accent Color</h4>
          <div className="flex flex-wrap gap-1">
            {accentColors.map((color) => (
              <button
                key={color.name}
                className="h-6 w-6 rounded-full border"
                style={{
                  backgroundColor: `hsl(${color.value})`,
                }}
                onClick={() => setAccentColor(color.value)}
                title={color.name}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 