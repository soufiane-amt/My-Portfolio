import { RefObject, useEffect, useState } from "react";

const useInViewOnce = (existingRef: RefObject<HTMLDivElement> | undefined, threshold = 0.1) => {
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      if (!existingRef?.current) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!isInView)
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
    });
  
    return isInView;
  };
  
  export default useInViewOnce;
  