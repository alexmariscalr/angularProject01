import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'yc0NLcuR5S2oyL7ZcwObLhN1wAHtA3Y2';
  private _historial : string[] = [];

  get historial() {

    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

   buscarGifs (query:string = '') {

    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)) {
      this._historial.unshift( query )
      this._historial = this._historial.splice(0,10)
    
    }

    this.http.get("https://api.giphy.com/v1/gifs/search	?api_key=7X49Gzmshgly9VjxF5RIO44JJrkXnqah&q=dbz&lim")
      .subscribe ((resp:any) => {
        console.log(resp.data)
      })

    
    

  }
}
