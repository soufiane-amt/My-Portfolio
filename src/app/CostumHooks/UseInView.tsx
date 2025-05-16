import { useEffect, useState, RefObject } from 'react';

const useInView = (existingRef: RefObject<HTMLDivElement> | undefined, threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!existingRef?.current) return;

    const target = existingRef.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    observer.observe(target); 
    return () => {
      observer.unobserve(target);
    };
  }, [existingRef, threshold]);

  return isInView;
};

export default useInView;
