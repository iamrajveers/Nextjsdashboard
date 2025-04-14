"use client";

import Image from "next/image";

export default function Topbar({ toggleSidebar }) {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 shadow-md">
      {/* Left - Menu icon */}
      <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Middle - Spacer */}
      <div></div>

      {/* Right - Button and profile */}
      <div className="flex items-center gap-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded">
          Start New Project
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Raza Aloe Portal Customer</p>
            <p className="text-xs text-gray-500">Account Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
}




