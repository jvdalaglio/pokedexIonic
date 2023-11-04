import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/services/poke-api.service';
import { map } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private _pokemonService: PokeApiService, private loadingCtrl: LoadingController) { }
  pokeList: [] = [];
  offset: number = 0;
  limit: number = 10;
  loading: boolean = true;

  ngOnInit() {
    this.getPokemons(this.limit, this.offset);
  }

  async isLoading(isLoading: boolean) {
    const loading = await this.loadingCtrl.create({
      message: '...',
      spinner: 'circles',
      duration: isLoading ? 500 : 0
    });
    if(isLoading) {
      loading.present();
      this.loading = true
    } else {
      this.loading = false
      loading.dismiss('close');
    }
  }


  getPokemons(limit?: any, offset?: any) {
    this.isLoading(true)
    this._pokemonService.getPokemonList(limit, offset).subscribe({
      next: (res) => {
        this.pokeList = res.results
        this.isLoading(false)
      }
    })
  }

  morePokemons() {
    this.isLoading(true);
    this.limit += 10;
    this.getPokemons(this.limit, this.offset);
  }

}
