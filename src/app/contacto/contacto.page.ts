import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private services:FirebaseServiceService) { }

  ngOnInit() {
    this.services.getContacto();
  }
  OnSubmit(ContactoForm: NgForm){
    this.services.insertarContacto(ContactoForm.value);
    this.resetForm(ContactoForm)
 
   
   }
   resetForm(ContactoForm: NgForm){
     if(ContactoForm != null)
     ContactoForm.reset();
     this.services.selectTUnete=new Logica();
   }

}
