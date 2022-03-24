import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrivenComponent } from './driven/driven.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiologComponent } from './driven/diolog/diolog.component';


@NgModule({
  declarations: [
    AppComponent,
    DrivenComponent,
    DiologComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
