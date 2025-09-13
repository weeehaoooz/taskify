import { Component } from '@angular/core';
import { LogoComponent } from "../../components/logo/logo.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: 'tsk-navbar',
  imports: [
    LogoComponent, 
    SearchBarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
