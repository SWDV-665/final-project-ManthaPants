import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExerciseHistoryPageRoutingModule } from './exercise-history-routing.module';
import { ExerciseHistoryPage } from './exercise-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseHistoryPageRoutingModule
  ],
  declarations: [ExerciseHistoryPage]
})
export class ExerciseHistoryPageModule {}
