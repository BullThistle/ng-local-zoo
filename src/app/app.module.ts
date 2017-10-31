import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { AddAnimalComponent } from './add-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [      BrowserModule,
                  FormsModule,
                  ClarityModule.forRoot(),
  ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  AddAnimalComponent,
                  EditAnimalComponent,
                  AgePipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
