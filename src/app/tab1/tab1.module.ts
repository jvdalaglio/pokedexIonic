import { CardPokemonComponent } from './../shared/card-pokemon/card-pokemon.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CardPokemonComponent
  ],
  declarations: [Tab1Page, PokeListComponent]
})
export class Tab1PageModule {}
