import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeReportComponent } from './crime-report.component';

describe('CrimeReportComponent', () => {
  let component: CrimeReportComponent;
  let fixture: ComponentFixture<CrimeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
