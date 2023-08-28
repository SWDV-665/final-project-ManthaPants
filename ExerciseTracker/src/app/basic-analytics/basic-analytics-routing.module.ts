import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicAnalyticsPage } from './basic-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: BasicAnalyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicAnalyticsPageRoutingModule {}
