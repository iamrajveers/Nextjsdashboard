"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Tobar";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const pathname = usePathname();
  const blacklist = ["/login", "/signup"];
  const isBlacklist = blacklist.includes(pathname);

  const [collapsed, setCollapsed] = useState(false);

  if (isBlacklist) {
    return <div>{children}</div>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar with menu toggle */}
        <Topbar toggleSidebar={() => setCollapsed(!collapsed)} />

        {/* Page content */}
        <main className="bg-gray-50 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;


