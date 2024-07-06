import { useEffect, useState, RefObject } from 'react';

const useInView = (existingRef: RefObject<HTMLDivElement> | undefined, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!existingRef?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    observer.observe(existingRef.current);

    return () => {
      if (existingRef.current) {
        observer.unobserve(existingRef.current);
      }
    };
  }, [existingRef, threshold]);

  return isInView;
};

export default useInView;

