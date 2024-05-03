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
    const formData = this.myForm.value;

    const subject = formData.asunto;
    const body = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`;

    window.location.href=`mailto:damian.bacque235@gmail.com?subject=${subject}&body=${body}`;
  }
}
