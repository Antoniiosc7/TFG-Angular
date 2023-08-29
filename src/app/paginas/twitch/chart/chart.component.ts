import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { url } from '../../../../url';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  BASEUrl = url.baseUrl;
  stats_title: string[] = [];
  stats_views: number[] = [];

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStats();
  }

  async getStats() {
    console.log('Fetching stats....');
    try {
      const res = await this.http.get<any[]>(`${this.BASEUrl}/api/v1/tennis-twitch`).toPromise();
      if (res) {
        const data = res;
        console.log('Estadísticas recibidas: ' + data.length);
        data.forEach(stat => {
          this.stats_title.push(stat.title);
          this.stats_views.push(stat['view_count']);
        });
        this.loadGraph();
      } else {
        console.log('Error cargando los datos');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }

  loadGraph() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    const trace_olympic_gold_medals = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.stats_title,
        datasets: [
          {
            label: 'Visitas',
            backgroundColor: 'rgba(0, 145, 255, 0.2)',
            borderColor: 'rgb(255, 255, 255)',
            data: this.stats_views,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}