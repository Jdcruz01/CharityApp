import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  constructor(private authSvc:ServicesService,private router:Router) { }

  ngOnInit() {
  }
  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        this.router.navigate(['apaddescripninoscausas'])
      }
    } catch (error) {
      alert("Correo o Contraseña incorrecto");
    }
  }
}
