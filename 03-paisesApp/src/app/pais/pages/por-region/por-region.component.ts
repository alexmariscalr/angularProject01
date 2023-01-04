import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {margin-right : 5px}`
  ]
})
export class PorRegionComponent implements OnInit {

 regiones: string[]= ['africa', 'americas', 'asia', 'europe', 'oceania']
 regionActiva: string = ''

 constructor() {}

 activarRegion( region: string) {
  this.regionActiva =  region
 }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
