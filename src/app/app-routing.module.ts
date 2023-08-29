import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './paginas/productos/productos.component';

import { InfoComponent } from './paginas/info/info.component';

import { TwitchHubComponent } from './paginas/twitch/twitch-hub/twitch-hub.component';
import { ListComponent } from './paginas/twitch/list/list.component';
import { ChartComponent } from './paginas/twitch/chart/chart.component';

import { ChartMascComponent } from './paginas/tennisMasc/chart/chart.component';
import { ListMascComponent } from './paginas/tennisMasc/list/list.component';
import { HubMascComponent} from './paginas/tennisMasc/hub/hub.component'

import { ChartFemComponent } from './paginas/tennisFem/chart/chart.component';
import { ListFemComponent } from './paginas/tennisFem/list/list.component';
import { HubFemComponent} from './paginas/tennisFem/hub/hub.component'

const routes: Routes = [
  { path: '', component: InfoComponent},
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductosComponent },

  { path: 'twitch', component: TwitchHubComponent},
  { path: 'twitch/list', component: ListComponent},
  { path: 'twitch/chart', component: ChartComponent},

  { path: 'tennisMasc', component: HubMascComponent},
  { path: 'tennisMasc/list', component: ListMascComponent },
  { path: 'tennisMasc/chart', component: ChartMascComponent },

  { path: 'tennisFem', component: HubFemComponent},
  { path: 'tennisFem/list', component: ListFemComponent },
  { path: 'tennisFem/chart', component:  ChartFemComponent},

  //{ path: '', redirectTo: '/product', pathMatch: 'full' }, // Redirige a 'about' por defecto
 // { path: '**', redirectTo: '/about' }, // Redirige a 'about' para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
