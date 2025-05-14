import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BarChartOption } from '../interfaces/barChart';
import { RadarChartOption } from '../interfaces/radar';
import { LineChartOption } from '../interfaces/lineChart';
import { PieChartOption } from '../interfaces/pieChart';

@Injectable({
  providedIn: 'root'
})
export class ChartsAPIService {
  private baseUrl = 'http://echartswebapi.runasp.net/api/Charts';

  constructor(private http: HttpClient) { }

  getBarchartData() {
    return this.http.get<BarChartOption>(`${this.baseUrl}/bar`);
  }

  getLineChartData() {
    return this.http.get<LineChartOption>(`${this.baseUrl}/line`);
  }

  getPieChartData() {
    return this.http.get<PieChartOption>(`${this.baseUrl}/pie`);
  }

  getRadarChartData() {
    return this.http.get<RadarChartOption>(`${this.baseUrl}/radar`);
  }
}
