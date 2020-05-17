import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPersonnelComponent } from './report-personnel.component';

describe('ReportPersonnelComponent', () => {
  let component: ReportPersonnelComponent;
  let fixture: ComponentFixture<ReportPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
