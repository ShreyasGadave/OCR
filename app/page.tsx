'use client'

import HomeNavbar from "@/components/homeNavbar";
import HeroSection from "../components/HeroSection";

export default function Home() {

  return (
 
    <>
      {/* <HydrateClient>
<h1 className="text-2xl font-bold">Shreyas Profile</h1>
       <ProfileForm />
   </HydrateClient> */}

<div className="min-h-screen bg-linear-to-b from-blue-500 via-blue-300 to-transparent">
  <HomeNavbar />
  <HeroSection />
</div>

      </>
  );
}
