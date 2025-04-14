

import React from "react";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] }); // ✅ ADD THIS

import Home from "./components/Home";

export const metadata={
  title: "Homepage"

}
export default function Homepage() {
  return (
  <>
     <Home/>
     
     </>
  );
}
