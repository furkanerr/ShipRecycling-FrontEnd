import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NaviComponent} from './components/navi/navi.component';
import { GemiListComponent } from './components/gemi-list/gemi-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GemiAddComponent } from './components/gemi-add/gemi-add.component';
import { BayrakAddComponent } from './components/bayrak-add/bayrak-add.component';
import { GemiTipiAddComponent } from './components/gemi-tipi-add/gemi-tipi-add.component';
import { BlokListComponent } from './components/blok-list/blok-list.component';

import { MeslekAddComponent } from './components/meslek-add/meslek-add.component';
import { KazanAddComponent } from './components/kazan-add/kazan-add.component';
import { HazMatAddComponent } from './components/haz-mat-add/haz-mat-add.component';
import { LoginComponent } from './components/login/login.component';
import { KazanDoldurmaAddComponent } from './components/kazan-doldurma-add/kazan-doldurma-add.component';
import { BayrakUpdateComponent } from './components/bayrak-update/bayrak-update.component';
import { GemiUpdateComponent } from './components/gemi-update/gemi-update.component';
import { GemiTipiUpdateComponent } from './components/gemi-tipi-update/gemi-tipi-update.component';
import { GemiImageAddComponent } from './components/gemi-image-add/gemi-image-add.component';
import { GemiDetailsComponent } from './components/gemi-details/gemi-details.component';
import { GemiDeleteComponent } from './components/gemi-delete/gemi-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    GemiListComponent,
    SideBarComponent,
    GemiAddComponent,
    BayrakAddComponent,
    GemiTipiAddComponent,
    BlokListComponent,
    MeslekAddComponent,
    KazanAddComponent,
    HazMatAddComponent,
    LoginComponent,
    KazanDoldurmaAddComponent,
    BayrakUpdateComponent,
    GemiUpdateComponent,
    GemiTipiUpdateComponent,
    GemiImageAddComponent,
    GemiDetailsComponent,
    GemiDeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
