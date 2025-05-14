export interface PieChartOption {
  tooltip?: {
    trigger?: 'item' | 'axis' | 'none';
    formatter?: string | ((params: any) => string);
    position?: string | number[] | ((point: number[]) => number[]);
  };
  legend?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    orient?: 'horizontal' | 'vertical';
    data?: string[];
    [key: string]: any;
  };
  series: {
    name?: string;
    type: 'pie';
    radius?: string | (string | number)[];
    avoidLabelOverlap?: boolean;
    label?: {
      show?: boolean;
      position?: 'center' | 'inside' | 'outside' | string | number;
      formatter?: string | ((params: any) => string);
      fontSize?: number;
      fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
      [key: string]: any;
    };
    emphasis?: {
      label?: {
        show?: boolean;
        fontSize?: number;
        fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
        [key: string]: any;
      };
      itemStyle?: {
        shadowBlur?: number;
        shadowOffsetX?: number;
        shadowColor?: string;
      };
    };
    data: {
      value: number;
      name: string;
      itemStyle?: {
        color?: string;
        borderColor?: string;
        borderWidth?: number;
      };
      label?: {
        show?: boolean;
        position?: string;
        [key: string]: any;
      };
    }[];
    itemStyle?: {
      borderRadius?: number;
      borderColor?: string;
      borderWidth?: number;
    };
  }[];
  grid?: {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
  backgroundColor?: string;
  [key: string]: any;
}