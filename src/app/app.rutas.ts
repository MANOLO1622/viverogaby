
import {RouterModule, Routes} from '@angular/router';


import   {
    AboutComponent,
    HomeComponent,
    ProductoComponent,
    BuscarComponent  
} from "./components/index.paginas";

const app_routes: Routes = [ //Son las rutas de las paginas
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'producto/:id', component: ProductoComponent },
   { path: 'buscar/:termino', component: BuscarComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'home'}

];
 export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});


