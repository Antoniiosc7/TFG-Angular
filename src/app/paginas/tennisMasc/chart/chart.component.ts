import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { url } from '../../../../url';

interface TennisPlayer {
  Name: string;
  Rank: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartMascComponent implements AfterViewInit {
  BASEUrl = url.baseUrl;

  @ViewChild('myChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  BASE_API_PATH = `${this.BASEUrl}/api/v1/tennisLiveRanking`;
  tennisPlayers: TennisPlayer[] = [];

  constructor(private http: HttpClient) {}

  async ngAfterViewInit() {
    await this.getStats();
    this.loadGraph();
  }

  async getStats() {
    console.log('Fetching stats....');
    try {
      const res = await this.http.get<TennisPlayer[]>(this.BASE_API_PATH).toPromise();
      if (res) {
        this.tennisPlayers = res;
        console.log('Estadísticas recibidas: ' + this.tennisPlayers.length);
      } else {
        console.log('Error cargando los datos');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }

  loadGraph() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      const playerNames = this.tennisPlayers.map(player => player.Name).slice(0, 10);
      const playerRanks = this.tennisPlayers.map(player => player.Rank).slice(0, 10).reverse();

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: playerNames,
          datasets: [
            {
              label: 'Ranking',
              backgroundColor: 'rgba(255, 51, 79)',
              borderColor: 'rgb(255, 255, 255)',
              data: playerRanks,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false, 
            },
          },
        },
      });
    } else {
      console.error('Canvas context is null.');
    }
  }
}
