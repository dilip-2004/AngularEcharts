import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { ChartsAPIService } from '../../services/charts-api.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  
  @ViewChild('chartContainer') chartContainer!: ElementRef;

  private chart: echarts.ECharts | undefined;

  constructor(private chartService:ChartsAPIService) {}

  ngAfterViewInit() {
    this.initChart();
  }

  private initChart() {
    try {
      this.chart = echarts.init(this.chartContainer.nativeElement, 'dark');
  
      this.chartService.getBarchartData().subscribe((data: any) => {
        data.dataset.source = data.dataset.source.map((item: any) => {
          const transformed: any = {};
          for (const key in item) {
            if (key.startsWith('_')) {
              transformed[key.slice(1)] = item[key];
            } else {
              transformed[key] = item[key];
            }
          }
          return transformed;
        });
  
        this.chart?.setOption(data);
      });
    } catch (error) {
      console.error('Error creating chart:', error);
    }
  }   
}  