"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !subRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.4, ease: "power2.inOut" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1
        ref={headingRef}
        className="text-center text-4xl font-semibold tracking-tight md:text-6xl"
      >
        White Rose Capital
      </h1>
      <p
        ref={subRef}
        className="mt-4 max-w-md text-center text-slate-400"
      >
        Next.js · Tailwind · GSAP
      </p>
      <div
        ref={lineRef}
        className="origin-left mt-8 h-px w-24 bg-rose-500"
      />
    </section>
  );
}
