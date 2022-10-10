import { Component, ViewChild, ElementRef } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor( private gs:GiftsService ) {}
  
  buscar()
  {
    
    const valor = this.txtBuscar.nativeElement.value;
    
    this.gs.historialGenerado( valor );
    
    this.txtBuscar.nativeElement.value = '';
    
     // console.log(this.gs.historial)
    
  }



}
