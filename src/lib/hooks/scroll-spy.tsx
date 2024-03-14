"use client";

import {useEffect, useState} from "react";

type Option = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useScrollSpy(ids: string[], options?: Option) {
  const [activeId, setActiveId] = useState<null | string>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    ids.forEach((id) => {
      let element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      ids.forEach((id) => {
        let element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, options]);
  return activeId;
}
