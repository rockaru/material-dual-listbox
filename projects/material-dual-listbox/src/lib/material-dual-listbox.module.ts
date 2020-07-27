import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDualListboxComponent } from './material-dual-listbox.component';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [MaterialDualListboxComponent],
  imports: [
    BrowserModule,
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
