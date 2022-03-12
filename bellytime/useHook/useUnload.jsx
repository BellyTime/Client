import { useRef, useEffect } from "react";

export const useUnload = (fn) => {
  const cb = useRef(fn);
  

  useEffect(() => {
    const onUnload = cb.current;
    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [cb]);
};
//https://www.30secondsofcode.org/react/s/use-unload