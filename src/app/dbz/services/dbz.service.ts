import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 50000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 2
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 1000000
    }
  ]

  addCharacter(character: Character): void {

    const newCharacter: Character = {id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string | undefined) {
    if (!id) return
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
