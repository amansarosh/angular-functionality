import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldinosComponent } from './cooldinos.component';

describe('CooldinosComponent', () => {
	let component: CooldinosComponent;
	let fixture: ComponentFixture<CooldinosComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ CooldinosComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CooldinosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
