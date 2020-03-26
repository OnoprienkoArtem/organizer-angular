import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelectorComponent } from './celector.component';

describe('CelectorComponent', () => {
  let component: CelectorComponent;
  let fixture: ComponentFixture<CelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
