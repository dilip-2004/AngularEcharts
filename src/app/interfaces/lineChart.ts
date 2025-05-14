export interface LineChartOption {
  xAxis: {
    type: 'category';
    data: string[];
  };
  yAxis: {
    type: 'value';
  };
  series: {
    data: number[];
    type: 'line';
    name?: string;
    smooth?: boolean;
    symbol?: string;
    symbolSize?: number;
    lineStyle?: {
      color?: string;
      width?: number;
      type?: 'solid' | 'dashed' | 'dotted';
    };
    areaStyle?: {
      color?: string;
      opacity?: number;
    };
    markPoint?: {
      data: Array<{
        type: 'max' | 'min' | 'average';
        name: string;
      }>;
    };
    markLine?: {
      data: Array<{
        type: 'max' | 'min' | 'average';
        name: string;
      }>;
    };
  }[];
  grid?: {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
  };
  tooltip?: {
    trigger?: 'item' | 'axis';
    formatter?: string | ((params: any) => string);
  };
  legend?: {
    data?: string[];
  };
}