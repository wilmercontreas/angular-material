import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ICONS
  constructor(private newIcon: MatIconRegistry,  private domSan: DomSanitizer ){
    newIcon.addSvgIcon('log-out', domSan.bypassSecurityTrustResourceUrl('assets/icons/cerrar-sesion.svg'));
    newIcon.addSvgIcon('logo', domSan.bypassSecurityTrustResourceUrl('assets/icons/logo-seti-blanco.svg'));
    newIcon.addSvgIcon('back', domSan.bypassSecurityTrustResourceUrl('./assets/icons/flecha-hacia-atras.svg'));
    newIcon.addSvgIcon('add', domSan.bypassSecurityTrustResourceUrl('./assets/icons/mas.svg'));
  }
  
}