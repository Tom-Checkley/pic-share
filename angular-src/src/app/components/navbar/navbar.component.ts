import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogOutClick() {
    this.authService.logOut();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success fixed-high-z',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }
}
