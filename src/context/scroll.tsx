"use client";
import { Scrollbar } from "smooth-scrollbar-react";
import React, { createContext } from "react";

const ScrollContext = createContext(null);

export const ScrollContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ScrollContext.Provider value={null}>
      <Scrollbar>{children}</Scrollbar>
    </ScrollContext.Provider>
  );
};
