import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UpperCaseFirstLetterPipe } from '../pipes/upper-case-first-letter.pipe';
import { BadgeComponent } from '../badge/badge.component';


@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
  providers: [UpperCaseFirstLetterPipe],
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent
  ],
})
export class CardPokemonComponent implements OnInit {

  constructor(public upperCasePipe: UpperCaseFirstLetterPipe) { }

  @Input() pokeList: any

  ngOnInit() {
    console.log("pokeList", this.pokeList)
  }

  upperCaseFisrtLetter(value : any) {
    return this.upperCasePipe.transform(value)
  }

  formatarNumero(numero: number): string {
    if (numero < 10) {
      return `00${numero}`;
    } else if (numero < 100) {
      return `0${numero}`;
    } else {
      return numero.toString();
    }
  }
}
