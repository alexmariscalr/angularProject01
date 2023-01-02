import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'yc0NLcuR5S2oyL7ZcwObLhN1wAHtA3Y2';
  private _historial : string[] = [];

  public _resultados: Gif[] = [];

  get historial() {

    return [...this._historial];
  }

  constructor(private http: HttpClient) {

    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse( localStorage.getItem('historial')! ) ;
    }

    if (localStorage.getItem('resultados')) {
      this._resultados = JSON.parse( localStorage.getItem('resultados')! ) ;
    }


  }

   buscarGifs (query:string = '') {
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)) {
      this._historial.unshift( query )
      this._historial = this._historial.splice(0,10)

      localStorage.setItem('historial', JSON.stringify( this._historial))
    
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search	?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe (( resp ) => {
        this._resultados = resp.data; 
        localStorage.setItem('resultados', JSON.stringify( this._resultados ) );
      })

    
    

  }
}
