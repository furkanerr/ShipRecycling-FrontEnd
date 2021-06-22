import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BayrakAddComponent } from './components/bayrak-add/bayrak-add.component';
import { BlokListComponent } from './components/blok-list/blok-list.component';
import { GemiAddComponent } from './components/gemi-add/gemi-add.component';
import { GemiListComponent } from './components/gemi-list/gemi-list.component';
import { GemiTipiAddComponent } from './components/gemi-tipi-add/gemi-tipi-add.component';
import { HazMatAddComponent } from './components/haz-mat-add/haz-mat-add.component';
import { KazanAddComponent } from './components/kazan-add/kazan-add.component';
import { KazanDoldurmaAddComponent } from './components/kazan-doldurma-add/kazan-doldurma-add.component';
import { LoginComponent } from './components/login/login.component';
import { MeslekAddComponent } from './components/meslek-add/meslek-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:GemiListComponent},
  {path:"gemi", component:GemiListComponent},
  {path:"gemi/add", component:GemiAddComponent},
  {path:"bayrak/add", component:BayrakAddComponent},
  {path:"gemiTipi/add", component:GemiTipiAddComponent},
  {path:"meslek/add", component:MeslekAddComponent},
  {path:"kazanlar/add", component:KazanAddComponent},
  {path:"hazmat/add", component:HazMatAddComponent},
  {path:"blok/add", component:BlokListComponent},
  {path:"kazandoldurmaoperasyonlari/add", component:KazanDoldurmaAddComponent},
  {path:"login", component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
