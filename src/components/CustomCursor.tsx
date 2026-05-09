import { useEffect, useRef } from "react";

/**
 * Custom cursor — dot + lagging ring.
 * Only activates on pointer:fine (mouse) devices; no-ops on touch.
 */
const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rafId = 0;
    let visible = false;

    // Snap dot directly to cursor
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
      if (!visible) {
        visible = true;
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity  = "0";
      ring.style.opacity = "0";
    };

    // Detect hovering over interactive elements
    const isInteractive = (el: Element | null) =>
      !!el?.closest(
        "a, button, [role='button'], input, textarea, select, label, [tabindex='0']"
      );

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        dot.classList.add("c-hover");
        ring.classList.add("c-hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        dot.classList.remove("c-hover");
        ring.classList.remove("c-hover");
      }
    };

    // Ring trails cursor with spring lerp
    const LERP = 0.11;
    const loop = () => {
      rx += (mx - rx) * LERP;
      ry += (my - ry) * LERP;
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  aria-hidden className="c-dot"  />
      <div ref={ringRef} aria-hidden className="c-ring" />
    </>
  );
};

export default CustomCursor;
