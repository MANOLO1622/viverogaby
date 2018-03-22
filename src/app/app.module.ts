import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";

//Rutas

import {app_routing} from "./app.rutas";

//Servicios
import {InformacionService} from "./services/informacion.service";
import {ProductosService} from "./services/productos.service";


//Compoentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscarComponent } from './components/buscar/buscar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductoComponent,
    BuscarComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
    
  ],
  providers: [
    InformacionService,
    ProductosService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
