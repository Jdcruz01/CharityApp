import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Contacto } from '../models/contacto';
import { Logica } from '../models/logica';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  Unete: AngularFireList<any>;
  Contacto: AngularFireList<any>;
  Reporte: AngularFireList<any>;

  selectTUnete: Logica = new Logica();


  constructor(private firebase: AngularFireDatabase) { }
  
   getUnete(){
    return this.Unete=this.firebase.list('Unete')   
    }
  getContacto(){
      return this.Contacto=this.firebase.list('Contacto')   
    }
  getReporte(){
        return this.Reporte=this.firebase.list('Reporte')   
      }  
     ReportesA(logica: Logica){
          this.Unete.push({
          Nombre: logica.nombre,
          Correo: logica.correo,
          Direccion: logica.direccion,
          Telefono: logica.telefono,
          Descripcion: logica.descripcion,
         
        });
      }
  insertarUnete(logica: Logica){
    this.ReportesA(logica);

  } 
  insertarContacto(logica: Contacto){
    this.Contacto.push({
      Nombre: logica.nombre,
      Correo: logica.correo,
      Descripcion: logica.descripcion,
    });
  }
  insertarReporte(logica: Logica){
    this.Reporte.push({
      Nombre: logica.nombre,
      Direccion: logica.direccion,
      Telefono: logica.telefono,
      Descripcion: logica.descripcion,
    });
  } 
}
