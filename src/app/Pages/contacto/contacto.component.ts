import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  myForm: FormGroup
  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      nombre:[],
      asunto: [],
      email: [],
      mensaje: []
    })
  }

  Enviar(){
    console.log("asd")
  }
}
