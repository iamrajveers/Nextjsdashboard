"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <p className="text-gray-500 text-sm">Sign up to get started</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your full name" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-blue-500 underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
