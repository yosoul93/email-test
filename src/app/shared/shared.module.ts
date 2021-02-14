import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // material
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatMomentDateModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    // MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // material
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatMomentDateModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    // MatIconModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class SharedModule {}
