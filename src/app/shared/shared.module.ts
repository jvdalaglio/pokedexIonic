import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { UpperCaseFirstLetterPipe } from './pipes/upper-case-first-letter.pipe';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [
    CommonModule,
    CardPokemonComponent,
    BadgeComponent
  ],
  exports: [
    CardPokemonComponent,
    UpperCaseFirstLetterPipe,
    BadgeComponent
  ],
  declarations: [
    UpperCaseFirstLetterPipe
  ]
})
export class SharedModule { }
