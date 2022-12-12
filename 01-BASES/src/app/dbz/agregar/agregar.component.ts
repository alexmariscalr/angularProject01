import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();



  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
    console.log( this.nuevo );

    
    

    //this.personajes.push(...)
    // this.nuevo
  }

}
