import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { DefanimalsComponent } from './defanimals/defanimals.component';
import { CooldinosComponent } from './cooldinos/cooldinos.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'animals', component: AnimalsComponent },
	{ path: 'defanimals', component: DefanimalsComponent },
	{ path: 'cooldinos', component: CooldinosComponent, canActivate: [AdminGuard] },

	//redirectTo
	{ path: 'animalss', redirectTo: 'animals', pathMatch: 'full' },
	{ path: 'desanimlas', redirectTo: 'defanimals', pathMatch: 'full' },
	{ path: 'cooldions', redirectTo: 'cooldinos', pathMatch: 'full' },
	{ path: '**', component: ErrorComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
