
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  LayoutDashboard,
  Archive,
  CheckSquare,
  MessageCircle,
  MapPin,
  CreditCard,
  UserCog,
  Users,
  FileImage,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { name: "Projects Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "To Do", icon: CheckSquare, href: "/todos" },
  { name: "Conversation", icon: MessageCircle, href: "/conversations" },
  { name: "Location", icon: MapPin, href: "/location" },
  { name: "Design Files", icon: FileImage, href: "/design-files" },
  {
    name: "Transactions",
    icon: CreditCard,
    submenu: [
      { name: "Estimates", href: "/transactions/estimates" },
      { name: "Sales Orders", href: "/transactions/sales-orders" },
      { name: "Invoices", href: "/transactions/invoices" },
      { name: "Retainer Invoices", href: "/transactions/retainer-invoices" },
      { name: "Payments", href: "/transactions/payments" },
    ],
  },
  {
    name: "My Reports",
    icon: Archive,
    submenu: [
      { name: "My Projects", href: "/reports/myproject" },
      { name: "My Company's Projects", href: "/reports/mycompanyproject" },
    ],
  },
  { name: "Account", icon: UserCog, href: "/account" },
  { name: "Users", icon: Users, href: "/users" },
];

const Sidebar = ({ isSidebarOpen }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleMenu = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  
  return (
    <motion.div
      className={`relative z-10  flex-shrink-0 hidden sm:block ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 290 : 80 }}
    >
      <div className="h-full bg-gray-50 bg-opacity-50 shadow-md p-4 flex flex-col border-r border-gray-200 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center justify-center my-12 mx-2">
          {isSidebarOpen ? (
            <Image src="/blinksign-logo.svg" alt="Logo" width={160} height={40} />
          ) : (

            <span className="text-lg font-bold text-yellow-400">
              <Image src="/blinksignicon.png" alt="Logo" width={160} height={40} /></span>
            
          )}

        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          {SIDEBAR_ITEMS.map((item, idx) => (
            <div key={idx}>
              <div
                className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-100 rounded-lg transition"
                onClick={item.submenu ? () => toggleMenu(idx) : undefined}
              >
                {item.submenu ? (
                  <div className="flex items-center gap-4 flex-grow">
                    <item.icon size={20} />
                    {isSidebarOpen && <span>{item.name}</span>}
                  </div>
                ) : (
                  <Link href={item.href} className="flex items-center gap-4 flex-grow">
                    <item.icon size={20} />
                    {isSidebarOpen && <span>{item.name}</span>}
                  </Link>
                )}

                {/* Dropdown Arrow */}
                {item.submenu && isSidebarOpen && (
                  <span className="text-gray-500 ml-auto">
                    {expanded === idx ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </span>
                )}
              </div>

              {/* Submenu */}
              {item.submenu && expanded === idx && isSidebarOpen && (
                <div className="pl-10">
                  {item.submenu.map((sub, subIdx) => (
                    <Link
                      href={sub.href}
                      key={subIdx}
                      className="block text-sm py-1 text-gray-600 hover:text-black"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;







