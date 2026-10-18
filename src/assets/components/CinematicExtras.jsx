import { useEffect, useRef, useState } from "react";

const CinematicExtras = () => {
  const cursorRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    // Cursor follow
    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMove);

    // Scroll progress
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollPct(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cin-cursor" />
      <div className="cin-scroll-bar" style={{ width: `${scrollPct}%` }} />
    </>
  );
};

export default CinematicExtras;
