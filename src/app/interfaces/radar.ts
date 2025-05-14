export interface RadarChartOption {
  title?: {
    text?: string;
    subtext?: string;
    left?: 'center' | 'left' | 'right' | number | string;
    top?: 'top' | 'bottom' | 'middle' | number | string;
    textStyle?: {
      color?: string;
      fontSize?: number;
      fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    };
  };
  legend?: {
    data?: string[];
    orient?: 'horizontal' | 'vertical';
    left?: 'center' | 'left' | 'right' | number | string;
    top?: 'top' | 'bottom' | 'middle' | number | string;
    textStyle?: {
      color?: string;
    };
  };
  radar: {
    indicator: {
      name: string;
      max: number;
      min?: number;
      color?: string;
    }[];
    shape?: 'polygon' | 'circle';
    radius?: string | number;
    axisName?: {
      color?: string;
      fontSize?: number;
    };
    splitArea?: {
      show?: boolean;
      areaStyle?: {
        color?: string[];
      };
    };
    axisLine?: {
      lineStyle?: {
        color?: string;
      };
    };
    splitLine?: {
      lineStyle?: {
        color?: string;
      };
    };
  };
  series: {
    name?: string;
    type: 'radar';
    data: {
      value: number[];
      name: string;
      symbol?: string;
      symbolSize?: number;
      lineStyle?: {
        width?: number;
        color?: string;
      };
      areaStyle?: {
        color?: string;
        opacity?: number;
      };
    }[];
    symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
    label?: {
      show?: boolean;
      formatter?: string | ((params: any) => string);
    };
    emphasis?: {
      lineStyle?: {
        width?: number;
      };
      areaStyle?: {
        color?: string;
      };
    };
  }[];
  tooltip?: {
    trigger?: 'item';
    formatter?: string | ((params: any) => string);
  };
  grid?: {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
  };
}