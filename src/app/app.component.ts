import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/folder/Bienvenido', icon: 'home' },
    { title: 'Nosotros', url: '/nosotros', icon: 'body' },
    { title: 'Servicios', url: '/servicios', icon: 'bookmark' },
    { title: 'Historia', url: '/historia', icon: 'newspaper' },
    { title: 'Ubicacion', url: '/ubicacion', icon: 'location' },
    { title: 'Haz tu donacion', url: '/donaciones', icon: 'heart' },
    { title: 'Reportes', url: '/reportes', icon: 'reader' },
    { title: 'Testimonios', url: '/testimonios', icon: 'archive' },
    { title: 'Publicaciones', url: '/publicaciones', icon: 'bookmark' },
    { title: 'Galeria de imagenes', url: '/galeria', icon: 'camera' },
    { title: 'Nuestros planes', url: '/nuestros', icon: 'document' },
    { title: 'Unete', url: '/unete', icon: 'enter' },
    { title: 'Contacto', url: '/contacto', icon: 'call' }
  ];
  public labels = ['Derechos Resevados'];
  constructor() {}
}
