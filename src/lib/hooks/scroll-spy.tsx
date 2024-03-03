"use client";

import {useEffect, useState} from "react";

export function useScrollSpy(ids: string[], options: Record<string, unknown>) {
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
      observer.observe(document.getElementById(id)!);
    });
    return () => {
      ids.forEach((id) => {
        observer.unobserve(document.getElementById(id)!);
      });
    };
  }, [ids, options]);
  return activeId;
}
