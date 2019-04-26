import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from './custom-validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ReactiveFormComponent implements OnInit, OnChanges  {
  reactiveForm: FormGroup;

  constructor(){    
  }

  ngOnChanges(value : SimpleChanges){

  }

  ngOnInit(){
    this.createForm()
    this.reactiveForm.valueChanges.subscribe(val =>{
      if(val.password1){
         this.reactiveForm.controls.password2.setValidators(ValidatorService.checkPasswordMatch(val.password1))
      }
    })
  }

  createForm(){
    this.reactiveForm = new FormGroup({
      userName : new FormControl('', [Validators.required]),
      password1 : new FormControl('', [Validators.required]),
      password2 : new FormControl('', [Validators.required])
    })   
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }
}
