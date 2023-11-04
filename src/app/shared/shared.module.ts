import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    CardPokemonComponent
  ],
  exports: [
    CardPokemonComponent
  ],
  declarations: []
})
export class SharedModule { }
