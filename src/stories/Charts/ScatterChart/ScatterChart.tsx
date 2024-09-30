import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// const data = [
//   { x: 100, y: 200 },
//   { x: 120, y: 100 },
//   { x: 170, y: 300 },
//   { x: 140, y: 250 },
//   { x: 150, y: 400 },
//   { x: 110, y: 280 },
// ];

type ChartDataprops = {
  data: { x: number; y: number }[];
  config: {
    desktop: { label: string; color: string };
  };
};

const Component = ({ data, config }: ChartDataprops) => {
  return (
    <ChartContainer config={config} className="min-h-[200px] w-full">
      <ScatterChart
        accessibilityLayer
        margin={{
          left: 12,
          right: 12,
        }}
        data={data}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="x"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          unit="cm"
          name="stature"
        />
        <YAxis
          dataKey="y"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          unit="kg"
          name="weight"
        />
        {/* <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" /> */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Scatter
          name="A school"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
        />
      </ScatterChart>
    </ChartContainer>
  );
};

export default Component;
