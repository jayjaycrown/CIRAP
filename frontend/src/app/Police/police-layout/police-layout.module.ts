import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoliceLayoutRoutes } from './police-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PersonnelIdentificationComponent } from '../personnel-identification/personnel-identification.component';
import { ReportPersonnelComponent } from '../report-personnel/report-personnel.component';
import { TipOffComponent } from '../tip-off/tip-off.component';
import { CrimeReportComponent } from '../crime-report/crime-report.component';
import { WriteStatementComponent } from '../write-statement/write-statement.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PoliceLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
  ],
  declarations: [
    DashboardComponent,
    PersonnelIdentificationComponent,
    ReportPersonnelComponent,
    TipOffComponent,
    CrimeReportComponent,
    WriteStatementComponent,
  ]
})

export class PoliceLayoutModule { }
