import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import FileSaver from "file-saver";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";
import { useGenerateImage } from "recharts-to-png";

type ChartDataprops = {
  data: { month: string; desktop: number }[];
  config: {
    desktop: { label: string; color: string };
  };
};

const Component = ({ data, config }: ChartDataprops) => {
  const [getDivJpeg, { ref }] = useGenerateImage<HTMLDivElement>({
    quality: 0.8,
    type: "image/jpeg",
  });

  const handleDivDownload = useCallback(async () => {
    const jpeg = await getDivJpeg();
    if (jpeg) {
      FileSaver.saveAs(jpeg, "chart.jpeg");
    }
  }, []);

  return (
    <>
      <Button onClick={handleDivDownload}>Download</Button>
      <ChartContainer
        config={config}
        className="min-h-[200px] w-full"
        ref={ref}
      >
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </>
  );
};

export default Component;
