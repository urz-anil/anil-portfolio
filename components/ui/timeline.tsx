"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto" ref={containerRef}>
        <h2 className="text-3xl font-bold mb-12 text-center">My Professional Journey</h2>
        <div className="relative" ref={ref}>
          {data.map((item, index) => (
            <div key={index} className="mb-16 md:mb-24 relative">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{item.title}</h3>
                </div>
                <div className="md:w-3/4 md:pl-8 relative">
                  {item.content}
                </div>
              </div>
              {index < data.length - 1 && (
                <div className="absolute left-0 md:left-[25%] top-full h-16 md:h-24 w-0.5 bg-neutral-200 dark:bg-neutral-700 transform -translate-x-1/2 md:translate-x-0"></div>
              )}
            </div>
          ))}

          <motion.div 
            className="absolute left-0 md:left-[25%] top-0 w-0.5 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2 md:translate-x-0"
            style={{ 
              height: heightTransform,
              opacity: opacityTransform
            }}
          />
        </div>
      </div>
    </section>
  );
};
