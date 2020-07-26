import { NgModule } from '@angular/core';
import { MaterialDualListboxComponent } from './material-dual-listbox.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [MaterialDualListboxComponent],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    DragDropModule
  ],
  exports: [MaterialDualListboxComponent]
})
export class MaterialDualListboxModule { }
