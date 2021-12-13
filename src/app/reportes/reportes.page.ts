import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logica } from '../models/logica';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor(private services:FirebaseServiceService) { }

  ngOnInit() {
   this.services.getReporte();
  }
  OnSubmit(ReporteForm: NgForm){
   this.services.insertarReporte(ReporteForm.value);
   this.resetForm(ReporteForm)
   }
   resetForm(ReporteForm: NgForm){
     if(ReporteForm != null)
     ReporteForm.reset();
     this.services.selectTUnete=new Logica();
   }
}
