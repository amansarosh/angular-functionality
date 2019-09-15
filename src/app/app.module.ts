import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ErrorComponent } from './error/error.component';
import { DefanimalsComponent } from './defanimals/defanimals.component';
import { CooldinosComponent } from './cooldinos/cooldinos.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AnimalsComponent,
		ErrorComponent,
		DefanimalsComponent,
		CooldinosComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
