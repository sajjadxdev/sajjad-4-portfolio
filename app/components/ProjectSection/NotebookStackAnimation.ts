"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NotebookStackAnimation(
    stackRef: React.RefObject<HTMLDivElement | null>,
    isMobile: boolean
) {
    useLayoutEffect(() => {
        // Skip animation on mobile — we use the swiper there
        if (isMobile || !stackRef.current) return;

        const wrapper = stackRef.current;
        const cards = gsap.utils.toArray<HTMLElement>(
            wrapper.querySelectorAll(".notebook-card")
        );

        const total = cards.length;
        const PEEK_Y = 30;
        const SCALE_STEP = 0;

        const ctx = gsap.context(() => {
            cards.forEach((card, i) => {
                gsap.set(card, {
                    y: i * PEEK_Y,
                    scale: 1 - i * SCALE_STEP,
                    zIndex: total - i,
                    transformOrigin: "center top",
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top top",
                    end: `+=${(total - 1) * 900}`,
                    scrub: 1.2,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    refreshPriority: -1,
                },
            });

            for (let i = 0; i < total - 1; i++) {
                const current = cards[i];

                tl.to(current, {
                    y: -120,
                    scale: 0.96,
                    duration: 0.35,
                    ease: "power2.in",
                }, i);

                tl.to(current, {
                    y: (total - 1) * PEEK_Y,
                    scale: 1 - (total - 1) * SCALE_STEP,
                    zIndex: 1,
                    duration: 0.6,
                    ease: "power3.out",
                }, i + 0.35);

                cards.forEach((card, j) => {
                    const newPos = (j - i - 1 + total) % total;
                    tl.to(card, {
                        y: newPos * PEEK_Y,
                        scale: 1 - newPos * SCALE_STEP,
                        zIndex: total - newPos,
                        duration: 0.6,
                        ease: "power3.out",
                    }, i + 0.35);
                });
            }
        }, wrapper);

        const t1 = setTimeout(() => ScrollTrigger.refresh(), 200);
        const t2 = setTimeout(() => ScrollTrigger.refresh(), 600);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            ctx.revert();
        };
    }, [stackRef, isMobile]);
}