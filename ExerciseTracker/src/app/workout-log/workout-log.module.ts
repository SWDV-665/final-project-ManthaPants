import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutLogPage } from './workout-log.page'; // Make sure the import path is correct

const routes: Routes = [
  {
    path: '',
    component: WorkoutLogPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WorkoutLogPage], // Exported declaration
})
export class WorkoutLogPageModule {}
