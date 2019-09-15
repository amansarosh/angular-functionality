import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefanimalsComponent } from './defanimals.component';

describe('DefanimalsComponent', () => {
	let component: DefanimalsComponent;
	let fixture: ComponentFixture<DefanimalsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ DefanimalsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DefanimalsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
