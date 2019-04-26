import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { ValidatorService } from './reactive-form/custom-validator'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ReactiveFormComponent ],
  providers:[ValidatorService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
