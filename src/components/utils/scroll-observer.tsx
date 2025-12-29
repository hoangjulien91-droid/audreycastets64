"use client";

import { useEffect } from "react";

export const ScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".animate-in");
    elements.forEach((el) => observer.observe(el));

    // Observe new elements added to the DOM (mutation observer)
    // This is useful for client-side routing changes if they don't do a full reload
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("animate-in")) {
              observer.observe(node);
            }
            // Check children
            const children = node.querySelectorAll(".animate-in");
            children.forEach((el) => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};
