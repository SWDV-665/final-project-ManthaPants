import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseHistoryPage } from './exercise-history.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseHistoryPageRoutingModule {}
