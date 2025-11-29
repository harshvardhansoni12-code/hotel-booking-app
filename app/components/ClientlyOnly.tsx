"use client";

/*
This component ensures that its children are only rendered on the client side.
this component resolves hydration errors in Next.js applications.
*/
import { useState, useEffect } from "react";

interface ClientOnlyProps {
  children?: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <></>;
};

export default ClientOnly;
