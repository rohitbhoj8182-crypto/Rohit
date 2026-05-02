import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function Counter({ end, suffix = '' }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useInView(0.5);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const step = () => {
      const increment = Math.max(1, Math.ceil((end - current) / 14));
      current = Math.min(current + increment, end);
      setVal(current);
      if (current < end) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end]);

  return <span ref={ref}>{val}{suffix}</span>;
}
