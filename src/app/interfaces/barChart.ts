export interface BarChartOption {
  legend: any;
  tooltip: any;
  dataset: {
    dimensions: string[];
    source: any[];
  };
  xAxis: {
    type: string;
  };
  yAxis: any;
  series: {
    type: string;
  }[];
}