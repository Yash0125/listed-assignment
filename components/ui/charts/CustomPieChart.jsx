import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { data } from "../../../helpers/dummy";

export const CustomPieChart = () => {
  return (
    <div className="m-[10px] h-[145px] w-[145px]">
      <PieChart
        margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
        width={145}
        height={145}
      >
        <Pie data={data.pieChartData} cx="50%" cy="50%" outerRadius={70}>
          {data.pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
