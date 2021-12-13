import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../services/firebase-service.service';


@Component({
  selector: 'app-unete',
  templateUrl: './unete.page.html',
  styleUrls: ['./unete.page.scss'],
})
export class UnetePage implements OnInit {

  constructor(private services:FirebaseServiceService) { }

  ngOnInit() {
    this.services.getUnete();
  }
  OnSubmit(UneteForm: NgForm){
    this.services.insertarUnete(UneteForm.value);
    this.resetForm(UneteForm)
 
   
   }
   resetForm(UneteForm: NgForm){
     if(UneteForm != null)
     UneteForm.reset();
     this.services.selectTUnete=new Logica();
   }
}
