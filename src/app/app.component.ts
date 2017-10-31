import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  animalsMaster: Animal[] = [
    new Animal("Red Panda", "Xiu Xiu", 3, "Omnivore", "Temperate Forest", 2, "Male", "Playing", "Snow"),
    new Animal("Mountain Goat", "Benny", 1, "Herbivore", "Northern Trail", 4, "Female", "Grass", "Lakes"),
    new Animal("Zebra", "Burr", 1, "Omnivore", "African Savanna", 1, "Male", "Stripes", "No stripes"),
    new Animal("Maned Wolf", "Wolfy", 8, "Carnivore", "Temperate Forest", 2, "Male", "Meat", "Veggies"),
    new Animal("Lemur", "Jan", 4, "Herbivore", "Tropical Rain Forest", 1, "Male", "Night", "Day"),
    new Animal("Gorilla", "Sam", 12, "Omnivore", "Tropical Rain Forest", 5, "Male", "Music", "Silence"),
  ];
  focusAll: boolean = true;
  focusAdd: boolean = false;
  editAnimal: Animal;

  add(animal: Animal) {
    this.animalsMaster.push(animal);
    this.all();
  }

  showAdd() {
    this.focusAll = false;
    this.focusAdd = true;
    this.editAnimal = null;
  }

  all() {
    this.focusAll = true;
    this.focusAdd = false;
    this.editAnimal = null;
  }
  
  edit(animal: Animal) {
    this.editAnimal = animal;
    this.focusAll = false;
  }

  closeEdit() {
    this.editAnimal = null;
    this.focusAll = true;
  }
}

