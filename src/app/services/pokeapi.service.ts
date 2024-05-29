// pokemon.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Função para buscar detalhes básicos do Pokémon
  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }

  // Função para buscar informações sobre a espécie do Pokémon
  getPokemonSpecies(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon-species/${id}`);
  }

  // Exemplo de função para buscar informações sobre os tipos do Pokémon
  getPokemonTypes(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }

  // Exemplo de função para buscar informações sobre as habilidades do Pokémon
  getPokemonAbilities(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }

  // Exemplo de função para buscar informações sobre as estatísticas do Pokémon
  getPokemonStats(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }

  // Exemplo de função para buscar informações sobre o habitat do Pokémon
  getPokemonHabitat(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon-species/${id}`);
  }
}
