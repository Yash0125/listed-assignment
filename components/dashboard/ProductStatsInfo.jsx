import React from "react";
import { StatisticsCard } from "../ui/StatisticsCard";
import { data } from "../../helpers/dummy";

export const ProductStatsInfo = () => {
  return (
    <div className="mx-auto w-full flex gap-[36px] min-h-[120px] overflow-x-scroll no-scrollbar">
      {data.userStats.map((stat, index) => {
        return (
          <StatisticsCard
            key={index}
            statName={stat.statName}
            statValue={stat.statValue}
            bgColor={stat.bgColor}
            iconUrl={stat.iconUrl}
            dimensions={stat.dimensions}
          ></StatisticsCard>
        );
      })}
    </div>
  );
};
