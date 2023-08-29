import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinLoaderComponent } from './spin-loader/spin-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule
  ],
  declarations: [
    SpinLoaderComponent
  ],
  exports: [
    SpinLoaderComponent

  ]
})
export class SharedModule { }
