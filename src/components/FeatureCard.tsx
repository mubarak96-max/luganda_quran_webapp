"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

export default function FeatureCard({ children, className = "feature-card" }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      const card = cardRef.current;
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "all 0.6s ease-out";
      observer.observe(card);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}
