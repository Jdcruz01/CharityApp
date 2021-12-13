import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage implements OnInit {

  constructor(private authSvc:ServicesService, private router:Router) { }

  ngOnInit() {
  }
  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value).then();
      if(user){
        this.router.navigate(['apaddescripninoscausas']);
      }
    
    } catch (error) {
      alert("Correo o Contraseña incorrecto");
    }
  }
}
