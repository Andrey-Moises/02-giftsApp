import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataGifts, SearchGIftsResponse } from '../interfaces/gifts.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftsService 
{

  private apiKey    : string = 'zX1Jhy22rItOpX7O6yyG3NaLi8iYcJjw';
  private urlService    : string = 'https://api.giphy.com/v1/gifs/search?';
  private _historial: string[] = [];
  public resultados: DataGifts[] = [];

  //TODO:CAMBIAR EL TIPO DE RESULTADO(ANY)

  get historial()
  {
    this._historial = this._historial.splice(0, 9);
    return [...this._historial];
  }

  constructor( private htttp:HttpClient ) 
  {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('lastS')!) || [];

  }

  historialGenerado( query:string )
  {
    
    query = query.trim().toLocaleLowerCase();

    if (  query == '')
    {
      return;
    }
    
    if( !this._historial.includes( query ) )
    {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify( this._historial ));

    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)
    
    this.htttp.get<SearchGIftsResponse>( `${ this.urlService}`, { params } )
      .subscribe( (response: SearchGIftsResponse ) => {
        //console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem( 'lastS', JSON.stringify( response.data ) );
      })

      // this.htttp.get<SearchGIftsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=zX1Jhy22rItOpX7O6yyG3NaLi8iYcJjw&q=${ query }&limit=10`)
      // .subscribe( (response: SearchGIftsResponse ) => {
      //   //console.log(response.data);
      //   this.resultados = response.data;
      //   localStorage.setItem( 'lastS', JSON.stringify( response.data ) );
      // })
    
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=zX1Jhy22rItOpX7O6yyG3NaLi8iYcJjw&q=CABBAGE&limit=10')
    // .then( resp => {
    //   resp.json().then( data => {
    //     console.log( data )
    //   })
    // })

    // this.respuestaGifts()
    
    

  }

  async respuestaGifts()
  {

    const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=zX1Jhy22rItOpX7O6yyG3NaLi8iYcJjw&q=${ query }limit=10')
    const data = await resp.json();
    console.log( data );
    

  }

}
