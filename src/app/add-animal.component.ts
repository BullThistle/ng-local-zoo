import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: 'add-animal.component.html'
})

export class AddAnimalComponent {
  @Output() addAnimal = new EventEmitter();

  add(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {

    let animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
    this.addAnimal.emit(animal);
  }
}
