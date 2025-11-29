"use client";
import React, { useEffect } from "react";
import { useState } from "react";

interface IsLoadingProps {
  children?: React.ReactNode;
}

const IsLoading: React.FC<IsLoadingProps> = ({ children }) => {
  const [onlyLoading, setonlyLoading] = useState(true);
  useEffect(() => {
    setonlyLoading(false);
  }, []);

  if (onlyLoading) {
    return <>loading.......</>;
  }
};

export default IsLoading;
