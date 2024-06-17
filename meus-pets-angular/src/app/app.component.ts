import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoButtonModule,
} from '@po-ui/ng-components';
import { ToolbarModule } from './core/toolbar/toolbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoMenuModule,
    PoButtonModule,
    PoPageModule,
    HttpClientModule,
    SharedModule,
    ToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private router: Router
  ){}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: () => this.router.navigate(['']) },
    { label: "Tutores", action: () => this.router.navigate(['owners'])},
    { label: "Pets",action: () => this.router.navigate(['pets'])},
    { label: "Sair"}
  ];


}
