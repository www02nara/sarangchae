"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isBookingOpen: boolean;
  openBooking: (serviceTitle?: string) => void;
  closeBooking: () => void;
  selectedService: string;
  isNonCoveredOpen: boolean;
  openNonCovered: () => void;
  closeNonCovered: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isNonCoveredOpen, setIsNonCoveredOpen] = useState(false);

  const openBooking = (serviceTitle?: string) => {
    setSelectedService(serviceTitle || "척추·관절 통증클리닉");
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const openNonCovered = () => {
    setIsNonCoveredOpen(true);
  };

  const closeNonCovered = () => {
    setIsNonCoveredOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
        selectedService,
        isNonCoveredOpen,
        openNonCovered,
        closeNonCovered,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
