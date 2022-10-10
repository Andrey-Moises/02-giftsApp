import { Component} from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent
{

  constructor(private gs:GiftsService){}

  get historial()
  {
    return this.gs.historial;
  }

  buscar( busqueda: string )
  {
    
    this.gs.historialGenerado( busqueda )
    
  }

}
