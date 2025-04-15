"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ListTodo,
  MessageCircle,
  MapPin,
  FileImage,
  FileText,
  BarChart2,
  Cog,
  Users,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ collapsed }) => {
  const [openTransactions, setOpenTransactions] = useState(true);
  const [openReports, setOpenReports] = useState(false);

  return (
    <aside
      className={`h-screen bg-white shadow-md p-4 flex flex-col border-r transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex justify-center items-center mb-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={collapsed ? 40 : 160}
          height={40}
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
        <NavItem
          icon={<Home size={18} />}
          label="Projects Dashboard"
          href="/Dashboard"
          collapsed={collapsed}
        />
        <NavItem
          icon={<ListTodo size={18} />}
          label="To Do"
          href="/todo"
          collapsed={collapsed}
        />
        <NavItem
          icon={<MessageCircle size={18} />}
          label="Conversation"
          href="/conversation"
          collapsed={collapsed}
        />
        <NavItem
          icon={<MapPin size={18} />}
          label="Location"
          href="/loction"
          collapsed={collapsed}
        />
        <NavItem
          icon={<FileImage size={18} />}
          label="Design Files"
          href="/design-files"
          collapsed={collapsed}
        />

        {/* Transactions Dropdown */}
        <Dropdown
          icon={<FileText size={18} />}
          label="Transactions"
          isOpen={openTransactions}
          onToggle={() => setOpenTransactions(!openTransactions)}
          collapsed={collapsed}
          items={[
            { name: "Estimates", href: "/transactions/estimates" },
            { name: "Sales Orders", href: "/transactions/sales-orders" },
            { name: "Invoices", href: "/transactions/invoices" },
            { name: "Retainer Invoices", href: "/transactions/retainer-invoices" },
            { name: "Payments", href: "/transactions/payments" },
          ]}
        />

        {/* My Reports Dropdown */}
        <Dropdown
          icon={<BarChart2 size={18} />}
          label="My Reports"
          isOpen={openReports}
          onToggle={() => setOpenReports(!openReports)}
          collapsed={collapsed}
          items={[
            { name: "Report 1", href: "/reports/report1" },
            { name: "Report 2", href: "/reports/report2" },
          ]}
        />

        <NavItem
          icon={<Cog size={18} />}
          label="Account"
          href="/account"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Users size={18} />}
          label="Users"
          href="/users"
          collapsed={collapsed}
        />
      </nav>
    </aside>
  );
};

// NavItem Component
const NavItem = ({ icon, label, href, collapsed }) => (
  <Link
    href={href}
    className="flex items-center space-x-3 hover:text-black transition-all duration-200"
  >
    <div className="min-w-[20px]">{icon}</div>
    {!collapsed && <span>{label}</span>}
  </Link>
);

// Dropdown Component
const Dropdown = ({ icon, label, isOpen, onToggle, collapsed, items }) => (
  <div>
    <button
      onClick={onToggle}
      className="flex items-center space-x-3 hover:text-black focus:outline-none w-full transition-all duration-200"
    >
      <div className="min-w-[20px]">{icon}</div>
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </>
      )}
    </button>

    {!collapsed && isOpen && (
      <ul className="ml-7 mt-2 list-disc text-sm text-blue-500 space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Sidebar;
