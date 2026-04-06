"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NotebookStackAnimation(
    stackRef: React.RefObject<HTMLDivElement | null>
) {
    useLayoutEffect(() => {
        if (!stackRef.current) return;

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
                    // ✅ KEY FIX: "top bottom" of viewport means trigger fires
                    // as soon as this element enters — but pin only activates at top.
                    // Using start:"top top" is correct BUT we must let ScrollTrigger
                    // calculate positions AFTER the Solutions pinned section is fully
                    // registered. We do this by delaying refresh below.
                    start: "top top",
                    end: `+=${(total - 1) * 900}`,
                    scrub: 1.2,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    // ✅ onRefresh recalculates start position correctly
                    // after Solutions' massive pinSpacing is accounted for
                    refreshPriority: -1, // run AFTER Solutions ST (which has default priority 0)
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

        // ✅ Double refresh — first at 200ms to let Solutions ST register,
        // then at 600ms after fonts/images load to recalculate all positions
        const t1 = setTimeout(() => ScrollTrigger.refresh(), 200);
        const t2 = setTimeout(() => ScrollTrigger.refresh(), 600);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            ctx.revert();
        };
    }, [stackRef]);
}



// "use client";
// import { useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function NotebookStackAnimation(
//     stackRef: React.RefObject<HTMLDivElement | null>
// ) {
//     useLayoutEffect(() => {
//         if (!stackRef.current) return;

//         const wrapper = stackRef.current;
//         const cards = wrapper.querySelectorAll<HTMLElement>(".notebook-card");
//         const totalCards = cards.length;

//         const STACK_GAP = 60;        // vertical spacing
//         const SCALE_STEP = 0.06;     // stronger depth scaling
//         const ROTATE_STEP = 2;       // slight rotation

//         const ctx = gsap.context(() => {
//             // Add perspective to parent
//             gsap.set(wrapper, {
//                 perspective: 1200,
//             });

//             // Initial stacked layout
//             cards.forEach((card, i) => {
//                 gsap.set(card, {
//                     y: i * STACK_GAP,
//                     scale: 1 - i * SCALE_STEP,
//                     rotateZ: i % 2 === 0 ? -ROTATE_STEP : ROTATE_STEP,
//                     zIndex: totalCards - i,
//                     transformOrigin: "center top",
//                 });
//             });

//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: wrapper,
//                     start: "top top",
//                     end: `+=${totalCards * 800}`,
//                     scrub: 1.2,
//                     pin: true,
//                     anticipatePin: 1,
//                     refreshPriority: -1,
//                     invalidateOnRefresh: true,
//                 },
//             });

//             cards.forEach((card, i) => {
//                 if (i === totalCards - 1) return;

//                 const stepStart = i * 1;

//                 // 1️⃣ Lift card
//                 tl.to(
//                     card,
//                     {
//                         y: -120,
//                         scale: 1,
//                         rotateZ: 0,
//                         ease: "power2.out",
//                         duration: 0.35,
//                     },
//                     stepStart
//                 );

//                 // 2️⃣ Send to back
//                 tl.to(
//                     card,
//                     {
//                         y: (totalCards - 1) * STACK_GAP,
//                         scale: 1 - (totalCards - 1) * SCALE_STEP,
//                         rotateZ:
//                             (totalCards - 1) % 2 === 0 ? -ROTATE_STEP : ROTATE_STEP,
//                         zIndex: 1,
//                         ease: "power2.inOut",
//                         duration: 0.6,
//                     },
//                     stepStart + 0.35
//                 );

//                 // 3️⃣ Shift others forward
//                 for (let j = i + 1; j < totalCards; j++) {
//                     const newPos = j - i - 1;

//                     tl.to(
//                         cards[j],
//                         {
//                             y: newPos * STACK_GAP,
//                             scale: 1 - newPos * SCALE_STEP,
//                             rotateZ: newPos % 2 === 0 ? -ROTATE_STEP : ROTATE_STEP,
//                             zIndex: totalCards - newPos,
//                             ease: "power2.inOut",
//                             duration: 0.6,
//                         },
//                         stepStart + 0.35
//                     );
//                 }
//             });
//         }, wrapper);

//         const timeout = setTimeout(() => {
//             ScrollTrigger.refresh();
//         }, 150);

//         return () => {
//             clearTimeout(timeout);
//             ctx.revert();
//         };
//     }, [stackRef]);
// }