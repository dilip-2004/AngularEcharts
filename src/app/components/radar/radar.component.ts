import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { ChartsAPIService } from '../../services/charts-api.service';

@Component({
  selector: 'app-radar',
  imports: [],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.css'
})
export class RadarComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  private chart: echarts.ECharts | undefined;

  constructor(private chartService:ChartsAPIService) {}

  ngAfterViewInit() {
    this.initChart();
  }

  private initChart() {
    try{
    this.chart = echarts.init(this.chartContainer.nativeElement,'dark');
    this.chartService.getRadarChartData().subscribe((data:any) => {
      this.chart?.setOption(data);
    });
  } catch (error) {
    console.error('Error creating chart:', error);
  }
  }
}
