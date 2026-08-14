import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { day: "MON", amount: 40 },
  { day: "TUE", amount: 60 },
  { day: "WED", amount: 45 },
  { day: "THU", amount: 70 },
  { day: "FRI", amount: 82 },
  { day: "SAT", amount: 90 },
  { day: "SUN", amount: 64 },
];

const highestRevenue = Math.max(
  ...revenueData.map((item) => item.amount)
);

const RevenueChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={revenueData}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#666666",
            }}
          />

          <Bar dataKey="amount">

            {revenueData.map((item) => (
              <Cell
                key={item.day}
                fill={
                  item.amount === highestRevenue
                    ? "#b82028"
                    : "#f7c7ca"
                }
              />
            ))}

          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;