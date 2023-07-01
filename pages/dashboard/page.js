import { ProductActivities } from "@/components/dashboard/ProductActivities";
import { ProductStat } from "@/components/dashboard/ProductStat";
import { ProductStatsInfo } from "@/components/dashboard/ProductStatsInfo";
import { Navigation } from "@/components/dashboard/TopNavigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <ProductStatsInfo></ProductStatsInfo>
      <ProductActivities></ProductActivities>
      <ProductStat></ProductStat>
    </>
  );
}
