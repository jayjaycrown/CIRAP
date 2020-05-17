import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteStatementComponent } from './write-statement.component';

describe('WriteStatementComponent', () => {
  let component: WriteStatementComponent;
  let fixture: ComponentFixture<WriteStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
