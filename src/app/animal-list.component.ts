import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() editClick = new EventEmitter();
  ageType: string = "all";

  edit(animal: Animal) {
    this.editClick.emit(animal);
  }

  age(chosen: string) {
    this.ageType = chosen;
  }
}
