import { useSidebar } from "@core/provider/sidebar-provider";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Backdrop from "./Backdrop";

export default function AdminLayout() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen ? "ml-0" : isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
