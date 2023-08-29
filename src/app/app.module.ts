import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

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
    ChartMascComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
