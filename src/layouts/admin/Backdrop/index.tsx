import { useSidebar } from "@core/provider/sidebar-provider";
import React from "react";

const Backdrop: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 lg:hidden" onClick={toggleMobileSidebar} />;
};

export default Backdrop;

