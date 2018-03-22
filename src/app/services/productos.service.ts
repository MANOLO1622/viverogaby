import { Injectable } from '@angular/core';
import { Http} from "@angular/http";
import { resolve, reject } from 'q';




@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = true;


  constructor( public http:Http ) {

    this.cargar_productos();

   }

   public buscar_producto( termino:string ){

        //console.log( "BuscandoProducto");
        //console.log (this.productos.length);

        if( this.productos.length === 0 ){
          this.cargar_productos().then( ()=>{
          //termino la carga
          this.filtrar_productos(termino);

          });
        }else{
          this.filtrar_productos(termino);
        }

    
   }
   
  private filtrar_productos(termino:string){
    
    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod =>{

        if( prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ){
          this.productos_filtrado.push( prod );
          //console.log( prod );  
        }

      //console.log( prod );
   })



  }

   public cargar_producto(cod:string){

    return this.http.get(`https://curso-1angular5.firebaseio.com/productos/${ cod }.json`);//esta es la URL de los productos

   
   }



  public cargar_productos(){

    this.cargando= true;

    let promesa = new Promise ( ( resolve, reject)=>{
     
      

 

    this.http.get('https://curso-1angular5.firebaseio.com/productos_idx.json')//esta es la URL de los productos

        .subscribe( res => {
          
          //console.log( res.json() );

          //setTimeout(()=>{
            this.cargando= false;
            this.productos = res.json();
            resolve();
          //},500 )//esto es para que el loading salga en la pantalla (la duracion)
        });
      })
          return promesa;
  }
  

}

