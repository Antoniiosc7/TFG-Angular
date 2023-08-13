import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { TwitchComponent } from './paginas/twitch/twitch.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductosComponent },
  { path: 'twitch', component: TwitchComponent },
  //{ path: '', redirectTo: '/product', pathMatch: 'full' }, // Redirige a 'about' por defecto
 // { path: '**', redirectTo: '/about' }, // Redirige a 'about' para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
