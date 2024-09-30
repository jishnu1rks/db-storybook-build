import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

export function Piechart({ data, config }: { data: any; config: any }) {
  return (
    <ChartContainer config={config} className="min-h-[200px] w-full">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie data={data} dataKey="visitors" nameKey="browser" />
      </PieChart>
    </ChartContainer>
  );
}
