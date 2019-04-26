import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ReactiveFormComponent implements OnInit  {
  reactiveForm: FormGroup;

  ngOnInit(){
    this.createForm()
  }

  createForm(){
    this.reactiveForm = new FormGroup({
      userName : new FormControl('', [Validators.required]),
      password1 : new FormControl('', [Validators.required]),
      password2 : new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
  }
}
