import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolfellowComponent } from './schoolfellow.component';

describe('SchoolfellowComponent', () => {
  let component: SchoolfellowComponent;
  let fixture: ComponentFixture<SchoolfellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolfellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolfellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
