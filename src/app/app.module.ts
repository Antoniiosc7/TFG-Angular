import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './paginas/productos/productos.component';

import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import { TwitchHubComponent } from './paginas/twitch/twitch-hub/twitch-hub.component';
import { InfoComponent } from './paginas/info/info.component';
import { ListComponent } from './paginas/twitch/list/list.component';
import { ChartComponent } from './paginas/twitch/chart/chart.component';
import { HubFemComponent } from './paginas/tennisFem/hub/hub.component';
import { ListFemComponent } from './paginas/tennisFem/list/list.component';
import { ListMascComponent } from './paginas/tennisMasc/list/list.component';
import { ChartMascComponent } from './paginas/tennisMasc/chart/chart.component';

import { TennisListComponent } from './paginas/tennis/list/list.component';
import { TennisChart1Component } from './paginas/tennis/chart1/chart1.component';
import { TennisChart2Component } from './paginas/tennis/chart2/chart2.component';
import { PremierEditComponent } from './paginas/premier/edit/edit.component';
import { VisualizacionesComponent } from './paginas/visualizaciones/visualizaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    AboutComponent,
    ProductosComponent,
    FooterComponent,
    TwitchHubComponent,
    InfoComponent,
    ListComponent,
    ChartComponent,
    HubFemComponent,
    ListFemComponent,
    ListMascComponent,
    ChartMascComponent,
    TennisListComponent,
    TennisChart1Component,
    TennisChart2Component,
    PremierEditComponent,
    VisualizacionesComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
