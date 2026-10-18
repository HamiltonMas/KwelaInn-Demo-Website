import { useEffect } from "react";

/**
 * Automatically adds .in-view to any element with class "cin-reveal*"
 * when it enters the viewport.
 *
 * Accepts a `pathname` argument so it re-runs on route changes,
 * which fixes blank pages when navigating back to a route.
 */
const useScrollReveal = (pathname) => {
  useEffect(() => {
    // Small delay ensures React Router has painted the new route
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(
        ".cin-reveal, .cin-reveal-left, .cin-reveal-right, .cin-reveal-zoom",
      );

      if (!els.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );

      els.forEach((el) => observer.observe(el));

      // If any element is already visible above the fold, reveal it immediately
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        }
      });

      // Store observer so we can disconnect in the cleanup
      els._observer = observer;
    }, 50);

    return () => {
      clearTimeout(timer);
      const els = document.querySelectorAll(
        ".cin-reveal, .cin-reveal-left, .cin-reveal-right, .cin-reveal-zoom",
      );
      if (els._observer) {
        els._observer.disconnect();
      }
    };
  }, [pathname]);
};

export default useScrollReveal;
