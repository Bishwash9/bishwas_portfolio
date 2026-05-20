"use client";

import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoadingScreen({onComplete}: {onComplete: () => void}) {
    const [count, setCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLHeadingElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);

    //refs for shapes
    const circleOutlineRef = useRef<HTMLDivElement>(null);
    const circleSolidRef = useRef<HTMLDivElement>(null);
    const squareRef = useRef<HTMLDivElement>(null);
    const diamondRef = useRef<HTMLDivElement>(null);
    const dotGridRef = useRef<HTMLDivElement>(null);
    const smallCircleRef = useRef<HTMLDivElement>(null);
    const triangleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obj = { value: 0 };
        gsap.to(obj, {
            value: 100,
            duration:2.2,
            ease: "power2.out",
            onUpdate: () => {
                setCount(Math.round(obj.value));
            },
        });
    }, []); // Run once on mount

    useGSAP(() => {
        const tl = gsap.timeline();

        //set initial hidden state
        gsap.set(
      [
        circleOutlineRef.current,
        circleSolidRef.current,
        squareRef.current,
        diamondRef.current,
        dotGridRef.current,
        smallCircleRef.current,
        triangleRef.current,
      ],
      { opacity: 0, scale: 0.4 }
    );

        //staggered intro 
        tl.to(circleOutlineRef.current,{opacity:1, scale:1, duration:0.9, ease:"back.out(1.4)"}, 0)
          .to(circleSolidRef.current,{opacity:1, scale:1, duration:0.8, ease:"back.out(1.6)"}, 0.1)
          .to(squareRef.current,{opacity:1, scale:1, duration:0.8, ease:"back.out(1.5)", rotation: 0}, 0.2)
          .to(diamondRef.current,{opacity:1, scale:1, duration:0.8, ease:"back.out(2)"}, 0.3)
          .to(smallCircleRef.current,{opacity:1, scale:1, duration: 0.8, ease: "back.out(1.8)"}, 0.35)
          .to(dotGridRef.current,{opacity:1, scale:1, duration:0.8, ease:"power2.out"}, 0.45)
          .to(triangleRef.current,{opacity:1, scale:1, duration:0.8, ease:"back.out(1.3)"}, 0.5)

        
          gsap.to(circleOutlineRef.current,{
            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none",
          });

          gsap.to(squareRef.current,{
            rotation: "=+90",
            duration: 4,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true,
          });

          gsap.to(diamondRef.current,{
              y: -14,
              duration: 2.2,
              repeat: -1,
              ease: "sine.inOut",
              yoyo: true,
          });

          gsap.to(smallCircleRef.current, {
            y: 10,
            x: -8,
            duration: 1.8,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true,
          });

          gsap.to(circleSolidRef.current,{
            scale: 1.06,
            duration: 3,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true,
          });

          gsap.to(triangleRef.current,{
             y: -10,
             rotation: "+=8",
             duration: 2.8,
             repeat: -1,
             ease: "sine.inOut",
             yoyo: true
          });
    }, []); // Run once on mount

    useGSAP(() => {

        if(count === 100){
         const tl = gsap.timeline({onComplete: onComplete});
        

         tl.to([countRef.current, labelRef.current], {
            opacity: 0,
            y: -30,
            duration: 0.45,
            ease: "power2.in",
            stagger: 0.05,
      });
 
      // Shapes scatter outward
      tl.to(
        circleOutlineRef.current,
        { x: -300, y: -250, opacity: 0, scale: 0.2, duration: 0.8, ease: "power3.in" },
        "<0.05"
      );
      tl.to(
        circleSolidRef.current,
        { x: 260, y: -200, opacity: 0, scale: 0.1, duration: 0.75, ease: "power3.in" },
        "<0.05"
      );
      tl.to(
        squareRef.current,
        { x: -220, y: 280, opacity: 0, scale: 0.15, rotation: 180, duration: 0.8, ease: "power3.in" },
        "<0.05"
      );
      tl.to(
        diamondRef.current,
        { x: 300, y: 220, opacity: 0, scale: 0.1, duration: 0.7, ease: "power3.in" },
        "<0.05"
      );
      tl.to(
        smallCircleRef.current,
        { x: 180, y: -320, opacity: 0, scale: 0.05, duration: 0.65, ease: "power3.in" },
        "<0.05"
      );
      tl.to(
        dotGridRef.current,
        { x: -260, y: 180, opacity: 0, scale: 0.3, duration: 0.7, ease: "power3.in" },
        "<0.05"
      );
      tl.to(
        triangleRef.current,
        { x: -240, y: 300, opacity: 0, scale: 0.1, rotation: -90, duration: 0.75, ease: "power3.in" },
        "<0.05"
      );

        //slide up transiton
        tl.to(containerRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
        }, "-=0.5");
        }
    }, [count, onComplete]); //run when count changes

    return (
        <div 
        ref={containerRef}
        style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}
        className="fixed inset-0 z-50 bg-[#1c1b19] flex items-center justify-center overflow-hidden"
         >

           
      <div
        ref={circleOutlineRef}
        className="absolute"
        style={{
          top: "6%",
          right: "8%",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "2px solid rgba(244,243,239,0.18)",
        }}
      />
 
    
      <div
        ref={circleSolidRef}
        className="absolute"
        style={{
          top: "10%",
          left: "7%",
          width: 110,
          height: 110,
          borderRadius: "50%",
          background: "#4a7fa5",
          opacity: 0.72,
        }}
      />
 
     
      <div
        ref={squareRef}
        className="absolute"
        style={{
          bottom: "14%",
          left: "10%",
          width: 72,
          height: 72,
          background: "rgba(244,243,239,0.12)",
          transform: "rotate(20deg)",
        }}
      />
 
  
      <div
        ref={diamondRef}
        className="absolute"
        style={{
          top: "42%",
          right: "11%",
          width: 46,
          height: 46,
          background: "rgba(244,243,239,0.55)",
          transform: "rotate(45deg)",
        }}
      />
 
      
      <div
        ref={smallCircleRef}
        className="absolute"
        style={{
          bottom: "18%",
          right: "14%",
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#c9856a",
          opacity: 0.8,
        }}
      />
 
     
      <div
        ref={dotGridRef}
        className="absolute grid gap-1.5"
        style={{
          top: "18%",
          left: "5%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 5px)",
          gridTemplateRows: "repeat(5, 5px)",
          gap: "7px",
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(244,243,239,0.3)",
            }}
          />
        ))}
      </div>
 
      
      <div
        ref={triangleRef}
        className="absolute"
        style={{
          bottom: "10%",
          left: "48%",
          width: 0,
          height: 0,
          borderLeft: "28px solid transparent",
          borderRight: "28px solid transparent",
          borderBottom: "50px solid rgba(244,243,239,0.13)",
        }}
      />

        <div className="flex flex-col items-center gap-2 select-none">
        <span
          ref={labelRef}
          className="text-[#f4f3ef] text-[10px] tracking-[0.35em] opacity-40 uppercase"
        >
          Creativity
        </span>
        <h1
          ref={countRef}
          className="text-[16vw] font-bold leading-none text-[#f4f3ef]"
          style={{
          
            letterSpacing: "-0.03em",
          }}
        >
          {String(count).padStart(3, "0")}
        </h1>
      </div>
            
        </div>
    )
}