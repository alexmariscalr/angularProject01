import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

   termino: string = ' Hola mundo';
   hayError:boolean = false;

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) => {
      
    }, (err) => {
      this.hayError = true;
    })

  }

  ngOnInit(): void {
  }

}
