import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { FlashMessagesService} from 'angular2-flash-messages';

import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(
		private authService: AuthService,
		private router: Router,
		private flashMessage: FlashMessagesService
	) { }

	canActivate() {
		if(this.authService.loggedIn()) {
			return true;
		} else {
			this.flashMessage.show('You must be logged in to view this page', {
				cssClass: 'alert-danger absolute-high-z',
				timeout: 3000
			});
			this.router.navigate(['/login']);
			return false;
		}
	}
}