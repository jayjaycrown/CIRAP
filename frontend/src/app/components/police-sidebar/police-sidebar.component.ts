import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/police/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/police/personnel_identification', title: 'Personnel Identification', icon: 'person', class: '' },
  { path: '/police/report_personnel', title: 'Report Personnel', icon: 'person', class: '' },
  { path: '/police/tipoff', title: 'Send A Tip off', icon: 'person', class: '' },
  { path: '/police/crime_report', title: 'Report A Crime', icon: 'person', class: '' },
  { path: '/police/write_statement', title: 'Write A Statement', icon: 'person', class: '' },

];

@Component({
  selector: 'app-police-sidebar',
  templateUrl: './police-sidebar.component.html',
  styleUrls: ['./police-sidebar.component.css']
})
export class PoliceSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
