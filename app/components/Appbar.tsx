"use client";

import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Appbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full bg-black text-[#C0C0C0] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#FFD700] font-bold text-2xl">
          $Budget Buddy
        </div>

        {/* Sign In/Sign Out button */}
        <div>
          {session ? (
            <Button
              className="p-2 bg-[#FFD700] text-black rounded-lg"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          ) : (
            <Button
              className="p-2 bg-[#FFD700] text-black rounded-lg"
              onClick={() => signIn()}
            >
              Sign in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}



