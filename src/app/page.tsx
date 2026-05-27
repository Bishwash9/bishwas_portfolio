"use client";

import Header from "@/components/layout/Headert";
import Hero from "@/components/sections/Hero";
import LoadingScreen from "@/components/sections/LoadingScreen";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);



  return (
    <>
      {loading && (
        <LoadingScreen
          onComplete={() =>  setLoading(false)} 
          
          
        />
      )}

      <Header/>

      <main className="relative w-full min-h-screen">

        {!loading && <Hero/>}

      </main>
    </>
  )
}