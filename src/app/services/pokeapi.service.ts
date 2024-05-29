
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }

  getPokemonSpecies(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon-species/${name}`);
  }
}
