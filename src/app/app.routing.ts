import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} form './_guards/index';
import {routing} from './app.routing';

const appRoutes: Routes = [
	{path: '', component: HomeComponent, canActivate: [AuthGuard]},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterCompnent},
	// Otherwise redirect to home
	{path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);



