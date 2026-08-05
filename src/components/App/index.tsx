import React from "react";

import Footer from "../Footer";
import NavBar from "../NavBar";
import ShowCase from "../ShowCase";
import Features from "../Features";
import Contributors from "../Contributors";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0c10] text-gray-100 font-sans">
      <NavBar />
      <ShowCase />
      <Features />
      <Contributors />
      <Footer />
    </div>
  );
}
