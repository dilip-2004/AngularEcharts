import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { ChartsAPIService } from '../../services/charts-api.service';

@Component({
  selector: 'app-line',
  imports: [],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  private chart: echarts.ECharts | undefined;

  constructor(private chartService:ChartsAPIService) {}

  ngAfterViewInit() {
    this.initChart();
  }

  private initChart() {
    try {
      this.chart = echarts.init(this.chartContainer.nativeElement, 'dark');
      this.chartService.getLineChartData().subscribe((data:any) => {
        this.chart?.setOption(data);
      });
    } catch (error) {
      console.error('Error creating chart:', error);
    }
  }
}
