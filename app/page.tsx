"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import Appbar from "./components/Appbar";
import { Redirect } from './components/Redirect';



export default function LandingPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Appbar */}
      <Appbar />
      <Redirect />

      <main className="flex-1 flex flex-col justify-center items-center">
        {/* Centered Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 max-w-3xl mx-auto mb-6">
              Take Control of Your Finances
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl mx-auto mb-6">
              BudgetBuddy helps you manage your money, track expenses, and achieve your financial goals.
            </p>

            {/* Centered Larger Sign In/Sign Out Button */}
            <div className="mt-8">
              {session ? (
                <Button
                  className="px-8 py-4 bg-[#FFD700] text-black rounded-lg text-lg font-bold"
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  className="px-8 py-4 bg-[#FFD700] text-black rounded-lg text-lg font-bold"
                  onClick={() => signIn()}
                >
                  Sign in
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">Created by Japreet.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

