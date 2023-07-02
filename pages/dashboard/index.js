import { Sidebar } from "@/components/dashboard/Sidebar";
import { ProductActivities } from "@/components/dashboard/ProductActivities";
import { ProductStat } from "@/components/dashboard/ProductStat";
import { ProductStatsInfo } from "@/components/dashboard/ProductStatsInfo";
import { Navigation } from "@/components/dashboard/Navigation";
import React, { useEffect, useState } from "react";

export default function Dashboard({ children }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="p-[40px] bg-[#F5F5F5] h-screen w-full flex gap-[40px] overflow-hidden">
      <Sidebar></Sidebar>
      <section className="h-full w-full p-[20px] flex flex-col gap-[40px]  overflow-y-scroll no-scrollbar">
        <Navigation />
        <ProductStatsInfo />
        <ProductActivities />
        <ProductStat />
      </section>
    </div>
  );
}
