import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosspicComponent } from './crosspic.component';

describe('CrosspicComponent', () => {
  let component: CrosspicComponent;
  let fixture: ComponentFixture<CrosspicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosspicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosspicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
