import { Component } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private gs:GiftsService) {}

  get data()
  {
    return this.gs.resultados;
  }

}
