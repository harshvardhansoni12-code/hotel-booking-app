"use client";

/*
This component ensures that its children are only rendered on the client side.
It uses a state variable to track whether the component has been mounted on the client.
If not mounted, it returns null to prevent server-side rendering issues.
Once mounted, it renders its children.
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
  return <>{children}</>;
};

export default ClientOnly;
