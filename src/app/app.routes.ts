import { Routes } from '@angular/router';
import { TestRoute1Component } from './test-route1/test-route1.component';
import { TestRoute2Component } from './test-route2/test-route2.component';

export const routes: Routes = [
  { path: '', component: TestRoute1Component },
  {
    path: 'home',
    component: TestRoute2Component,
  },
];
