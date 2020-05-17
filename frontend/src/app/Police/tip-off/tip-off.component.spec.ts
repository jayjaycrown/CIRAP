import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipOffComponent } from './tip-off.component';

describe('TipOffComponent', () => {
  let component: TipOffComponent;
  let fixture: ComponentFixture<TipOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
