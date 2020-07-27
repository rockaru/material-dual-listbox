import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDualListboxComponent } from './material-dual-listbox.component';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [MaterialDualListboxComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [MaterialDualListboxComponent]
})
export class MaterialDualListboxModule { }
