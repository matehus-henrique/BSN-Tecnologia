// home.page.ts

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    const startId = 1; // ID inicial
    const endId = 100; // ID final

    for (let id = startId; id <= endId; id++) {
      this.pokemonService.getPokemonDetails(id).subscribe((pokemon: any) => {
        this.pokemonService.getPokemonSpecies(id).subscribe((species: any) => {
          const pokemonInfo = {
            id: id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities.map((ability: any) => ability.ability.name),
            types: pokemon.types.map((type: any) => type.type.name),
            description: species.flavor_text_entries.find((entry: any) => entry.language.name === 'en').flavor_text
          };
          this.pokemons.push(pokemonInfo);
        });
      });
    }
  }
}
