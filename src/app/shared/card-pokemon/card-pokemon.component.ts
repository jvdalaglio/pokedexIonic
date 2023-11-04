import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class CardPokemonComponent implements OnInit {

  constructor() { }

  @Input() pokeList: any

  ngOnInit() {
    console.log("pokeList", this.pokeList)
  }

}
