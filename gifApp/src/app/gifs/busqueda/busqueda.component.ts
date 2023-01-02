import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}



  buscar() {
    const value = this.txtBuscar.nativeElement.value;
    console.log(value);
    this.gifsService.buscarGifs ( value );
  }

  ngOnInit(): void {
  }

}
