import {RefObject, useEffect} from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler?: (event: MouseEvent) => void
  ) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler?.(event);
    }

    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [ref, handler])
}