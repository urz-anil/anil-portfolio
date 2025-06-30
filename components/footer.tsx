"use client";

import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-col items-center">
        <p className="text-sm text-muted-foreground mb-2">
          &copy; {currentYear} Anil Rachamalla. All rights reserved.
        </p>
        <div className="relative h-1 w-24 mt-4">
          <div className="absolute inset-0 bg-accent/30 rounded-full" />
          <div 
            className="absolute h-full bg-accent rounded-full animate-pulse" 
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </footer>
  );
} 