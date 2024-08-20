"use client";

import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
export const Scroll = () => {
  const overScrollOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 150,
  };
  const options = {
    damping: 0.07,
    // plugins: {
    //   overscroll: { ...overScrollOptions },
    // },
  };

  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) {
        Scrollbar.destroy(document.body);
      }
    };
  }, []);

  return null;
};
