import { useEffect, useState } from "react";

const useOnScreen = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
export default useOnScreen;
