export type ChartData = {
  name: string;
  value: number;
};

export type ChartBase = {
  title?: string;
  description?: string;
  data: ChartData[];
};
