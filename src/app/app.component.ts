import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // SIDENAV

  // ICONS
  constructor(private newIcon: MatIconRegistry,  private domSan: DomSanitizer ){

    newIcon.addSvgIcon('seti', domSan.bypassSecurityTrustResourceUrl('./assets/icons/logo-seti.svg'));
    newIcon.addSvgIcon('cerrar-sesion', domSan.bypassSecurityTrustResourceUrl('./assets/icons/cerrar-sesion.svg'));
    newIcon.addSvgIcon('flecha-atras', domSan.bypassSecurityTrustResourceUrl('./assets/icons/flecha-hacia-atras.svg'));
  
  }

}
