import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';
import { url } from '../../../../url';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartFemComponent implements OnInit {
  BASEUrl = url.baseUrl;
  stats: any[] = [];
  stats_teamname: string[] = [];
  stats_points: number[] = [];
  BASE_API_PATH = `${this.BASEUrl}/api/v1/tennisWomen`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTennisWomen();
  }

  async getTennisWomen() {
    console.log('Fetching stats....');
    try {
      const res = await this.http.get<any[]>(this.BASE_API_PATH).toPromise();
      if (res) {
        const data = res;
        console.log('Estadísticas recibidas: ' + data.length);
        data.forEach(stat => {
          this.stats_teamname.push(stat.team['name']);
          this.stats_points.push(stat['points']);
        });
        await this.delay(500);
        this.loadGraph();
      } else {
        console.log('Error cargando los datos');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  loadGraph() {
    Highcharts.chart('container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Ranking Tennis Femenino'
      },
      subtitle: {
        text: 'API Integrada 5 | Tipo: Spline'
      },
      yAxis: {
        title: {
          text: 'Valor'
        }
      },
      xAxis: {
        title: {
          text: 'Tenista'
        },
        categories: this.stats_teamname.slice(0, 10)
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      series: [
        {
          name: 'Puntos',
          data: this.stats_points.slice(0, 10)
        } as Highcharts.SeriesWaterfallOptions // Agregamos el tipo de serie correcto aquí
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }
        ]
      }
    });
  }
}