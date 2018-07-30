import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeAlertComponent } from './exe-alert.component';

describe('ExeAlertComponent', () => {
  let component: ExeAlertComponent;
  let fixture: ComponentFixture<ExeAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
