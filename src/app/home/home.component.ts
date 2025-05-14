import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../components/header/header.component";
import { ChartComponent } from "../components/chart/chart.component";
import { LineComponent } from "../components/line/line.component";
import { PieComponent } from "../components/pie/pie.component";
import { RadarComponent } from "../components/radar/radar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ChartComponent, FormsModule, LineComponent, PieComponent, RadarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  chartType: string = '';

  change() {
    console.log('Selected chart:', this.chartType);
  }
}
