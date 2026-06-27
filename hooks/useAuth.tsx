"use client"

import { AuthContext } from "@/context/AuthContextWrapper";
import { AuthContextType } from "@/types/allTypes";
import { useContext } from "react";

const useAuth : () => AuthContextType = () => {
  const context = useContext<AuthContextType | null>(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthContextWrapper");
  }

  return context;
};

export default useAuth;
