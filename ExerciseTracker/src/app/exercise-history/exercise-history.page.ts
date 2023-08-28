import { Component } from '@angular/core';
import { WorkoutService } from '../services/workout.service'; // Update the import path as needed

interface ExerciseEntry {
  name: string;
  duration: string;
  intensity: number;
  // Add more properties if needed
}

@Component({
  selector: 'app-exercise-history',
  templateUrl: './exercise-history.page.html',
  styleUrls: ['./exercise-history.page.scss'],
})
export class ExerciseHistoryPage {
  exerciseHistory: ExerciseEntry[] = [];
  
  constructor(private workoutService: WorkoutService) {
    this.exerciseHistory = this.workoutService.getExerciseHistory();
  }
}
