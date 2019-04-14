import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MditorMdComponent } from './mditor-md.component';

describe('MditorMdComponent', () => {
  let component: MditorMdComponent;
  let fixture: ComponentFixture<MditorMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MditorMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MditorMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
