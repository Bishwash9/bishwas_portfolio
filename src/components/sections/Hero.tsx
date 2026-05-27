"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);
  const peachRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    // Title
    gsap.from(".hero-title-line", {
      y: "110%",
      duration: 1.4,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2,
    });

    // Subtitle
    gsap.from(".hero-subtext", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
      delay: 0.8,
    });

    //socials
    gsap.from(".social-links", {
      opacity: 0,
      y:20,
      duration: 1,
      ease: "power3.out",
      delay: 1.0,
      stagger: 0.1,
    })

    // Shapes — referenced directly, not via children
    gsap.from([circleRef.current, diamondRef.current, peachRef.current], {
      scale: 0,
      opacity: 0,
      duration: 1.6,
      stagger: 0.12,
      ease: "elastic.out(1, 0.75)",
      delay: 0.5,
    });

    // Line draws left → right
    gsap.from(".hero-line", {
      scaleX: 0,
      duration: 1.6,
      ease: "power3.out",
      delay: 2.0,
      transformOrigin: "left center",
    });

    // Text fades in after line
    gsap.from(".hero-line-text", {
      opacity: 0,
      x: -10,
      duration: 0.8,
      ease: "power3.out",
      delay: 2.3,
    });

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const xNorm = e.clientX / window.innerWidth - 0.5;
      const yNorm = e.clientY / window.innerHeight - 0.5;
      gsap.to(circleRef.current, { x: xNorm * 40, y: yNorm * 40, duration: 0.8 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: container });

  return (
    <>
      <section
        ref={container}
        className="relative min-h-screen flex flex-col justify-start items-start pt-36 pl-20 md:pl-28 pr-8 md:pr-16 z-10 overflow-hidden select-none"
      >

        {/* ── SHAPES (individual refs, not children array) ── */}
        <div className="absolute inset-0 pointer-events-none z-0">

          {/* Blue circle */}
          <div
            ref={circleRef}
            className="absolute rounded-full bg-(--accent-blue) opacity-95"
            style={{ top: "-10%", right: "-10%", width: "42vw", height: "42vw" }}
          />

          {/* Diamond */}
          <div
            ref={diamondRef}
            className="absolute bg-[#1d232a]"
            style={{
              top: "50%",
              left: "14%",
              width: "clamp(130px, 15vw, 190px)",
              height: "clamp(130px, 15vw, 190px)",
              transform: "rotate(45deg)",
            }}
          />
          

          {/* Peach semi-circle */}
          <div
            ref={peachRef}
            className="absolute bg-(--accent-peach)"
            style={{ top: "12%", left: "-2.5%", width: "16vw", height: "16vw", maxWidth: 100, maxHeight: 300, borderRadius: "0 100px 100px 0" }}
          />

        </div>


        <div
          className="absolute z-10 text-right"
          style={{ top: "10%", right: "2%", width: "28vw", maxWidth: "320px" }}
        >
          
          <p className="text-[#f0ede8] text-[11px] leading-[1.9] tracking-[0.12em] uppercase font-sans opacity-40 mb-3">
            Vol. 01 — Creative Dev
          </p>
          <p className="text-[#f0ede8] font-display leading-[1.6] opacity-90"
            style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)" }}>
            &#8220;Creativity is intelligence<br />having fun — where logic<br />meets imagination.&#8221;
          </p>
          <br />
          
          <svg width="98" height="78" viewBox="0 0 98 78" className="mx-auto mb-3 opacity-20">
            <circle cx="4" cy="4" r="1.4" fill="#f0ede8" /><circle cx="14" cy="4" r="0.9" fill="#f0ede8" /><circle cx="24" cy="4" r="1.1" fill="#f0ede8" /><circle cx="34" cy="4" r="1.4" fill="#f0ede8" /><circle cx="44" cy="4" r="0.9" fill="#f0ede8" /><circle cx="54" cy="4" r="1.1" fill="#f0ede8" /><circle cx="64" cy="4" r="1.4" fill="#f0ede8" /><circle cx="74" cy="4" r="0.9" fill="#f0ede8" /><circle cx="84" cy="4" r="1.1" fill="#f0ede8" /><circle cx="94" cy="4" r="1.4" fill="#f0ede8" />
            <circle cx="4" cy="14" r="0.9" fill="#f0ede8" /><circle cx="14" cy="14" r="1.1" fill="#f0ede8" /><circle cx="24" cy="14" r="1.4" fill="#f0ede8" /><circle cx="34" cy="14" r="0.9" fill="#f0ede8" /><circle cx="44" cy="14" r="1.1" fill="#f0ede8" /><circle cx="54" cy="14" r="1.4" fill="#f0ede8" /><circle cx="64" cy="14" r="0.9" fill="#f0ede8" /><circle cx="74" cy="14" r="1.1" fill="#f0ede8" /><circle cx="84" cy="14" r="1.4" fill="#f0ede8" /><circle cx="94" cy="14" r="0.9" fill="#f0ede8" />
            <circle cx="4" cy="24" r="1.1" fill="#f0ede8" /><circle cx="14" cy="24" r="1.4" fill="#f0ede8" /><circle cx="24" cy="24" r="0.9" fill="#f0ede8" /><circle cx="34" cy="24" r="1.1" fill="#f0ede8" /><circle cx="44" cy="24" r="1.4" fill="#f0ede8" /><circle cx="54" cy="24" r="0.9" fill="#f0ede8" /><circle cx="64" cy="24" r="1.1" fill="#f0ede8" /><circle cx="74" cy="24" r="1.4" fill="#f0ede8" /><circle cx="84" cy="24" r="0.9" fill="#f0ede8" /><circle cx="94" cy="24" r="1.1" fill="#f0ede8" />
            <circle cx="4" cy="34" r="1.4" fill="#f0ede8" /><circle cx="14" cy="34" r="0.9" fill="#f0ede8" /><circle cx="24" cy="34" r="1.1" fill="#f0ede8" /><circle cx="34" cy="34" r="1.4" fill="#f0ede8" /><circle cx="44" cy="34" r="0.9" fill="#f0ede8" /><circle cx="54" cy="34" r="1.1" fill="#f0ede8" /><circle cx="64" cy="34" r="1.4" fill="#f0ede8" /><circle cx="74" cy="34" r="0.9" fill="#f0ede8" />
            <circle cx="34" cy="44" r="0.9" fill="#f0ede8" /><circle cx="44" cy="44" r="1.1" fill="#f0ede8" /><circle cx="54" cy="44" r="1.4" fill="#f0ede8" /><circle cx="64" cy="44" r="0.9" fill="#f0ede8" /><circle cx="74" cy="44" r="1.1" fill="#f0ede8" /><circle cx="84" cy="44" r="1.4" fill="#f0ede8" /><circle cx="94" cy="44" r="0.9" fill="#f0ede8" />
            <circle cx="4" cy="54" r="1.1" fill="#f0ede8" /><circle cx="14" cy="54" r="1.4" fill="#f0ede8" /><circle cx="24" cy="54" r="0.9" fill="#f0ede8" /><circle cx="34" cy="54" r="1.1" fill="#f0ede8" /><circle cx="44" cy="54" r="1.4" fill="#f0ede8" /><circle cx="54" cy="54" r="0.9" fill="#f0ede8" /><circle cx="64" cy="54" r="1.1" fill="#f0ede8" /><circle cx="74" cy="54" r="1.4" fill="#f0ede8" /><circle cx="84" cy="54" r="0.9" fill="#f0ede8" /><circle cx="94" cy="54" r="1.1" fill="#f0ede8" />
            <circle cx="4" cy="64" r="1.4" fill="#f0ede8" /><circle cx="14" cy="64" r="0.9" fill="#f0ede8" /><circle cx="24" cy="64" r="1.1" fill="#f0ede8" /><circle cx="34" cy="64" r="1.4" fill="#f0ede8" /><circle cx="44" cy="64" r="0.9" fill="#f0ede8" /><circle cx="54" cy="64" r="1.1" fill="#f0ede8" /><circle cx="64" cy="64" r="1.4" fill="#f0ede8" /><circle cx="74" cy="64" r="0.9" fill="#f0ede8" /><circle cx="84" cy="64" r="1.1" fill="#f0ede8" /><circle cx="94" cy="64" r="1.4" fill="#f0ede8" />
            <circle cx="4" cy="74" r="0.9" fill="#f0ede8" /><circle cx="14" cy="74" r="1.1" fill="#f0ede8" /><circle cx="24" cy="74" r="1.4" fill="#f0ede8" /><circle cx="34" cy="74" r="0.9" fill="#f0ede8" /><circle cx="44" cy="74" r="1.1" fill="#f0ede8" />
          </svg>
          
          <p className="text-[#f0ede8] font-display leading-[1.6] opacity-90"
            style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)" }}>
            &#8220;Building meaningful digital products.&#8221;
          </p>
          <p className="text-[#f0ede8] text-[10px] tracking-[0.25em] uppercase font-sans opacity-50">
            Est. 2024 — Kathmandu, Nepal
          </p>
        </div>
   
        <div
          className="absolute z-10"
          style={{ top: "calc(52.5% + clamp(130px, 15vw, 190px) + 20px)", left: 0, right: 0 }}
        >
          

          <div
            className="hero-line"
            style={{
              width: "calc(25% + clamp(130px, 15vw, 190px) * 0.5 + 20px)",
              height: "1px",
              opacity: 0.3,
              background: "var(--foreground)",
              transformOrigin: "left center",
            }}
          />

          <p
            className="hero-line-text absolute text-[10px] tracking-[0.18em] leading-[1.9] uppercase text-gray-800 font-sans"
            style={{ top: "-27px", left: "calc(28% + clamp(130px, 15vw, 190px) * 0.5 + 28px)" }}
          >
            I help companies, brands<br />and entrepreneurs develop<br />any digital products and<br />achieve their goals.
          </p>
        </div>


        <div className="social-links top-12 absolute left-12 md:left-24 flex flex-col items-start gap-1 z-20">
          <a href="#" className="text-[12px] tracking-[0.2em] font-light text-(--foreground) hover:text-(--accent-blue) transition-colors w-full text-center">LINKEDIN</a>
          <a href="#" className="text-[12px] tracking-[0.2em] font-light  bg-(--accent-blue) text-(--background) transition-colors w-full text-center">TWITTER</a>
          <a href="#" className="text-[12px] tracking-[0.2em] font-light text-(--foreground) hover:text-(--accent-blue) transition-colors w-full text-center">INSTAGRAM</a>
        </div>


        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4" style={{ marginTop: "-50vh" }}>
          <div className="overflow-hidden mb-1">
            <h1
              className="hero-title-line font-display font-thin uppercase tracking-[0.12em] text-(--foreground)"
              style={{ fontSize: "clamp(2.8rem, 7vw, 9rem)", lineHeight: 1 }}
            >
              Bishwas
            </h1>
          </div>
          <p className="hero-subtext mt-6 text-[10px] tracking-[0.28em] uppercase text-gray-700 font-sans">
            Full-Stack Developer, based in Kathmandu, Nepal.
          </p>
        </div>

      </section>
    </>
  );
}