import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapShot,
}

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private router: Router){}

	canActivate(route: ActivatedRouteSnapshot, 
	state: RouterStateSnapshot)
	
}
