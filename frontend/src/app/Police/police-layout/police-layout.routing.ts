import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PersonnelIdentificationComponent } from '../personnel-identification/personnel-identification.component';
import { ReportPersonnelComponent } from '../report-personnel/report-personnel.component';
import { TipOffComponent } from '../tip-off/tip-off.component';
import { CrimeReportComponent } from '../crime-report/crime-report.component';
import { WriteStatementComponent } from '../write-statement/write-statement.component';

export const PoliceLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'personnel_identification', component: PersonnelIdentificationComponent },
    { path: 'tipoff', component: TipOffComponent },
    { path: 'report_personnel', component: ReportPersonnelComponent },
    { path: 'crime_report',     component: CrimeReportComponent },
    { path: 'write_statement',     component: WriteStatementComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },

];
