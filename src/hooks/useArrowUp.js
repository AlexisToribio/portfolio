import { useContext, useEffect, useRef } from 'react';
import ArrowUpContext from '../context/ArrowUpContext.js';

export function useArrowUp() {
  const targetRef = useRef(null);
  const { isVisible, setIsVisible } = useContext(ArrowUpContext);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setIsVisible(false) : setIsVisible(true);
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, [setIsVisible]);

  return { targetRef, isVisible, setIsVisible };
}
