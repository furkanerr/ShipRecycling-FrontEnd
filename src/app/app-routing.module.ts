import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BayrakAddComponent } from './components/bayrak-add/bayrak-add.component';
import { BayrakUpdateComponent } from './components/bayrak-update/bayrak-update.component';
import { BlokListComponent } from './components/blok-list/blok-list.component';
import { GemiAddComponent } from './components/gemi-add/gemi-add.component';
import { GemiDetailsComponent } from './components/gemi-details/gemi-details.component';
import { GemiImageAddComponent } from './components/gemi-image-add/gemi-image-add.component';
import { GemiListComponent } from './components/gemi-list/gemi-list.component';
import { GemiTipiAddComponent } from './components/gemi-tipi-add/gemi-tipi-add.component';
import { GemiTipiUpdateComponent } from './components/gemi-tipi-update/gemi-tipi-update.component';
import { GemiUpdateComponent } from './components/gemi-update/gemi-update.component';
import { HazMatAddComponent } from './components/haz-mat-add/haz-mat-add.component';
import { KazanAddComponent } from './components/kazan-add/kazan-add.component';
import { KazanDoldurmaAddComponent } from './components/kazan-doldurma-add/kazan-doldurma-add.component';
import { LoginComponent } from './components/login/login.component';
import { MeslekAddComponent } from './components/meslek-add/meslek-add.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:GemiListComponent},
  {path:"gemi", component:GemiListComponent},
  {path:"gemi/add", component:GemiAddComponent,canActivate:[LoginGuard]},
  {path:"bayrak/add", component:BayrakAddComponent,canActivate:[LoginGuard]},
  {path:"gemiTipi/add", component:GemiTipiAddComponent,canActivate:[LoginGuard]},
  {path:"meslek/add", component:MeslekAddComponent,canActivate:[LoginGuard]},
  {path:"kazanlar/add", component:KazanAddComponent,canActivate:[LoginGuard]},
  {path:"hazmat/add", component:HazMatAddComponent,canActivate:[LoginGuard]},
  {path:"blok/add", component:BlokListComponent,canActivate:[LoginGuard]},
  {path:"kazandoldurmaoperasyonlari/add", component:KazanDoldurmaAddComponent,canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"gemi/update/:gemiId", component:GemiUpdateComponent,canActivate:[LoginGuard]},
  {path:"gemitipleri/update/:gemiTipiId", component:GemiTipiUpdateComponent,canActivate:[LoginGuard]},
  {path:"gemi/detay/:gemiId", component:GemiDetailsComponent},
  {path:"signup", component:SignUpComponent},
  {path:"gemiimage/add", component:GemiImageAddComponent,canActivate:[LoginGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
