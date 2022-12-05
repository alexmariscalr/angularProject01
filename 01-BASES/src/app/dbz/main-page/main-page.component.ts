import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: String,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  

  agregar() {
    console.log(this.nuevo)
  }


}
