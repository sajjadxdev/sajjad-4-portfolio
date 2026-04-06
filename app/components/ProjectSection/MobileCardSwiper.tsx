"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import NotebookGlassCard from "./NoteBookCard";
import type { Project } from "./Projects";

type Props = {
    projects: Project[];
};

export default function MobileCardSwiper({ projects }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const startX = useRef(0);
    const startY = useRef(0);
    const isDraggingRef = useRef(false);
    const isHorizontalSwipe = useRef<boolean | null>(null);

    const SWIPE_THRESHOLD = 60;
    const total = projects.length;

    const goTo = useCallback((index: number) => {
        setCurrentIndex(Math.max(0, Math.min(total - 1, index)));
        setDragOffset(0);
    }, [total]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
        isDraggingRef.current = true;
        isHorizontalSwipe.current = null;
        setIsDragging(true);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDraggingRef.current) return;

        const diffX = e.touches[0].clientX - startX.current;
        const diffY = e.touches[0].clientY - startY.current;

        // Determine if this is a horizontal or vertical swipe
        if (isHorizontalSwipe.current === null) {
            if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
                isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY);
            }
        }

        if (isHorizontalSwipe.current) {
            e.preventDefault();
            // Add resistance at edges
            let offset = diffX;
            if ((currentIndex === 0 && diffX > 0) || (currentIndex === total - 1 && diffX < 0)) {
                offset = diffX * 0.3;
            }
            setDragOffset(offset);
        }
    }, [currentIndex, total]);

    const handleTouchEnd = useCallback(() => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);

        if (isHorizontalSwipe.current) {
            if (dragOffset < -SWIPE_THRESHOLD && currentIndex < total - 1) {
                goTo(currentIndex + 1);
            } else if (dragOffset > SWIPE_THRESHOLD && currentIndex > 0) {
                goTo(currentIndex - 1);
            } else {
                setDragOffset(0);
            }
        } else {
            setDragOffset(0);
        }
    }, [dragOffset, currentIndex, total, goTo]);

    // Mouse events for desktop testing
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        startX.current = e.clientX;
        isDraggingRef.current = true;
        isHorizontalSwipe.current = true;
        setIsDragging(true);
        e.preventDefault();
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDraggingRef.current) return;
        const diffX = e.clientX - startX.current;
        let offset = diffX;
        if ((currentIndex === 0 && diffX > 0) || (currentIndex === total - 1 && diffX < 0)) {
            offset = diffX * 0.3;
        }
        setDragOffset(offset);
    }, [currentIndex, total]);

    const handleMouseUp = useCallback(() => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);

        if (dragOffset < -SWIPE_THRESHOLD && currentIndex < total - 1) {
            goTo(currentIndex + 1);
        } else if (dragOffset > SWIPE_THRESHOLD && currentIndex > 0) {
            goTo(currentIndex - 1);
        } else {
            setDragOffset(0);
        }
    }, [dragOffset, currentIndex, total, goTo]);

    // Auto-play
    useEffect(() => {
        if (isDragging) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
        }, 6000);
        return () => clearInterval(interval);
    }, [isDragging, total]);

    return (
        <div className="mobile-swiper-container w-full select-none">
            {/* Swipeable area */}
            <div
                ref={containerRef}
                className="relative overflow-hidden touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
                <div
                    className="flex"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                        transition: isDragging ? "none" : "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        willChange: "transform",
                    }}
                >
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="w-full flex-shrink-0 px-1"
                            style={{
                                transform: `scale(${i === currentIndex ? 1 : 0.94})`,
                                opacity: i === currentIndex ? 1 : 0.5,
                                transition: isDragging ? "none" : "transform 0.45s ease, opacity 0.45s ease",
                            }}
                        >
                            <NotebookGlassCard project={project} index={i} isMobile />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="transition-all duration-300 rounded-full"
                        style={{
                            width: i === currentIndex ? 28 : 8,
                            height: 8,
                            background: i === currentIndex
                                ? (projects[i].accent || "rgba(139,92,246,0.8)")
                                : "var(--border)",
                        }}
                        aria-label={`Go to project ${i + 1}`}
                    />
                ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-3">
                <span className="text-xs text-muted-foreground font-mono">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
}
