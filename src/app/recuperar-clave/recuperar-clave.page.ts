import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {

  constructor(private authSvc:ServicesService,private router:Router) { }

  ngOnInit() {
  }
  async onResetPassword(email) {
    try {
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['iniciar']);
    } catch (error) {
      console.log('Error->', error);
    }
  }
}
