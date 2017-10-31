import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
})

export class EditAnimalComponent {
  @Input() animal: Animal;
  @Output() editDone = new EventEmitter();

  done() {
    this.editDone.emit();
  }
}
