import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon';


  getPokemonList(limit: number, offset: number) {
    return this.http.get<any>(`${this.url}?limit=${limit}&offset=${offset}`).pipe(
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.getPokemons(resPokemons.url).subscribe({
            next: res => {
              resPokemons.pokemon = res
            }
          })
        })
      })
    )
  }

  getPokemons(url: any) {
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }
}
