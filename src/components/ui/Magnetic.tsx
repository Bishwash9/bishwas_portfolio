"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticProps {
    children: React.ReactElement;
    range?: number;
    speed?: number;
}

export default function Magnetic({children, range = 35, speed = 0.35}: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const el = ref.current;
        if(!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            //lets check if mouse is within range
            const distance = Math.hypot(x,y);
            if(distance < range * 2.5){
                gsap.to(el, {
                    x: x * speed,
                    y: y * speed,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }else{
                handleMouseLeave();
            }
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.4)"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);


        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            el?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, {scope: ref});

    return (
        <div ref = {ref} className="inline-block ">
            {children}
        </div>
    )
}