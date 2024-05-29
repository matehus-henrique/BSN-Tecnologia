
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  limit: number = 20;
  offset: number = 0;
  currentPage: number = 1;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe(response => {
      const results = response.results;
      results.forEach((result: any) => {
        this.pokemonService.getPokemonDetails(result.name).subscribe(details => {
          this.pokemons.push({
            name: details.name,
            image: details.sprites.front_default,
            height: details.height,
            weight: details.weight,
            abilities: details.abilities.map((ability: any) => ability.ability.name),
            types: details.types.map((type: any) => type.type.name),
            description: ''
          });
          this.pokemonService.getPokemonSpecies(details.name).subscribe(species => {
            const flavorText = species.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
            this.pokemons.find(pokemon => pokemon.name === details.name)!.description = flavorText ? flavorText.flavor_text : 'No description available';
          });
        });
      });
    });
  }

  nextPage() {
    this.offset += this.limit;
    this.currentPage++;
    this.pokemons = [];
    this.loadPokemons();
  }

  prevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.currentPage--;
      this.pokemons = [];
      this.loadPokemons();
    }
  }
}
