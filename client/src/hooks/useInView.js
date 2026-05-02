import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that returns [ref, isVisible].
 * Element becomes visible once it enters the viewport (one-shot).
 * @param {number} threshold - IntersectionObserver threshold (0–1)
 */
export default function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
