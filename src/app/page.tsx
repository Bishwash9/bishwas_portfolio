"use client";

import LoadingScreen from "@/components/sections/LoadingScreen";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);



  return (
    <>
      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}
    </>
  )
}