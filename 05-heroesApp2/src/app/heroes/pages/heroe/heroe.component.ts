import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  public heroe!: Heroe;

  
  constructor( private route: ActivatedRoute, private heroesService: HeroesService) { 
  }

  ngOnInit(): void {

    this.route.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroe(id) )
    )
    .subscribe( heroe => this.heroe = heroe )
  }

}
