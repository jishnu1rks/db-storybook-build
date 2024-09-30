import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data01 = [
  { hour: "12a", index: 1, value: 170 },
  { hour: "1a", index: 1, value: 180 },
  { hour: "2a", index: 1, value: 150 },
  { hour: "3a", index: 1, value: 120 },
  { hour: "4a", index: 1, value: 200 },
  { hour: "5a", index: 1, value: 300 },
  { hour: "6a", index: 1, value: 400 },
  { hour: "7a", index: 1, value: 200 },
  { hour: "8a", index: 1, value: 100 },
  { hour: "9a", index: 1, value: 150 },
  { hour: "10a", index: 1, value: 160 },
];

const data02 = [
  { hour: "12a", index: 1, value: 160 },
  { hour: "1a", index: 1, value: 180 },
  { hour: "2a", index: 1, value: 150 },
  { hour: "3a", index: 1, value: 120 },
  { hour: "4a", index: 1, value: 200 },
  { hour: "5a", index: 1, value: 300 },
  { hour: "6a", index: 1, value: 100 },
  { hour: "7a", index: 1, value: 200 },
  { hour: "8a", index: 1, value: 100 },
  { hour: "9a", index: 1, value: 150 },
  { hour: "10a", index: 1, value: 160 },
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      data02.map((entry) => entry.value)
    )
  ),
];

let config = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const Component = () => {
  const domain = parseDomain();
  const range = [16, 225];
  return (
    <>
      <ChartContainer config={config} className="h-[60px] w-full min-w-[800px]">
        <ScatterChart
          accessibilityLayer
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          data={data01}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            type="category"
            dataKey="hour"
            interval={0}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            name="sunday"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Sunday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />

          {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" /> */}
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" hideLabel />}
          />
          <Scatter
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </ScatterChart>
      </ChartContainer>
    </>
  );
};

export default Component;
