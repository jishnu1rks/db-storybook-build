import { useState, useEffect } from "react";
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

import { Button } from "@/components/ui/button";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type initialDataProps = {
  name: number;
  cost: number;
  impression: number;
};

const initialData: initialDataProps[] = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 },
];

const getAxisYDomain = (from: any, to: any, ref: string, offset: number) => {
  const refData: any = initialData.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

type InititalStateProps = {
  data: initialDataProps[];
  left: string;
  right: string;
  refAreaLeft: string;
  refAreaRight: string;
  top: string;
  bottom: string;
  top2: string;
  bottom2: string;
  animation: boolean;
};

const initialState: InititalStateProps = {
  data: initialData,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+1",
  bottom: "dataMin-1",
  top2: "dataMax+20",
  bottom2: "dataMin-20",
  animation: true,
};

const Component = ({ config }: { config: any }) => {
  const [chartData, setChartData] = useState<InititalStateProps>(initialState);

  useEffect(() => {
    setChartData(initialState);
  }, []);

  function zoom() {
    let { refAreaLeft, refAreaRight } = chartData;
    const { data } = chartData;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setChartData({
        ...chartData,
        refAreaLeft: "",
        refAreaRight: "",
      });
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      "impression",
      50
    );

    setChartData({
      ...chartData,
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom: bottom.toString(),
      top: top.toString(),
      top2: top2.toString(),
      bottom2: bottom2.toString(),
    });
  }

  function zoomOut() {
    const { data } = chartData;
    setChartData({
      ...chartData,
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
      top2: "dataMax+50",
      bottom2: "dataMin+50",
    });
  }

  return (
    <div
      className="highlight-bar-charts"
      style={{ userSelect: "none", width: "100%" }}
    >
      <div className="flex justify-end items-center m-10">
        <Button
          type="button"
          size="sm"
          onClick={zoomOut}
          variant="secondary"
          className=""
        >
          Zoom Out
        </Button>
      </div>
      <ChartContainer config={config} className="min-h-[200px] w-full">
        <LineChart
          width={800}
          height={400}
          data={chartData.data}
          onMouseDown={(e) =>
            setChartData({ ...chartData, refAreaLeft: e?.activeLabel })
          }
          onMouseMove={(e) =>
            chartData.refAreaLeft &&
            setChartData({ ...chartData, refAreaRight: e?.activeLabel })
          }
          // eslint-disable-next-line react/jsx-no-bind
          onMouseUp={zoom}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow
            dataKey="name"
            domain={[chartData.left, chartData.right]}
            type="number"
          />
          <YAxis
            allowDataOverflow
            domain={[chartData.bottom, chartData.top]}
            type="number"
            yAxisId="1"
          />
          <YAxis
            orientation="right"
            allowDataOverflow
            domain={[chartData.bottom2, chartData.top2]}
            type="number"
            yAxisId="2"
          />
          <Tooltip />
          <Line
            yAxisId="1"
            type="natural"
            dataKey="cost"
            stroke="#8884d8"
            animationDuration={300}
          />
          <Line
            yAxisId="2"
            type="natural"
            dataKey="impression"
            stroke="#82ca9d"
            animationDuration={300}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          {chartData.refAreaLeft && chartData.refAreaRight ? (
            <ReferenceArea
              yAxisId="1"
              x1={chartData.refAreaLeft}
              x2={chartData.refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default Component;
