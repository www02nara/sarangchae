"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isBookingOpen: boolean;
  openBooking: (serviceTitle?: string) => void;
  closeBooking: () => void;
  selectedService: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBooking = (serviceTitle?: string) => {
    setSelectedService(serviceTitle || "통증·관절 클리닉");
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
        selectedService,
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
