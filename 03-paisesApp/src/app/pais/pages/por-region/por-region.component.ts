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

 regiones: string[]= ['eu', 'efta', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
 regionActiva: string = ''
 paises: Country[] = []


  

 constructor(private paisService : PaisService) {}

 activarRegion( region: string) {
  if (region === this.regionActiva) {return}
  this.regionActiva =  region
  this.paisService.buscarRegion(region)
    .subscribe(paises => {
      this.paises = paises
    })

 }

  ngOnInit(): void {
  }

}
