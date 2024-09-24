"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Redirect() {
    const { data: session, status } = useSession();
    const router = useRouter();
    

    useEffect(() => { 
        // If user is logged in, redirect to the dashboard
        if (session?.user) {
            router.push("/dashboard"); // Adjust the path as necessary
       
    }    }, [session]);

    

    return null; // No redirection needed
}