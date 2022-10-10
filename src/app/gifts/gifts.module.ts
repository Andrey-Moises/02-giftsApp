import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';

import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    GiftsPageComponent
  ]
})
export class GiftsModule { }
